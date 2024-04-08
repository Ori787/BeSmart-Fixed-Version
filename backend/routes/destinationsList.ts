import { Router } from "express";
import { DestinationModel } from "../model/destination-list-model";
import { isAdmin } from "../middleware/is-admin";


const router = Router();


router.get("/", async (req,res,next) => {
try{
    const destinationsRec = await DestinationModel.find();

    res.json(destinationsRec);

} catch (err) {

    next(err)
};
});


router.delete("/:_id", isAdmin, async (req, res, next) => {
  try {
    const destinationId = req.params._id;
    const deletedDestination = await DestinationModel.findByIdAndDelete(destinationId);
    
    if (!deletedDestination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.status(200).json({ message: "Destination deleted successfully", deletedDestination });
  } catch (err) {
    next(err); // Forward the error to the error handling middleware
  }
});


router.post("/", isAdmin, async (req,res,next) => {
try {
  const newDestination = new DestinationModel({...req.body})
  const result = await newDestination.save();
  res.status(200).json(result);
} catch (err) {
    next (err)
};
});

export { router as DestinationRouter };