import prismaClient from "../../prisma";

interface ProductRequest{
    NOME: string,
    PRECO: string,
    DESCRICAO: string,
    BANNER: string,
    CATEGORIA_ID: string
}


class CreateProductService{
    async execute({NOME, PRECO, DESCRICAO, BANNER, CATEGORIA_ID}: ProductRequest){
        
        const product = await prismaClient.pRODUTO.create({
            data:{
                NOME: NOME,
                PRECO: PRECO,
                DESCRICAO: DESCRICAO,
                BANNER: BANNER,
                CATEGORIA_ID: CATEGORIA_ID
            }
        })

        return product;
    }
}

export { CreateProductService }