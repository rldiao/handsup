import React, { Component, Fragment } from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";

import styles from "./donee.module.css";

export class FormPersonalDetails extends Component {
  render() {
    const { values, handleChange, genders } = this.props;

    return (
      <Fragment>
        <h2>User Details</h2>
        <TextField
          label="Full Name"
          value={values.name}
          onChange={handleChange("name")}
        />
        <div className={styles.gridItemSplit}>
          <TextField
            label="Gender"
            value={values.gender}
            onChange={handleChange("gender")}
            select
          >
            {genders.map(gender => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Date of Birth"
            value={values.dob}
            onChange={handleChange("dob")}
            helperText="dd/mm/yyyy"
          />
        </div>
        <TextField
          label="Location"
          value={values.location}
          onChange={handleChange("location")}
        />
        <TextField
          label="Phone Number"
          value={values.phone}
          onChange={handleChange("phone")}
        />
        <TextField
          label="Bio"
          variant="filled"
          multiline
          rows="10"
          value={values.bio}
          onChange={handleChange("bio")}
        />
        <div className={styles.gridItemSplit}>
          <Button onClick={this.props.back}>Back</Button>
          <Button variant="contained" color="primary" onClick={this.props.next}>
            Next
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default FormPersonalDetails;
