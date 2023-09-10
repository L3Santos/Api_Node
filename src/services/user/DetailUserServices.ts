import prismaClient from "../../prisma";

class DetailUserServices {
    async execute(user_id: string){
        
        const user = await prismaClient.user.findFirst({
            where:{
                ID: user_id
            },
            select:{
                ID: true,
                NOME: true,
                EMAIL: true
            }
        });
        
        return user;
    }
}

export { DetailUserServices }