import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"

const createUser = async (payload:Prisma.UserCreateInput):Promise<User>=>{
    console.log("create user!!!")
    console.log(payload)
    const createUser = await prisma.user.create({
        data:payload
    })
    return createUser
}

const getAllFromDB= async()=>{
    const result = await prisma.user.findMany({
        select:{
            id:true,
            name:true,
            email:true,
            phone:true,
            picture:true,
            createdAt:true,
            updatedAt:true,
            role:true,
            status:true,
            posts:true
        },
        orderBy:{
            createdAt:"desc"
        },


    });
    return result
}

const getUserById = async(id:number)=>{
    const result = await prisma.user.findUnique({
        where:{
            id
        },
        select:{
            name:true,
            email:true,
            phone:true,
            picture:true,
            createdAt:true,
            updatedAt:true,
            role:true,
            status:true,
            posts:true

        }
    })
    return result
}


const deletById = async(id:number)=>{
    const result = await prisma.user.delete({
        where:{
            id
        },
      
    })
    return result
}
// const updateData = async(id:number)=>{
//     const result = await prisma.user.updateMany(
//         {
//             where:{
//                 id
//             }
//         }
           
//     )
//     return result
// }


const updateUser = async (id: number, payload: any) => {
  const result = await prisma.user.update({
    where: { id },
    data: payload,
  })
  return result
}


export const UserService = {
    createUser,
    getAllFromDB,
    getUserById,
   deletById,
   updateUser
}