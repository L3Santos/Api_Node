import prismaClient from "../../prisma";

interface ProductRequest{
    CATEGORIA_ID: string;
}

class ListByCategoryService {
    async execute({ CATEGORIA_ID }: ProductRequest){

        const findByCategory = await prismaClient.pRODUTO.findMany({
            where:{
                CATEGORIA_ID: CATEGORIA_ID
            }
        })
        
         return findByCategory;
    }
}

export { ListByCategoryService }