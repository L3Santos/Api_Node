import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";


class RemoveOrderController {
    async handle(req: Request, res: Response){
        
        const OS_ID = req.query.OS_ID as string;

        const removeOrder = new RemoveOrderService();
        
        const order = await removeOrder.execute({
            OS_ID
        })

        return res.json(order);
    }
}

export { RemoveOrderController }