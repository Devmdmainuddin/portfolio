import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    icon: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
  },
  {timestamps: true},
);

export default mongoose.models.service || mongoose.model("service", ServiceSchema);
