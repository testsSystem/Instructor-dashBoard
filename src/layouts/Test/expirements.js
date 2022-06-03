// import Moment from "moment";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";
import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import moment from "moment";

function Expirement() {
  //   const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));

  // handles when user changes input in date inputfield
  const handleChangeDate = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <DashboardLayout>
        <MDBox>
          <TextField
            name="date"
            id="date"
            label="Date"
            type="datetime-local"
            InputLabelProps={{ shrink: true }}
            // value={date}
            onChange={handleChangeDate}
            fullWidth
            required
          />
        </MDBox>
      </DashboardLayout>
    </>
  );
}

export default Expirement;
