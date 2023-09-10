import { Request, Response, Router } from "express";
import { DetailUserServices } from "../../services/user/DetailUserServices";


class DetailUserController {
    async hadle(req: Request,  res: Response){

        const user_id = req.user_id;

        const detailUserServices = new DetailUserServices();

        const user = await detailUserServices.execute(user_id);

        return res.json(user);
    }
}

export {DetailUserController}