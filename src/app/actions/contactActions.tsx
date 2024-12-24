"use server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function handleContactForm(
  data: FormData,
): Promise<{success: boolean; message: string}> {
  const formData: ContactFormData = {
    name: data.get("name") as string,
    email: data.get("email") as string,
    message: data.get("message") as string,
  };

  if (!formData.name || !formData.email || !formData.message) {
    throw new Error("All fields are required.");
  }

  console.log(formData);

  return {success: true, message: "Form submitted successfully!"};
}
