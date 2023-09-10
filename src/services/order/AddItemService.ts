import prismaClient from "../../prisma";

interface ItemRequest{
    OS_ID: string,
    PRODUTO_ID: string,
    QTD: number
}

class AddItemService {
    async excute({ OS_ID, PRODUTO_ID, QTD }: ItemRequest){

        const order = await prismaClient.iTEM.create({
            data:{
                OS_ID: OS_ID,
                PRODUTO_ID: PRODUTO_ID,
                QTD
            }
        })

        return order;
    }
}

export { AddItemService }