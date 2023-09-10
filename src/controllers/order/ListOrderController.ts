import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";


class ListOrderController {
    async handle(req: Request, res: Response){

        const RASCUNHO = req.query.RASCUNHO as unknown as boolean;
        const STATUS = req.query.STATUS as unknown as boolean

        const listOrderService = new ListOrderService();

        const orders = await listOrderService.execute({
            RASCUNHO,
            STATUS
        });

        return res.json(orders);
    }
}

export { ListOrderController }