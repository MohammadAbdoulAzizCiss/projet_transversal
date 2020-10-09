import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import Page from "../../components/Page";
import ListeMedecins from "../../components/listeMedecin";
import Empty from "../../components/Empty";

export default function Home() {
  const medecins = [
    { nom: "kande", prenom: "Moustapha", specialite: "pediatre" },
    { nom: "Ciss", prenom: "Djibril", specialite: "chirurgien" },
    { nom: "Diop", prenom: "Khadim", specialite: "pediatre" },
    { nom: "Ciss", prenom: "Djibril", specialite: "chirurgien" },
    { nom: "kande", prenom: "Mansour", specialite: "pediatre" },
    { nom: "Diakhate", prenom: "Djibril", specialite: "chirurgien" },
    { nom: "Diallo", prenom: "Moustapha", specialite: "pediatre" },
    { nom: "Tall", prenom: "Ibrahima", specialite: "chirurgien" },
  ];
  const maincomponents = [
    <Empty message="pas de traitements en cours" />,
    <Empty message="aucun rv prevus" />,
    <ListeMedecins list={medecins} />,
  ];
  let [active, setActive] = useState(0);
  let TabButton = styled(Button)({
    margin: "2px",
    width: "80%",
    height: "50%",
    alignItems: "left",
  });
  let LeftNavBar = styled(Box)({
    flex: "2",
    height: "100%",
  });
  let style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
  };
  let TopBox = styled(Box)({
    flex: "1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#90D7FF",
  });
  let BottomBox = styled(Box)({
    flex: "10",
    height: "80%",
    display: "flex",
    flexDirection: "row",
  });
  let RightComponent = styled(Box)({
    flex: "5",
    height: "80%",
    padding: "9px",
  });
  let buttonList = ["traitements", "prendre un rv", "afficher liste medecins"];
  return (
    <Page direction="column">
      <TopBox>
        <Button>Log out</Button>
      </TopBox>
      <BottomBox>
        <LeftNavBar>
          <div style={style}>
            {buttonList.map((item, i) =>
              active === i ? (
                <TabButton key={i} color="primary" onClick={() => setActive(i)}>
                  <span> {item}</span>
                </TabButton>
              ) : (
                <TabButton key={i} onClick={() => setActive(i)}>
                  <span>{item}</span>
                </TabButton>
              )
            )}
          </div>
        </LeftNavBar>
        <RightComponent>{maincomponents[active]}</RightComponent>
      </BottomBox>
    </Page>
  );
}
