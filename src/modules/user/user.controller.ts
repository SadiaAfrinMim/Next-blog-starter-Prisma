import { Request, Response } from "express";
import { UserService } from "./user.service";



const createUser = async(req:Request,res:Response)=>{
    try{
        const result = await UserService.createUser(req.body)
        console.log("console from controller")
        res.status(201).send(result)
    }
    catch(error){
        res.status(500).send(error)
    }
}

const getAllFromDB = async(req:Request,res:Response)=>{
    try{
        const result = await UserService.getAllFromDB()
        console.log("console from controller")
        res.status(201).send(result)
    }
    catch(error){
        res.status(500).send(error)
    }
}

const getUserById = async (req:Request,res:Response)=>{
    try{
        const result= await UserService.getUserById(Number(req.params.id))
        res.status(201).send(result)
    }
    catch(error){
        res.status(500).send(error)
    }
}


const deletUserById = async (req:Request,res:Response)=>{
    try{
        const result= await UserService.deletById(Number(req.params.id))
        res.status(201).send(result)
    }
    catch(error){
        res.status(500).send(error)
    }
}


const updateUserById = async (req:Request,res:Response)=>{
    try{
        const result= await UserService.updateUser(Number(req.params.id),req.body)
        res.status(201).send(result)
    }
    catch(error){
        res.status(500).send(error)
    }
}
export const UserController ={
    createUser,
    getAllFromDB,
    getUserById,
    deletUserById,
    updateUserById
}