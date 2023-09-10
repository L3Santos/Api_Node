import prismaClient from "../../prisma";

interface ItemRequest{
    ITEM_ID: string;
}

class RomoveItemService {
    async execute({ITEM_ID}: ItemRequest){

        const order = await prismaClient.iTEM.delete({
            where:{
                ID: ITEM_ID
            }
        })
        return order;
    }
}

export { RomoveItemService }