import prismaClient from "../../prisma";

interface CategoryResquest{
    NOME: string
}

class CreateCategoryServices{
    async execute({ NOME }: CategoryResquest){

        if(NOME === ''){
            throw new Error("Nome Invalido")
        }
        const category = await  prismaClient.cATEGORIA.create({
            data:{
                NOME: NOME
            },
            select:{
                ID:true, 
                NOME: true
            }
        })

        return category;
    }
}

export {CreateCategoryServices}