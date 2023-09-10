import prismaClient from "../../prisma";

interface OrderRequest{
    OS_ID: string
}

class FinishOrderService {
    async execute({OS_ID}: OrderRequest){
        const order = await prismaClient.oS.update({
            where:{
                ID: OS_ID,
            },
            data:{
                STATUS:true,
            }
        })
        return order;
    }
}

export { FinishOrderService }