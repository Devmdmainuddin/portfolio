import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  professionName: { type: String, required: true },
  profession: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: {type: Date, default: Date.now},
});


export default mongoose.models.Review || mongoose.model('Review', reviewSchema);