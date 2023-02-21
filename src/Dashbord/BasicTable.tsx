import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Avatar from "@material-ui/core/Avatar";
import { AnyNsRecord } from "dns";
import profileimg from "../assets/profileimg.jpg";
 

function createData(
  image: any,
  name: string,
  refID: string,
  time: string,
  amount: number,
  status: string
) {
  return {image, name, refID, time, amount, status };
}

const rows = [
  createData(<img src={profileimg} alt="img" />  ,"Olive Yew", "OD9763801", "2:30PM", 24, "Done"),
  createData(<img src={profileimg} alt="img" /> ,"Aida Bugg", "OD9763801", "2:30PM", 37, "Pending"),
  createData(<img src={profileimg} alt="img" /> ,"Maureen Biologist", "OD9763801", "2:30PM", 24, "Done"),
  createData(<img src={profileimg} alt="img" /> ,"Teri Dactyl", "OD9763801", "2:30PM", 67, "Pending"),
  createData(<img src={profileimg} alt="img" /> ,"Peg Legge", "OD9763801", "2:30PM", 49, "Done"),
];

export default function BasicTable() {
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <Grid item md={9.3} sm={6} xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    color: "rgba(96, 96, 96)",
                    backgroundColor: "#f5f3f0",
                  },
                }}
              >
                <TableCell>Customer Name</TableCell>
                <TableCell align="right"> Refer Id </TableCell>
                <TableCell align="right">Time</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                   <Avatar src={row.image}/>,{row.name}
                  </TableCell>
                  <TableCell align="right">{row.refID}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
