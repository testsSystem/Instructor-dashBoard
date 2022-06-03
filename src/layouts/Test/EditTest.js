import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useEffect, useState } from "react";
import Questions from "./componentsShared/Questions";
import TestData from "./componentsShared/TestData";

const EditTest = () => {
  const [testData, setTestData] = useState({
    title: "",
    start_at: "",
    end_at: "",
    description: "",
  });

  const [questions, setQuestions] = useState([]);

  useEffect(() => {}, []);
  return (
    <DashboardLayout>
      <TestData testData={testData} setTestData={setTestData} />
      <Questions questions={questions} setQuestions={setQuestions} />
    </DashboardLayout>
  );
};

export default EditTest;
