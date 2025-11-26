export interface IRequest {
  _id: string;

  fullName: string;
  email: string;
  phone: string;
  image: string;
  status: string;
  stringLocation: string;
  type: string;

  createdAt: Date;
}
