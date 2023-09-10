import prismaClient from "../../prisma";

interface ListOrder{
    RASCUNHO: boolean;
    STATUS: boolean;
}

class ListOrderService {
    async execute({RASCUNHO, STATUS}: ListOrder){

        const orders = await prismaClient.oS.findMany({
            where:{
                RASCUNHO: RASCUNHO,
                STATUS: STATUS,
            },
            orderBy:{
                CREATED_AT: 'desc'
            }
        })
        
        return orders;
    }
}

export { ListOrderService }