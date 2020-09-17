import React from "react";
import FormPage from "./containers/FormPage";
import { UndrawMindfulness } from "react-undraw-illustrations";
import Form from "./containers/Form";
import ProjectInput from "./utils/ProjectInput";
import { GREEN } from "../misc/colors";
import ImgContainer from "./containers/ImgContainer";
import { Button } from "@material-ui/core";

export default function LogIn() {
  return (
    <FormPage
      right={
        <ImgContainer
          undraw_img={<UndrawMindfulness primaryColor={GREEN} height="100%" />}
        />
      }
      left={
        <Form>
          <h1 color={GREEN}> Log In</h1>
          <ProjectInput name="login" />
          <ProjectInput name="password" type="password" />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px" }}
          >
            log in
          </Button>
        </Form>
      }
    />
  );
}
