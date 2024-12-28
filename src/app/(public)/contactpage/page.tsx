"use server";
import React from "react";
import Container from "@/components/shared/Container";
import {fetchContacts} from "@/app/actions/actions";

const ContactPage = async () => {
  const contacts = await fetchContacts();
  return (
    <div>
      <Container>
        <h1>Contact List</h1>
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>
              {contact.firstName} {contact.lastName} - {contact.email}
              <p>{contact.message}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default ContactPage;
