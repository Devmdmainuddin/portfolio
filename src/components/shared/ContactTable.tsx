"use client";
import React from "react";
import {Trash2} from "lucide-react";
import Image from "next/image";
import {IContact} from "@/app/httpActions/types";

const ContactTable = ({contacts}: {contacts: IContact[]}) => {
  const handleDelete = async (contactId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact/${contactId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        window.location.reload();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact. Please try again.");
    }
  };

  return (
    <div className="p-4 mb-6 bg-white shadow rounded overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-xs text-gray-500 text-left">
            <th className="pl-6 pb-3 font-medium">Contact ID</th>
            <th className="pb-3 font-medium">User</th>
            <th className="pb-3 font-medium">Date</th>
            <th className="pb-3 font-medium">Message</th>
            <th className="pb-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id} className="text-xs bg-gray-100">
              <td className="py-5 px-6 font-medium">#{contact._id}</td>
              <td className="flex px-4 py-3">
                <Image
                  width={50}
                  height={50}
                  className="w-8 h-8 mr-4 object-cover rounded-sm"
                  src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
                <div>
                  <p className="font-medium">
                    {contact.firstName} {contact.lastName}
                  </p>
                  <p className="text-gray-500">
                    <a href="#">{contact.email}</a>
                  </p>
                </div>
              </td>
              <td className="font-medium">
                {contact.createdAt ? new Date(contact.createdAt).toLocaleString() : "N/A"}
              </td>
              <td>
                <span className="inline-block py-1 px-2">{contact.message}</span>
              </td>
              <td>
                <button onClick={() => handleDelete(contact._id)} className="inline-block">
                  <Trash2 className="text-sm w-6 h-6 bg-red-100 p-1 rounded-full" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
