import React from "react";
import { styled } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";

function ListeMedecin({ list }) {
  const history = useHistory();
  const TableHeadVI = styled(TableHead)({
    backgroundColor: "#BFD0E0",
  });

  const renderer = (medecin, index) => {
    return (
      <TableRow>
        <TableCell>{medecin.nom}</TableCell>
        <TableCell>{medecin.prenom}</TableCell>
        <TableCell>{medecin.specialite}</TableCell>
      </TableRow>
    );
  };
  return (
    <>
      <Table>
        <TableHeadVI>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Prenom</TableCell>
            <TableCell>Specialité</TableCell>
          </TableRow>
        </TableHeadVI>
        <TableBody>{list.map(renderer)}</TableBody>
      </Table>
      ,
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        GO BACK
      </Button>
    </>
  );
}

export default ListeMedecin;
