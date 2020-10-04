import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/styles";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProjectInput from "../../components/ProjectInput";
import ProjectForm from "../../components/ProjectForm";
// import { GREEN } from "../misc/colors";

export default function SignUp() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const LogInLink = styled(Link)({
    textAlign: "center",
    color: "#000000",
  });

  const PageLayout = styled(Box)({
    display: "flex",
    flexDirection: "row",
    margin: "15%",
    justifyContent: "space-around",
  });

  const updateUser = (e) => {
    let { name, value } = e.target;
    let newUser = { ...user };
    newUser[name] = value;
    setUser(newUser);
  };
  return (
    <PageLayout>
      <ProjectForm>
        <ProjectInput
          name="name"
          handler={updateUser}
          required={true}
          value={user.name}
        />
        <ProjectInput
          name="email"
          value={user.email}
          required={true}
          handler={updateUser}
        />
        <ProjectInput
          name="password"
          type="password"
          value={user.password}
          required={true}
          handler={updateUser}
        />
        <Button> Sign Up</Button>
        <LogInLink to="/login">already have an account ?</LogInLink>
      </ProjectForm>
    </PageLayout>
  );
}
