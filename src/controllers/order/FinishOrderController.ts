import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";


class FinishOrderController {
    async handle(req: Request, res: Response){
        const { OS_ID } = req.body;

        const finishOrderService = new FinishOrderService();

        const order = await finishOrderService.execute({
            OS_ID
        })

        return res.json(order);
    }
}

export { FinishOrderController }