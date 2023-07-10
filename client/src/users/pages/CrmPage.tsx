import { useEffect } from "react";
import useHandleUsers from "../hooks/useHandleUsers";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import UserFeedback from "../components/UserFeedback";

const CrmPage = () => {
  const { handleGetUsers, handleDeleteUser, handleChangeStatus, value } =
    useHandleUsers();
  const { error, isLoading, usersData } = value;

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);

  const handleBusiness = async (userId: string) => {
    await handleChangeStatus(userId);
  };

  const handleDelete = async (userId: string) => {
    await handleDeleteUser(userId);
  };

  return (
    <Container>
      <PageHeader
        title="CRM Page"
        subtitle="On this page you can manage all users accounts"
      />
      <UserFeedback
        isLoading={isLoading}
        error={error}
        users={usersData}
        onDelete={handleDelete}
        handleBizStatusChange={handleBusiness}
      />
    </Container>
  );
};

export default CrmPage;
