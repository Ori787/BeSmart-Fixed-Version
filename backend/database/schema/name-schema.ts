import { Schema } from "mongoose";

import { Iname } from "../../@types/user-signup";

const nameSchema = new Schema<Iname> ({
first: {
type: String,
required: true,
minlength: 2,
maxlength: 50,
},

middle: {
    type: String,
    required: false,
    default: "",
    minlength: 0,
    maxlength: 50,
},

last: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
},
});

export {nameSchema};