import express from 'express'
import { UserController } from './user.controller';

const router = express.Router();

router.get(
    "/",
    UserController.getAllFromDB
)
router.get("/:id",
    UserController.getUserById
)
router.delete("/:id",
    UserController.deletUserById
)

router.put("/:id",
    UserController.updateUserById
)


router.post(
    "/",
    UserController.createUser
)

export const UserRouter = router