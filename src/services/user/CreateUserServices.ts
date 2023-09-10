import prismaClient from "../../prisma/index";
import { hash } from "bcryptjs";

interface UserResquest{
    NOME: string;
    EMAIL: string;
    SENHA: string;
}

class CreateUserService{
    async execute({NOME, EMAIL, SENHA}: UserResquest){

        // verifica e valida o email
        if(!EMAIL){
            throw new Error("Email Incorreto")
        }
        // valida e verifica se esse email já esta cadastrado na plataforma
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                EMAIL: EMAIL
            }
        })

        if(userAlreadyExists){
            throw new Error("Email ja cadastrado")
        }

        const senhahash = await hash(SENHA, 8)

        const user = await prismaClient.user.create({
            data:{
                NOME: NOME,
                EMAIL: EMAIL,
                SENHA: senhahash,
            },
            select:{
                ID: true,
                NOME: true, 
                EMAIL: true
            }
        })

        
        return user
    }
}

export { CreateUserService }