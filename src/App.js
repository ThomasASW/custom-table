import React from "react";
import "react-tabulator/lib/styles.css"; // required styles
import "react-tabulator/lib/css/tabulator.min.css"; // theme
import { ReactTabulator } from "react-tabulator";

const App = () => {


  const columns = [
    { title: "District", field: "district", width: 250 },
    { title: "School", field: "school" , width: 200},
    { title: "Class-Teacher", field: "teacher" , width: 200},
    { title: "Student Name", field: "studentName", width: 200 },
    {
      //create column group
      title: "Scores ",
      columns: [
        {
          title: "Maths",
          field: "scores.Math",
          width: 150,
          formatter: "progress",
          formatterParams: {
            color: "rgba(0, 255, 0, 0.7)",
            min: 0,
            max: 100,
            legend: true,
          },
        },
        {
          title: "Science",
          field: "scores.Science",
          width: 150,
          formatter: "progress",
          formatterParams: {
            color: "rgba(0, 255, 0, 0.7)",
            min: 0,
            max: 100,
            legend: true,
          },
        },
        {
          title: "History",
          field: "scores.History",
          width: 150,
          formatter: "progress",
          formatterParams: {
            color: "rgba(0, 255, 0, 0.7)",
            min: 0,
            max: 100,
            legend: true,
          },
        },
      ],
    },
  ];

  var data = [
    {
      district: "Thrissur",
      school: "School1",
      teacher: "Teacher1",
      studentName: "Chris",
      scores: {
        Math: 90,
        Science: 75,
        History: 68,
      },
    },
    {
      district: "Ernakulam",
      school: "School6",
      teacher: "Teacher2",
      studentName: "Kennedy",
      scores: {
        Math: 70,
        Science: 95,
        History: 68,
      },
    },
    {
      district: "Kannur",
      school: "School2",
      teacher: "Teacher3",
      studentName: "Arathi",
      scores: {
        Math: 98,
        Science: 79,
        History: 88,
      },
    },
    {
      district: "Thrissur",
      school: "School3",
      teacher: "Teacher4",
      studentName: "Tom",
      scores: {
        Math: 93,
        Science: 84,
        History: 67,
      },
    },
    {
      district: "Ernakulam",
      school: "School5",
      teacher: "Teacher8",
      studentName: "Jees",
      scores: {
        Math: 60,
        Science: 98,
        History: 70,
      },
    },
    {
      district: "Idukki",
      school: "School4",
      teacher: "Teacher9",
      studentName: "Levin",
      scores: {
        Math: 80,
        Science: 93,
        History: 82,
      },
    },
    {
      district: "Kozhikode",
      school: "School8",
      teacher: "Teacher6",
      studentName: "Jo",
      scores: {
        Math: 98,
        Science: 87,
        History: 90,
      },
    },
    {
      district: "Kannur",
      school: "School7",
      teacher: "Teacher5",
      studentName: "Anu",
      scores: {
        Math: 86,
        Science: 92,
        History: 87,
      },
    },
  ];

  return (
    <div>
      <h1>D3 Table with Row and Column Grouping</h1>
      <ReactTabulator
        data={data}
        columns={columns}
        layout={"fitData"}
        options={{
          groupBy: ["district", "school"],
        }}
      />
      {/* <ReactTabulator data={data} columns={columns2} layout={"fitData"} /> */}
    </div>
  );
};

export default App;
