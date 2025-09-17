import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db"


const loginWithEmailAndPassword = async ({email,password}:{email:string,password:string})=>{
    console.log({email,password})

    const user = await prisma.user.findUnique({
        where:{
            email
        }
    });
    if(!user){
        throw new Error("user not found")
    }
    if(password === user.password){
        return user
    }
    else{
         throw new Error("password is incorrect")

    }

   

}

 const authWithGoogle = async(data:Prisma.UserCreateInput)=>{
        let user = await prisma.user.findUnique({
            where:{
                email:data.email
            }
        })
        if(!user){
            user = await prisma.user.create({
                data
            })
        }
        return user
    }

export const AuthService ={
    loginWithEmailAndPassword,
     authWithGoogle
}