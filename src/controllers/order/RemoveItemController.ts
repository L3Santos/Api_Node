import { Request, Response } from "express";
import { RomoveItemService } from "../../services/order/RomoveItemService";


class RomoveItemController {
    async handle(req: Request, res: Response){

        const ITEM_ID = req.query.ITEM_ID as string;

        const romoveItem = new RomoveItemService();

        const order = await romoveItem.execute({
            ITEM_ID
        })
        return res.json(order)
    }
}

export { RomoveItemController }