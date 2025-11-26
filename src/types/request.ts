export interface IRequest {
  _id: string;

  artistName: string;
  artistId: string;
  artistAuthId: string;
  email: string;
  phone: string;
  image: string;
  status: string;
  stringLocation: string;
  type: string;

  createdAt: Date;
}
