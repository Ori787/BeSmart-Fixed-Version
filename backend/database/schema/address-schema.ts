import { Schema } from "mongoose"
import {Iaddress} from "../../@types/user-signup"

const addressSchema = new Schema<Iaddress> ({
    country: {
type: String,
required: true,
    },
    
    city: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },

    state: {
        type: String,
        minlength: 0,
        maxlength: 70,
    },

    street: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 400,
    },

    zip: {
        type: String,
        required: false,
        default: "0",
        minlength: 1,
        maxlength: 350,
    },

    houseNumber: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 10,
    },
});

export {addressSchema};