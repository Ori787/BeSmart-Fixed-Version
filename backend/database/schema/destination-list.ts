import { Document, Schema } from "mongoose";


interface DestinationDocument extends Document {
  Destination: string;
  Image: string;
  Description: string;
}


const destinationSchema = new Schema<DestinationDocument>({
  Destination: { type: String, required: true },
  Image: { type: String, required: true },
  Description: { type: String, required: true }
});





export { DestinationDocument, destinationSchema };
