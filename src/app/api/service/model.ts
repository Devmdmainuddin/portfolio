import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  icon: { type: String, required: true, },
  title: { type: String, required: true, },
  description: { type: String, required: true,
  },
}, { timestamps: true }); 

export default  mongoose.models.service || mongoose.model('service', serviceSchema);


