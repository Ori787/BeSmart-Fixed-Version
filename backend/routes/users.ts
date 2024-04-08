import { Router } from "express";

import { UserModel } from "../model/user-signup-model";

import { auth } from "../services/auth-service";

import { Ijwtpayload } from "../@types/user-signup";

import { validateSignUp } from "../middleware/validation";

import { validateLogin } from "../middleware/validation";

import { userAuth } from "../middleware/is-user";

import { isAdmin } from "../middleware/is-admin";

import { isAdminOrUser } from "../middleware/is-admin-or-user";

import bcrypt from "bcrypt";


const router = Router();


router.post("/", validateSignUp, async (req, res, next) => {
    try {
    if (req.body && req.body.password) {
      const hashedPassword = await auth.hashPassword(req.body.password)
    console.log(req.body)
    const newUser = new UserModel({...req.body,
    password: hashedPassword});
const result = await newUser.save();
 res.status(200).json(result);
    }} catch (err){
console.log("Error", err)
res.status(400).json({ error: "Bad Request"})
    }
})


router.get("/", isAdmin, async (req, res, next) => {

        try {
          
          const allUsers = await UserModel.find();
          res.json(allUsers);

        } catch (err) {
            console.log("an error occured while trying to get the users from the database", err)
            res.status(400).json({ error: "Bad Request"})
          next(err);
        }

      });


router.get("/:_id", isAdminOrUser, async (req, res, next) => {
        try{
const { _id } = req.params;
const user = await UserModel.findById(_id);
res.json(user);
        } catch (e) {
            console.error("could not find a user by the given id", e)
            res.status(400).json({ error: "Bad Request"})
next(e);
        }
      });

      
router.post("/login", validateLogin, async (req, res, next) => {
try {

  const { email, password } = req.body as {email: string, password: string}


    const user = await UserModel.findOne({ email })


    if (!user || !(await bcrypt.compare(password, user.password))) {
  return res.status(401).json({message: "Invalid password or email. please try again."})
    };

    const payload : Ijwtpayload = {
      email: user.email,
      isAdmin: user.isAdmin,
  };

  const token = auth.generateJWT(payload);

  res.status(200).json({ token });

  } catch (err) {
console.error("Error", err)
res.status(501).json({message: "Internal server error"})
  };
});

router.put("/:_id", isAdminOrUser, async (req, res, next) => {
  req.body.password = await auth.hashPassword(req.body.password);
    try{
        const { _id } = req.params;
                   const user = await UserModel.findByIdAndUpdate({_id},
                    req.body,
                   {new: true}
                   );
                   res.json(user);
                } catch (e) {
                  res.status(400).json({ error: "Bad Request"})
        next(e);
                }
});


router.delete("/:_id", isAdminOrUser, async (req, res, next) => {
  try{
const { _id } = req.params;
const user = await UserModel.findByIdAndDelete(_id);
res.json(user);
  } catch (e) {
      console.error("could not delete a user with the selected id", e)
      res.status(400).json({ error: "Bad Request"})
next(e);
  }
});


router.patch("/:_id", userAuth, async (req, res, next) => {
try {
const { _id } = req.params;
const user = await UserModel.findById(_id);
if (user) {
user.isBusiness = req.body.isBusiness;
  await user.save();
  res.json({ message: 'User business status updated successfully', user})
} else {
  console.log('User not found');
  res.status(404).json({ error: 'User not found' });
}
} catch (err) {
console.error("an error occured while trying to change the business status", err)
res.status(400).json({ error: "Bad Request"})
}
})

export { router as UsersRouter };