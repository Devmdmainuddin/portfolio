"use client";
import {IProject} from "@/app/httpActions/types";
import {deleteProject} from "@/app/actions/actions";
import {Eye, FilePenLine, Trash2} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectTable = ({item}: {item: IProject}) => {
  const handleDelete = async (projectId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    const success = await deleteProject(projectId);

    if (success) {
      alert("Project deleted successfully!");
      // Optional: Update UI to reflect deleted project without page reload
      window.location.reload();
    } else {
      alert("Failed to delete the project.");
    }
  };
  return (
    <tr className="text-xs bg-gray-100 border-b border-gray-300 ">
      <td className="py-5 px-6 font-medium">#{item._id}</td>
      <td className="inline-block w-[120px] h-[120px]">
        <Image
          width={120}
          height={120}
          className="w-full h-full  object-cover rounded-sm"
          src={item.image}
          alt=""
        />
      </td>
      <td className="font-medium">{item.title}</td>

      <td>
        <span className="inline-block py-1 px-2 ">
          {item.createdAt ? new Date(item.createdAt).toLocaleString() : "N/A"}
        </span>
      </td>
      <td>
        <div className="flex gap-1 items-center ">
          <Link className="inline-block" href="#">
            <Eye className="text-sm w-6 h-6 bg-red-100 p-1 rounded-sm" />
          </Link>
          <Link className="inline-block" href={`/admin/project/${item._id}`}>
            <FilePenLine className="text-sm w-6 h-6 bg-red-100 p-1 rounded-sm" />
          </Link>

          <button className="inline-block" onClick={() => handleDelete(item._id)}>
            <Trash2 className="text-sm w-6 h-6 bg-red-100 p-1 rounded-sm" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProjectTable;
