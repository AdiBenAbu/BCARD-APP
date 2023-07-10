import axios from "axios";
import UserType, {
  Login,
  NormalizedEditUserForm,
  UserRegistered,
} from "../models/types/userType";
import UserInterface from "../models/interfaces/UserInterface";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user: Login) => {
  try {
    const { data } = await axios.post<string>(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const signup = async (normalizedUser: UserType) => {
  try {
    const { data } = await axios.post<UserRegistered>(
      `${apiUrl}/users`,
      normalizedUser
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const editUserDetails = async (
  normalizeEditUser: NormalizedEditUserForm
) => {
  try {
    const userToServer = { ...normalizeEditUser };
    delete userToServer._id;
    const { data } = await axios.put<UserInterface>(
      `${apiUrl}/users/${normalizeEditUser._id}`,
      userToServer
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getUserData = async (userId: string) => {
  try {
    const { data } = await axios.get<UserInterface>(
      `${apiUrl}/users/${userId}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getUsersData = async () => {
  try {
    const { data } = await axios.get<UserInterface[]>(`${apiUrl}/users`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const { data } = await axios.delete<UserInterface>(
      `${apiUrl}/users/${userId}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const changeBusinessStatus = async (userId: string) => {
  try {
    const { data } = await axios.patch<UserInterface>(
      `${apiUrl}/users/${userId}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
