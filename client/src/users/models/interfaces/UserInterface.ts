import imageInterface from "./ImageInterface";
import AddressInterface from "./AddressInterface";
import NameInterface from "./NameInterface";

interface UserInterface {
  _id?: string;
  name: NameInterface;
  phone: string;
  email: string;
  password: string;
  image: imageInterface;
  address: AddressInterface;
  isBusiness: boolean;
}

export default UserInterface;
