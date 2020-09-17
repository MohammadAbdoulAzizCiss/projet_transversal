import React from "react";
import FormPage from "./containers/FormPage";
import { UndrawMotherhood } from "react-undraw-illustrations";
import Form from "./containers/Form";
import ProjectInput from "./utils/ProjectInput";
import { GREEN } from "../misc/colors";
import ImgContainer from "./containers/ImgContainer";
import { Button } from "@material-ui/core";
export default function SignUp() {
  return (
    <FormPage
      left={
        <ImgContainer
          undraw_img={<UndrawMotherhood primaryColor={GREEN} height="100%" />}
        />
      }
      right={
        <Form>
          <h1 color={GREEN}> SIGN UP</h1>
          <ProjectInput name="prenom" />
          <ProjectInput name="nom" />
          <ProjectInput name="age" />
          <ProjectInput name="email" />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px" }}
          >
            sign up
          </Button>
        </Form>
      }
    />
  );
}
