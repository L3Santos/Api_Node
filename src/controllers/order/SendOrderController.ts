import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";


class SendOrderController {
    async handle(req: Request, res: Response) {
        const {OS_ID} = req.body;

        const sendOrder = new SendOrderService();

        const order  = await sendOrder.execute({
            OS_ID
        });

        return res.json(order);
    }
}

export { SendOrderController }