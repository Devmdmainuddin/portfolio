"use client";
import {Magnetic} from "../ui/magnetic";
import {useForm} from "react-hook-form";

import {zodResolver} from "@hookform/resolvers/zod";
import {ContactFormData, contactFormSchema} from "@/app/validation/contactSchema";

const Form = () => {
  const springOptions = {bounce: 0.1};

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong while submitting the form.");
      }

      const responseData = await response.json();
      alert(responseData.message || "Form submitted successfully!");
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="w-full p-6 bg-slate-50 shadow-2xl  rounded-sm">
          <div className="">
            <h2 className="text-lg font-semibold leading-none tracking-tight text-zinc-900 ">
              Have any Questions?
            </h2>
            <h3 className="text-sm text-zinc-900 ">Meet me</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
            <input
              {...register("firstName")}
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:border-outline"
              placeholder="First Name"
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}

            <input
              {...register("lastName")}
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:shadow-outline"
              placeholder="Last Name"
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}

            <input
              {...register("email")}
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:shadow-outline"
              placeholder="Email"
              type="email"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

            <input
              {...register("phone")}
              className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:shadow-outline"
              placeholder="Phone"
              type="tel"
            />
            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
          </div>

          <div className="my-4">
            <textarea
              {...register("message")}
              placeholder="Message"
              className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:shadow-outline resize-none"
            />
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
          </div>

          <div className="my-2 ">
            <Magnetic intensity={0.2} springOptions={springOptions} actionArea="global" range={200}>
              <button type="submit" className="btn inline-block">
                <Magnetic
                  intensity={0.1}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <span>Send Message</span>
                </Magnetic>
              </button>
            </Magnetic>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
