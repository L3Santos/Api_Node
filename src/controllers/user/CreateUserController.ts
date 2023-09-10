import { Router, Request, Response} from 'express';
import { CreateUserService } from '../../services/user/CreateUserServices';


class CreateUserController{
    async handle(req: Request, res: Response){
        const {NOME, EMAIL, SENHA} = req.body

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            NOME,
            EMAIL,
            SENHA
        });

        return res.json({user})
    }
}

export {CreateUserController};