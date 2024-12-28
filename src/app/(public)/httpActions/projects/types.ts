export interface IProject extends Document {
  _id: string;
  title: string;
  image: string;
  description: string;
  liveLink: string;
  clientLink: string;
  serverLink?: string;
  tags: string[];
  createdAt: Date;
}

export interface IContact extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: number;
  message?: string;
}
