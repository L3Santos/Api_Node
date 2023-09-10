import prismaClient from "../../prisma";

interface OrderResquest{
    TABLE: number,
    NOME: string
}

class CreateOrderService {
    async execute({TABLE, NOME}: OrderResquest){
        const order = await prismaClient.oS.create({
            data:{
                TABLE: TABLE,
                NOME: NOME
            }
        })
        return order;
    }
}

export { CreateOrderService }