import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    liveLink: {type: String, required: true},
    clientLink: {type: String, required: true},
    serverLink: {type: String},
    tags: {type: [String], default: []},
    createdAt: {type: Date, default: Date.now},
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.project || mongoose.model("project", ProjectSchema);
