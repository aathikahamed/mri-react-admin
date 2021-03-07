import { Button, makeStyles } from "@material-ui/core";
import Table from "../../Table/Table";
import AddCircle from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const students = [
  {
    name: "Aathik",
    year: 12,
    age: 16,
    gender: "Male",
  },
  {
    name: "Aamir",
    year: 4,
    age: 10,
    gender: "Male",
  },
  {
    name: "Aamina",
    year: 9,
    age: 12,
    gender: "Female",
  },
  {
    name: "Aashik",
    year: 12,
    age: 17,
    gender: "Male",
  },
];

const years = {
  1: "Year 1",
  2: "Year 2",
  3: "Year 3",
  4: "Year 4",
  5: "Year 5",
  6: "Year 6",
  7: "Year 7",
  8: "Year 8",
  9: "Year 9",
  10: "Year 10",
  11: "Year 11",
  12: "Year 12",
};

const columns = [
  { title: "Name", field: "name" },
  { title: "Year", field: "year", lookup: years },
  {
    title: "Gender",
    field: "gender",
    lookup: { Male: "Male", Female: "Female" },
  },
  { title: "Age", field: "age", type: "numeric" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

const newStudentLink = "/new-student";

const StudentsPage = () => {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.root}
        style={{ display: "flex", justifyContent: "end" }}
      >
        <Button
          variant="outlined"
          color="primary"
          endIcon={<AddCircle />}
          component={Link}
          to={newStudentLink}
        >
          New Student
        </Button>
      </div>
      <Table
        columns={columns}
        data={students}
        title="Students"
        options={{
          filtering: true,
          exportButton: true,
        }}
        onSelectionChange={(rows) => {
          console.log("Rows: ", rows);
        }}
      />
    </>
  );
};

export default StudentsPage;
