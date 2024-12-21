import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

interface ContactModalProps {
  title: string; // Ensures the title prop is a string
}

const ContactModal: React.FC<ContactModalProps> = ({ title }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger  className="inline-block text-xl font-medium py-3 px-3 border bg-green-600 text-white transition-all border-green-600 hover:bg-white hover:text-green-600 rounded-md">
          {title}
        </DialogTrigger>
        <DialogContent className="w-full max-w-md bg-white p-6 dark:bg-zinc-900">
          <DialogHeader>
            <DialogTitle className="text-zinc-900 dark:text-white">
              Have any Questions?
            </DialogTitle>
            <DialogDescription className="text-zinc-600 dark:text-zinc-400">
              meet me
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex flex-col space-y-4">
            <label htmlFor="name" className="sr-only">
              name
            </label>
            <input
              id="name"
              type="text"
              className="h-9 w-full rounded-sm border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
              placeholder="Enter your fullname"
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="h-9 w-full rounded-sm border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-sm"
              placeholder="Enter your email"
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your Message"
              className="h-32 w-full py-3 resize-none rounded-sm border border-zinc-200 bg-white px-3 text-base text-zinc-900 outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white "
            />

            <DialogClose asChild>
              <Button type="button" variant="secondary">
                submit now
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactModal;
