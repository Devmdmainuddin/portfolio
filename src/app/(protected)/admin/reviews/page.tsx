"use server";
import React from "react";
import Container from "@/components/shared/Container";
import {fetchReviews} from "@/app/actions/actions";
import {ChevronLeft, ChevronRight, Trash2} from "lucide-react";
import Image from "next/image";

const Reviews = async () => {
  const reviews = await fetchReviews();

  return (
    <div className="bg-[#D0EBEB] dark:bg-[#738188] capitalize">
      <Container>
        <section className="py-8">
          <div className="p-4 mb-6 bg-white shadow rounded ">
            <div className="overflow-x-scroll w-[400px] sm:w-full">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-xs text-gray-500 text-left">
                    <th className="pl-6 pb-3 font-medium">Review ID</th>
                    <th className="pb-3 font-medium">User</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Comments</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews?.map((review) => (
                    <tr key={review._id} className="text-xs bg-gray-100">
                      <td className="py-5 px-6 font-medium">#{review._id}</td>
                      <td className="flex px-4 py-3 ">
                        <Image
                          width={50}
                          height={50}
                          className="w-8 h-8 mr-4 object-cover rounded-sm"
                          src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                          alt=""
                        />
                        <div>
                          <p className="font-medium">{review.name}</p>
                          <p className="text-gray-500">
                            <a href="#">{review.email}</a>
                          </p>
                        </div>
                      </td>
                      <td className="font-medium">
                        {review.createdAt ? new Date(review.createdAt).toLocaleString() : "N/A"}
                      </td>
                      <td>
                        <span className="inline-block py-1 px-2 ">{review.comment}</span>
                      </td>
                      <td>
                        <a className="inline-block" href="#">
                          <Trash2 className="text-sm w-6 h-6 bg-red-100 p-1 rounded-full" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 items-center justify-between">
            <div className="w-full lg:w-1/3 px-4 flex items-center mb-4 lg:mb-0">
              <p className="text-xs text-gray-400">Show</p>
              <div className="mx-3 py-2 px-2 text-xs text-gray-500 bg-white border rounded">
                <select name="" id="">
                  <option value="1">15</option>
                  <option value="1">25</option>
                  <option value="1">50</option>
                  <option value="1">100</option>
                </select>
              </div>
              <p className="text-xs text-gray-400">of 1200</p>
            </div>
            <div className="w-full lg:w-auto px-4 flex items-center justify-center">
              <a
                className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                href="#"
              >
                <ChevronLeft className="w-5 h-5" />
              </a>
              <a
                className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                href="#"
              >
                1
              </a>

              <a
                className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-white bg-indigo-500 rounded"
                href="#"
              >
                12
              </a>
              <a
                className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                href="#"
              >
                13
              </a>
              <a
                className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                href="#"
              >
                14
              </a>

              <a
                className="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                href="#"
              >
                62
              </a>
              <a
                className="inline-flex items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded"
                href="#"
              >
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Reviews;
