import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/styles";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProjectInput from "./utils/ProjectInput";
import ProjectForm from "./containers/ProjectForm";
// import { GREEN } from "../misc/colors";

export default function LogIn() {
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");

  const SignUpLink = styled(Link)({
    textAlign: "center",
    color: "#000000",
  });

  const PageLayout = styled(Box)({
    display: "flex",
    flexDirection: "row",
    margin: "15%",
    justifyContent: "space-around",
  });
  const updateMail = (e) => {
    console.log(e.target.value);
    setMail(e.target.value);
  };
  const updatePassword = (e) => {
    // e.preventDefault();
    setPassword(e.target.value);
  };
  return (
    // replace those two with div
    <PageLayout>
      <ProjectForm>
        <ProjectInput
          name="mail"
          type="email"
          value={mail}
          required={true}
          handler={(e) => setMail(e.target.value)}
        />
        <ProjectInput
          name="password"
          type="password"
          value={password}
          required={true}
          handler={updatePassword}
        />
        <Button>login</Button>
        <SignUpLink to="/signup">or create an account ?</SignUpLink>
      </ProjectForm>
    </PageLayout>
  );
}
