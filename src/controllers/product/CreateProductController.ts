import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";


class CreateProductController{
    async handle(req: Request, res: Response){
        const { NOME, PRECO, DESCRICAO, CATEGORIA_ID} = req.body

        const createProductService = new CreateProductService();

        if(!req.file){
            throw new Error("Erro upload file")
        } else {
            const { originalname, filename:BANNER } = req.file;

            const product = await createProductService.execute({
                NOME,
                PRECO,
                DESCRICAO,
                BANNER,
                CATEGORIA_ID
            });
    
            return res.json(product)
        }
    }
}

export { CreateProductController }