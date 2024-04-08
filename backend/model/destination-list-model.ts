import mongoose from "mongoose";

import { destinationSchema, DestinationDocument } from "../database/schema/destination-list";

const DestinationModel = mongoose.model<DestinationDocument>("Travel-Recommendations", destinationSchema);

export { DestinationModel };