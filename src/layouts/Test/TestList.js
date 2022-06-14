import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import MDButton from "components/MDButton";
import axios from "axios";
import { Link } from "react-router-dom";

const columns = [
  { Header: "testName", accessor: "testName", width: "50%", align: "center" },
  //   { Header: "category", accessor: "category", align: "left" },
  //   { Header: "location", accessor: "location", align: "center" },
  {
    Header: "students_results",
    accessor: "students_results",
    width: "50%",
    align: "center",
  },
];
function TestList(props) {
  const [rows, setRows] = useState([]);
  const [test, setTest] = useState([]);

  const fetchTests = async () => {
    const token = window.localStorage.getItem("token") || null;

    const data = await axios({
      url: `http://localhost:3000/api/v1/instructors/getTests`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      method: "GET",
    });
    setTest(data);
    console.log(test, "tesstttttt");

    return data;
  };

  useEffect(() => {
    fetchTests();
  }, []);
  useEffect(() => {
    setRows(
      test?.data?.result
        ? test?.data?.result?.map((st, i) => {
            return {
              testName: <div key={i}>{st?.title}</div>,
              students_results: (
                <Link to={`/tests/show/result/${st.id}`}>
                  <MDButton variant="contained" color="success">
                    GET
                  </MDButton>
                </Link>
              ),
            };
          })
        : []
    );
  }, [test]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <MDTypography
                    variant="h6"
                    color="white"
                    justifyContent="center"
                  >
                    Session Info
                  </MDTypography>
                </Grid>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
export default TestList;
