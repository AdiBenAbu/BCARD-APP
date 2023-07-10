import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import {
  changeBusinessStatus,
  deleteUser,
  editUserDetails,
  getUserData,
  getUsersData,
  login,
  signup,
} from "../service/userApi";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../service/localStorage";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "./../../routes/routesModel";
import {
  EditSignupForm,
  Login,
  RegistrationForm,
  TokenType,
} from "../models/types/userType";
import normalizeUser from "../helpers/normalization/normalizeUser";
import normalizeEditUser from "../helpers/normalization/normalizeEditUser";
import { useSnack } from "../../providers/SnackbarProvider";
import UserInterface from "../models/interfaces/UserInterface";

const useHandleUsers = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setLoading] = useState(false);
  const [userData, setUserData] = useState<null | UserInterface>(null);
  const [usersData, setUsersData] = useState<null | UserInterface[]>(null);
  const snack = useSnack();

  useAxios();
  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  const requestStatus = useCallback(
    (
      loading: boolean,
      errorMessage: string | null,
      user: null | TokenType,
      userData: null | UserInterface,
      usersData: null | UserInterface[]
    ) => {
      setLoading(loading);
      setError(errorMessage);
      setUser(user);
      setUserData(userData);
      setUsersData(usersData);
    },
    [setUser]
  );

  const handleGetUsers = useCallback(async () => {
    try {
      setLoading(true);
      const users = await getUsersData();
      requestStatus(false, null, null, null, users);
    } catch (error) {
      if (typeof error === "string")
        requestStatus(false, error, null, null, null);
    }
  }, []);

  const handleChangeStatus = useCallback(async (userId: string) => {
    try {
      const userFromClient = await changeBusinessStatus(userId);
      return userFromClient;
    } catch (error) {
      if (typeof error === "string")
        return requestStatus(false, error, null, null, null);
    }
  }, []);

  const handlGetUser = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      const userFromClient = await getUserData(userId);

      requestStatus(false, null, null, userFromClient, null);
      return userFromClient;
    } catch (error) {
      if (typeof error === "string")
        return requestStatus(false, error, null, null, null);
    }
  }, []);

  const handleLogin = useCallback(
    async (user: Login) => {
      try {
        setLoading(true);
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        requestStatus(false, null, userFromLocalStorage, null, null);
        navigate(ROUTES.CARDS);
      } catch (error) {
        if (typeof error === "string")
          requestStatus(false, error, null, null, null);
      }
    },
    [navigate, requestStatus, setToken]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
    navigate(ROUTES.ROOT);
  }, [setUser]);

  const handleSignup = useCallback(
    async (user: RegistrationForm) => {
      try {
        setLoading(true);
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await handleLogin({
          email: user.email,
          password: user.password,
        });
      } catch (error) {
        if (typeof error === "string")
          requestStatus(false, error, null, null, null);
      }
    },
    [handleLogin, requestStatus]
  );

  const handleEditUser = useCallback(async (userFromClient: EditSignupForm) => {
    try {
      setLoading(true);
      const normalizedEditUser = normalizeEditUser(userFromClient);
      const userFromServer = await editUserDetails(normalizedEditUser);
      requestStatus(false, null, null, userFromServer!, null);
      snack("success", "The user details has been successfully updated");
      navigate(ROUTES.ROOT);
    } catch (error) {
      if (typeof error === "string")
        return requestStatus(false, error, null, null, null);
    }
  }, []);

  const handleDeleteUser = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      await deleteUser(userId);
      const users = await getUsersData();
      requestStatus(false, null, null, null, users);
      snack("success", "The user has been successfully deleted");
    } catch (error) {
      if (typeof error === "string")
        return requestStatus(false, error, null, null, null);
    }
  }, []);

  const value = useMemo(() => {
    return { isLoading, error, user, userData, usersData };
  }, [isLoading, error, user, userData, usersData]);

  return {
    value,
    handleGetUsers,
    handlGetUser,
    handleDeleteUser,
    handleLogin,
    handleLogout,
    handleSignup,
    handleEditUser,
    handleChangeStatus,
  };
};

export default useHandleUsers;
