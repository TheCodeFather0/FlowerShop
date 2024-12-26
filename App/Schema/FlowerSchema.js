import { model, Schema } from "mongoose";

const flowerSchema = new Schema(
  {
    flowerName: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    reviews: [
      {
        reviewId: { type: String, required: true },
        userName: { type: String, required: true },
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
    thumbnail: { type: String, required: true },
    images: [{ type: String }],
  },
  { versionKey: false }
);

export const FlowerModel = model("Flower", flowerSchema);
