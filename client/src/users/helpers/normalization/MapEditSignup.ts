import UserInterface from "../../models/interfaces/UserInterface";
import { EditSignupForm } from "../../models/types/userType";

const MapEditSignup = (user: UserInterface): EditSignupForm => {
  return {
    _id: user._id!,
    first: user.name.first,
    middle: user.name.middle!,
    last: user.name.last,
    phone: user.phone,
    email: user.email,
    password: user.password,
    url: user.image.url!,
    alt: user.image.alt!,
    state: user.address.state!,
    country: user.address.country,
    city: user.address.city,
    street: user.address.street,
    zip: String(user.address.zip),
    houseNumber: String(user.address.houseNumber),
    isBusiness: user.isBusiness,
  };
};

export default MapEditSignup;
