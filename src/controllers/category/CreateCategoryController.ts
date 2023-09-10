import { Request, Response } from "express";
import { CreateCategoryServices } from "../../services/category/CreateCategoryService";

class CreateCategoryController{
    async handle(req: Request, res: Response){
        const { NOME } = req.body

        const createCategoryServices = new CreateCategoryServices();

        const category = await createCategoryServices.execute({
            NOME
        });

        return res.json(category);
    }
}

export { CreateCategoryController }