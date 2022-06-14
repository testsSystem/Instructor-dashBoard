import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import axios from "axios";
import { requestApi } from "../../helpers";
import API_URLS from "../../api";

const columns = [
  { Header: "Name", accessor: "Name", width: "50%", align: "center" },
  //   { Header: "category", accessor: "category", align: "left" },
  //   { Header: "location", accessor: "location", align: "center" },
  { Header: "Add", accessor: "Add", width: "50%", align: "center" },
];
function AddStudents(props) {
  const ctx = useContext(AuthContext);
  const [rows, setRows] = useState([]);
  const [students, setStudents] = useState([]);
  const [session, setSession] = useState([]);
  console.log(props.user_id, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");

  const fetchUsers = async () => {
    let data = {
      url: API_URLS().INSTRUCTORS.GET_STUDENTS,
    };
    let res = await requestApi(data);
    setStudents(res.data.result);
  };

  ////////////////////
  // let sessionInfo = {
  //   url: API_URLS().SESSIONS.CREATE_SESSION,
  //   body: {
  //     user_id,
  //     test_id,
  //   },
  //   method: "POST",
  // };
  // await requestApi(sessionInfo);
  // .then((res) => {
  //   // initialize variable test id from response
  //   let testId = res.data.result.id;

  /////////////////////

  const createSession = async (testData) => {
    let { user_id, test_id } = testData;
    let data = {
      url: API_URLS().SESSIONS.CREATE_SESSION,
      method: "POST",
      body: {
        user_id: user_id,
        test_id: test_id,
      },
    };

    let res = await requestApi(data);
    setSession(res.data.result);
    console.log(session, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
  };

  useEffect(() => {
    console.log("first");
    fetchUsers();
    createSession();
  }, []);

  useEffect(() => {
    console.log("sec");
    const allStudents = students?.map((user, i) => {
      return {
        Name: (
          <>
            {user.first_name}
            {user.last_name}
          </>
        ),

        Add: (
          <>
            <MDButton variant="text" color="info" onClick={() => {}}>
              <Icon>add</Icon>&nbsp;Add to Test
            </MDButton>
          </>
        ),
      };
    });

    setRows(allStudents);
  }, [students]);

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
export default AddStudents;
