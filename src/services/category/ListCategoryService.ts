import prismaClient from "../../prisma";


class ListCategoryServices {
    async execute(){
        const category = await prismaClient.cATEGORIA.findMany({
            select:{
                ID: true, 
                NOME: true
            }
        })

        return category;
    }
}

export {ListCategoryServices}