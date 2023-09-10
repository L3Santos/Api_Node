import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
    async handle(req: Request, res: Response){
        
        const CATEGORIA_ID = req.query.CATEGORIA_ID as string;

        const ListByCategory = new ListByCategoryService();

        const product = await ListByCategory.execute({
            CATEGORIA_ID
        });

        return res.json(product);
    }
}

export { ListByCategoryController }