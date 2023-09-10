import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    // recebe o token
    const authToken = req.headers.authorization
    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try{
        // valida o token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        // recupera o id do token e coloca dentro de uma variavel user_id dentro do request
        req.user_id = sub
        
        return next()

    } catch(err){
        return res.status(401).end();
    }

}