import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  // DialogDescription,
  // DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Form from "./Form";

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
            <DialogTitle className="text-zinc-900 dark:text-white"> </DialogTitle>
          </DialogHeader>
          <Form />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactModal;
