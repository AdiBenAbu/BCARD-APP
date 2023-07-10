import { EditSignupForm } from "../../models/types/userType";

const normalizeEditUser = (user: EditSignupForm) => {
  return {
    _id: user._id,
    name: {
      first: user.first,
      middle: user.middle,
      last: user.last,
    },
    phone: user.phone,
    email: user.email,
    password: user.password,
    image: {
      url: user.url,
      alt: user.alt,
    },
    address: {
      state: user.state,
      country: user.country,
      city: user.city,
      street: user.street,
      zip: String(+user.zip),
      houseNumber: String(+user.houseNumber),
    },
    isBusiness: user.isBusiness,
  };
};

export default normalizeEditUser;
