"use server";
import React from "react";
import Container from "@/components/shared/Container";
import {fetchContacts} from "@/app/actions/actions";

// export async function getServerSideProps() {
//   const contacts = await fetchContacts();
//   return {
//     props: { contacts },
//   };
// }


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
           
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ContactPage;
