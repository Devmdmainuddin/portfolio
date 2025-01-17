export interface IProject extends Document {
  _id: string;
  title: string;
  image: string;
  description: string;
  liveLink: string;
  clientLink: string;
  serverLink?: string;
  tags: string[];
  category: string;
  createdAt: Date;
  updatedAt:Date;
}

export interface IContact extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: number;
  message?: string;
  createdAt?: Date;
}
export interface Ireview extends Document {
  _id: string;
  name: string;
  professionName: string;
  profession: string;
  email: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface IService extends Document {
  _id: string;
  icon: string;
  title: string;
  description: string;
  createdAt: Date;
}
