import React, { Component } from "react";

import styles from "./adminPage.module.css";
import {
  Button,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Checkbox,
  Paper
} from "@material-ui/core";

const donees = [
  { _id: "1", name: "Steven Roger", payment: "140", nextPayment: "2/1/12" },
  { _id: "2", name: "Tony Stark", payment: "120", nextPayment: "3/2/14" },
  { _id: "3", name: "Thor", payment: "130", nextPayment: "2/4/13" }
];

export default class AdminPage extends Component {
  handleRemove = () => {
    if (window.confirm("Are you sure you want to remove row(s)?")) {
      // Remove selected rows
    }
  };

  render() {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.content}>
          <h1>Donees</h1>
          <Button>Add</Button>
          <Button onClick={this.handleRemove}>Remove</Button>
          <Paper style={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Payment</TableCell>
                  <TableCell>Next Payment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {donees.map(donee => (
                  <TableRow key={donee._id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{donee.name}</TableCell>
                    <TableCell>${donee.payment}</TableCell>
                    <TableCell>{donee.nextPayment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}
