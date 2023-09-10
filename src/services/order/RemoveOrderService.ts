import prismaClient from "../../prisma";

interface OrderRequest{
    OS_ID: string
}

class RemoveOrderService {
    async execute({ OS_ID }: OrderRequest){

        const order = await prismaClient.oS.delete({
            where:{
                ID: OS_ID
            }
        })
        return order
    }
}

export { RemoveOrderService }