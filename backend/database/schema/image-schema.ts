import { Schema } from "mongoose";
import { Iimage } from "../../@types/user-signup";

const imageSchema = new Schema<Iimage>({
  alt: {
    type: String,
    minlength: 2,
    maxlength: 200,
    required: true,
  },
  url: {
    type: String,
    minlength: 12,
    maxlength: 200,
    required: true,
  },
});

export { imageSchema };