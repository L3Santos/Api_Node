import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";


class DetailOrderController {
    async handle(req: Request, res: Response){
        const OS_ID = req.query.OS_ID as string;

        const detailOrderService = new DetailOrderService();

        const orders = await detailOrderService.execute({
            OS_ID
        })
        
        return res.json(orders)
    }
}

export { DetailOrderController }