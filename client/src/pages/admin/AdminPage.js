import React, { Component } from "react";
import Axios from "axios";

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

export default class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donees: []
    };
  }

  componentDidMount() {
    Axios.get("/donee").then(res => {
      this.setState({ donees: res.data });
    });
  }

  // TODO: Remove the console.logs
  handleRemove = () => {
    if (window.confirm("Are you sure you want to remove row(s)?")) {
      // Remove selected rows
      console.log("You deleted some donees!");
    } else {
      console.log("You cancelled!");
    }
  };

  handleAdd = () => {
    console.log("Added donee!");
  };

  render() {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.content}>
          <h1>Donees</h1>
          <Button onClick={this.handleAdd}>Add</Button>
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
                {this.state.donees.map(donee => (
                  <TableRow key={donee._id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{donee.name}</TableCell>
                    <TableCell>${donee.funded}</TableCell>
                    <TableCell>{donee.monthlyRenewalDate}</TableCell>
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
