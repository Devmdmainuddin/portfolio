import {IContact, IProject} from "../(public)/httpActions/projects/types";

export const fetchContacts = async (): Promise<IContact[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`);
    if (!response.ok) {
      throw new Error("Failed to fetch contacts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
};

export const fetchProjects = async (): Promise<IProject[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error("Failed to fetch Project data from server");
    }
    const data = await response.json();
    return data.Project;
  } catch (error) {
    console.error("Error fetching Project:", error);
    return [];
  }
};
