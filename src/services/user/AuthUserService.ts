import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import {sign } from 'jsonwebtoken';



interface AuthResquest{
    EMAIL: string;
    SENHA: string;
}

class AuthUserService{
    async execute({EMAIL, SENHA}: AuthResquest){

        // verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where:{
                EMAIL: EMAIL
            }
        })
        
        if(!user){
            throw new Error("Usuario ou senha incorreta")
        }

        // verificar se a senha enviada esta correta
        const passwordMatch = await compare(SENHA, user.SENHA)

        if(!passwordMatch){
            throw new Error("Usuario ou senha incorreta")
        }

        // após as validações, ele gera um token para o usuario
        const token = sign(
            {
                nome: user.NOME,
                email: user.EMAIL
            },
            process.env.JWT_SECRET,
            {
                subject: user.ID,
                expiresIn: '140d'
            }
        )

        return {
            id: user.ID,
            nome: user.NOME,
            email: user.EMAIL,
            token: token
        }
    }
}

export {AuthUserService}