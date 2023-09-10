import prismaClient from "../../prisma";

interface DetailRequest{
    OS_ID: string;
}

class DetailOrderService {
    async execute({OS_ID}: DetailRequest){
        const orders = await prismaClient.iTEM.findMany({
            where:{
                OS_ID: OS_ID
            },
            include:{
                PRODUTO:true,
                OS:true
            }
        })

        return orders;
    }
}

export { DetailOrderService }