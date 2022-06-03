import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useState } from "react";
import TextField from "@mui/material/TextField";

function TestData(props) {
  const handleInput = (newValue) => {
    props.setTestData({
      ...props.testData,
      ...newValue,
    });
  };
  return (
    <MDBox pt={6} pb={3}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={1}
          textAlign="center"
        >
          <MDTypography variant="h5" fontWeight="medium" color="white">
            Test Data
          </MDTypography>
        </MDBox>
        <MDBox p={2} mt={0}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                // name="title"
                onChange={(e) => {
                  handleInput({ title: e.target.value });
                }}
                InputLabelProps={{ shrink: true }}
                value={props.testData.title}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Start Date"
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
                onChange={(e) => {
                  handleInput({ start_at: e.target.value });
                }}
                value={props.testData.start_at}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                type="datetime-local"
                label="End Date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
                value={props.testData.end_at}
                onChange={(e) => {
                  handleInput({ end_at: e.target.value });
                }}
                name="end_at"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                multiline
                rows={5}
                fullWidth
                name="description"
                onChange={(e) => {
                  handleInput({ description: e.target.value });
                }}
                value={props.testData.description}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default TestData;
