import {IContact, IProject, Ireview, IService} from "../httpActions/types";

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
export const fetchProjectById = async (id: string): Promise<IProject | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch project data");
    }
    const data = await response.json();
    return data.project || null;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};

export const addProject = async (newProjectData: Partial<IProject>): Promise<IProject | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProjectData),
    });

    if (!response.ok) {
      throw new Error("Failed to add the new project");
    }

    const addedProject = await response.json();
    return addedProject;
  } catch (error) {
    console.error("Error adding project:", error);
    return null;
  }
};

// export const editProject = async (projectId: string, updatedData: Partial<IProject>): Promise<IProject | null> => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects/${projectId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedData),
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to update project with ID: ${projectId}`);
//     }

//     const updatedProject = await response.json();
//     return updatedProject;
//   } catch (error) {
//     console.error("Error editing project:", error);
//     return null;
//   }
// };
export const deleteProject = async (projectId: string): Promise<boolean> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects/${projectId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete project with ID: ${projectId}`);
    }

    return true;
  } catch (error) {
    console.error("Error deleting project:", error);
    return false;
  }
};

export const fetchReviews = async (): Promise<Ireview[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/review`);
    if (!response.ok) {
      throw new Error("Failed to fetch Reviews data from server");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Reviews:", error);
    return [];
  }
};

export const fetchServices = async (): Promise<IService[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/service`);
    if (!response.ok) {
      throw new Error("Failed to fetch service data from server");
    }
    const data = await response.json();
    return data.services;
  } catch (error) {
    console.error("Error fetching service:", error);
    return [];
  }
};
