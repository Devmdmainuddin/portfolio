"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {reviewSchema, ReviewFormValues} from "../../app/validation/reviewSchema";

export default function ReviewForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: ReviewFormValues) => {
    const response = await fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Review submitted successfully!");
    } else {
      alert("Failed to submit review.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
      <div>
        <label htmlFor="name">Name</label>
        <input {...register("name")} className="border p-2 w-full" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="professionName">Profession Name</label>
        <input {...register("professionName")} className="border p-2 w-full" />
        {errors.professionName && <p className="text-red-500">{errors.professionName.message}</p>}
      </div>
      <div>
        <label htmlFor="profession">Profession</label>
        <input {...register("profession")} className="border p-2 w-full" />
        {errors.profession && <p className="text-red-500">{errors.profession.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} className="border p-2 w-full" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          {...register("rating", {valueAsNumber: true})}
          className="border p-2 w-full"
        />
        {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <textarea {...register("comment")} className="border p-2 w-full" />
        {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
