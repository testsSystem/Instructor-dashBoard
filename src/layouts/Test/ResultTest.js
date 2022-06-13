import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import { requestApi } from "../../helpers";
import API_URLS from "../../api";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const columns = [
  {
    Header: "student_name",
    accessor: "student_name",
    width: "50%",
    align: "center",
  },
  //   { Header: "category", accessor: "category", align: "left" },
  //   { Header: "location", accessor: "location", align: "center" },
  {
    Header: "students_results",
    accessor: "students_results",
    width: "50%",
    align: "center",
  },
];
function ResultTest(props) {
  const [rows, setRows] = useState([]);
  const [test, setTest] = useState([]);

  const { id } = useParams();
  console.log(id, "idididiiddi");

  const fetchResult = async () => {
    const token = window.localStorage.getItem("token") || null;

    const data = await axios({
      url: `http://localhost:3000/api/v1/tests/results/${id}`,
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
    fetchResult();
  }, []);
  useEffect(() => {
    setRows(
      test?.data?.result
        ? test?.data?.result?.map((st, i) => {
            console.log(st.result);
            return {
              student_name: (
                <div key={i}>
                  {st?.User?.first_name}
                  {st?.User?.last_name}
                </div>
              ),
              students_results: <div>{st?.result}</div>,
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
export default ResultTest;
