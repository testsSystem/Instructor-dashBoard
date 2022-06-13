// import Moment from "moment";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";
import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import moment from "moment";
import API_URLS from "../../api";
import { requestApi } from "../../helpers";
import { useQuery } from "react-query";
import axios from "axios";
import { useQueries } from "react-query";

const Expirement = () => {
  // const fetchCorrectAnswer = async () => {
  //   const id = 3;
  //   const data = await axios({
  //     url: `http://localhost:3000/api/v1/tests/correctAnswers/${id}`,
  //   });

  //   return data;
  // };

  // const fetchSelectedAnswer = async () => {
  //   const id = 3;
  //   const data = await axios({
  //     url: `http://localhost:3000/api/v1/tests/ckeckCorrect`,
  //   });

  //   return data;
  // };

  // const { status, isStale, isFetching, loading, error, data } = useQueries(
  //   "options",
  //   fetchSelectedAnswer,
  //   fetchCorrectAnswer,
  //   {
  //     refetchOnWindowFocus: false,
  //     refetchOnReconnect: false,
  //     retry: 1,
  //     retryDelay: 3000,
  //   }
  // );
  const id = 3;

  const results = useQueries([
    {
      queryKey: ["post1", 1],
      queryFn: () =>
        axios({
          url: `http://localhost:3000/api/v1/tests/ckeckCorrect`,
        }),
    },
    {
      queryKey: ["post2", 2],
      queryFn: () =>
        axios({
          url: `http://localhost:3000/api/v1/tests/correctAnswers/${id}`,
        }),
    },
  ]);

  console.log(results);

  // console.log({ status, isStale, isFetching, error, data });

  // if (!loading && data && isStale) {
  //   console.log(data);
  //   // const mapping = data.data.result.Questions.map((option, index) => {
  //   //   console.log(option, index, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
  //   //   return <></>;
  //   // });
  // }

  // if (data) {
  //   console.log(data.data);
  // }
  // const [loading, setLoading] = useState(true);
  // const [answerSelected, setAnswerSelected] = useState();
  // const [correctAnswer, setCorrectAnswer] = useState([]);
  // const [mapValue, setMapValue] = useState([]);

  // const fetchStudntTest = async () => {
  //   let data = {
  //     url: API_URLS().EXPIREMENT.CHECKING_ANSWERS,
  //   };
  //   await requestApi(data).then((res) => {
  //     setAnswerSelected(res.data.result);

  //   });
  // };

  // const fetchCorrectAnswer = async () => {
  //   let data = {
  //     url: API_URLS(3).EXPIREMENT.CORRECT_ANSWRE,
  //   };
  //   await requestApi(data).then((res) => {
  //     setCorrectAnswer(res.data.result);
  //   });
  // };

  // const { data, status } = useQuery("options", fetchCorrectAnswer);

  // useEffect(() => {
  //   // fetchStudntTest();
  //   fetchCorrectAnswer();
  // }, []);
  // useEffect(() => {
  //   const allCorrectAnswers = correctAnswer.result.map((answer, index) => {
  //     return (
  //       <div key={index}>
  //         <h3>{answer.questoin}</h3>
  //         <h3>{answer.id}</h3>
  //       </div>
  //     );
  //   });
  //   setMapValue(allCorrectAnswers);
  // }, [correctAnswer]);
  // useEffect(() => {
  //   const allCorrectAnswers = correctAnswer.result.map((answer, index) => {
  //     return (
  //       <div key={index}>
  //         <h3>{answer.questoin}</h3>
  //         <h3>{answer.id}</h3>
  //       </div>
  //     );
  //   });
  //   setMapValue(allCorrectAnswers);
  // }, [correctAnswer]);
  // console.log(correctAnswer, "jjjjjjjjjjjjjjjjjjjjjjj");

  return <> </>;
};

export default Expirement;
