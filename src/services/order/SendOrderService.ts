import prismaClient from "../../prisma";

interface OrderRequest{
    OS_ID: string
}

class SendOrderService {
    async execute({OS_ID}: OrderRequest){
        const order = await prismaClient.oS.update({
            where:{
                ID: OS_ID
            },
            data:{
                RASCUNHO: false
            }
        })

        return order;
    }
}

export { SendOrderService }