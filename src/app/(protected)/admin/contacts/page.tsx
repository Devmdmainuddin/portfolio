"use server";
import React from "react";
import Container from "@/components/shared/Container";
import {fetchContacts} from "@/app/actions/actions";
import {ChevronLeft, ChevronRight} from "lucide-react";

import ContactTable from "@/components/shared/ContactTable";

const ContactPage = async () => {
  const contacts = await fetchContacts();
  return (
    <div className="bg-[#D0EBEB] dark:bg-[#738188] capitalize">
      <Container>
        <section className="py-8">
          <div className="container px-4 mx-auto">
            <div className="p-4 mb-6 bg-white shadow rounded overflow-x-auto">
              <ContactTable contacts={contacts} />
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
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ContactPage;
