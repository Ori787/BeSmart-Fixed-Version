import { Schema } from 'mongoose';

import { Iuser }  from "../../@types/user-signup"

import { addressSchema } from './address-schema';

import { nameSchema } from './name-schema';
import { imageSchema } from './image-schema';

const userSignUpSchema = new Schema<Iuser>({
    name: nameSchema,
    address: addressSchema,
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 200,
    },
    PhoneNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 12,
    },
    image: {
        type: imageSchema,
        required: false,
        default: {
            alt: "profile-pic",
            url: "https://picsum.photos/200/300",
        },
    },
    password: {
        required: true,
        type: String,
        minlength: 7,
        maxlength: 100,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    isBusiness: {
        type: Boolean,
        required: true,
    }
}, { collection: 'custom_collection_name' });


export {userSignUpSchema};