import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";


class AddItemController{
    async handle(req: Request, res: Response){

        const { OS_ID, PRODUTO_ID, QTD} = req.body;

        const addItem = new AddItemService();

        const order = await addItem.excute({
            OS_ID,
            PRODUTO_ID,
            QTD
        })

        return res.json(order);
    }
}

export { AddItemController }