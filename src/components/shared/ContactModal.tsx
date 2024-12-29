import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./Forms";

interface ContactModalProps {
  title: string;
}

const ContactModal: React.FC<ContactModalProps> = ({title}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="btn capitalize">{title}</DialogTrigger>
        <DialogContent className="w-full max-w-md bg-white p-6 dark:bg-zinc-900">
          <DialogHeader>
            <DialogTitle className="text-zinc-900 dark:text-white">Have any Questions?</DialogTitle>
            <DialogDescription className="text-zinc-600 dark:text-zinc-400">
              Meet me
            </DialogDescription>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactModal;
