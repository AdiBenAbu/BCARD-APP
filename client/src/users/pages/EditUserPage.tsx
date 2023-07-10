import React from "react";
import { useEffect } from "react";
import { useUser } from "../providers/UserProvider";
import useHandleUsers from "../hooks/useHandleUsers";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import Container from "@mui/material/Container";
import EditUserForm from "../components/EditUserForm";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import MapEditSignup from "../helpers/normalization/MapEditSignup";
import editUserSchema from "../models/Joi/editUserSchema";

const EditUserPage = () => {
  const { user } = useUser();
  const { userId } = useParams();
  const { handleEditUser, handlGetUser } = useHandleUsers();
  const navigate = useNavigate();
  const { value, ...rest } = useForm(
    initialSignupForm,
    editUserSchema,
    handleEditUser
  );

  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, setData, validateForm } =
    rest;

  useEffect(() => {
    if (userId)
      handlGetUser(userId).then((userFromServer) => {
        if (user?._id !== userFromServer!._id) return navigate(ROUTES.ROOT);
        const modeledUser = MapEditSignup(userFromServer!);
        setData(modeledUser);
      });
  }, []);

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EditUserForm
        title="edit your user details"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        data={data}
        setData={setData}
      />
    </Container>
  );
};

export default EditUserPage;
