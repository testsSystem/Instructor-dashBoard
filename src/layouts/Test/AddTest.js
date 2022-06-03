import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useState } from "react";
import Questions from "./componentsShared/Questions";
import TestData from "./componentsShared/TestData";

const AddTest = () => {
  const [testData, setTestData] = useState({
    title: "",
    start_at: "",
    end_at: "",
    description: "",
  });
  const [questions, setQuestions] = useState([]);
  return (
    <DashboardLayout>
      <TestData testData={testData} setTestData={setTestData} />
      <Questions questions={questions} setQuestions={setQuestions} />
    </DashboardLayout>
  );
};

export default AddTest;
