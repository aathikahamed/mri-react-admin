import { Button, makeStyles } from "@material-ui/core";
import Table from "../../Table/Table";
import AddCircle from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const students = [
  {
    name: "Aathik",
    phoneNumber: "1231231231",
    contactName: "Aathik",
    id: 1,
    class: 12,
    age: 16,
    gender: "Male",
  },
  {
    name: "Aamir",
    phoneNumber: "1231231231",
    contactName: "Aathik",
    id: 2,
    class: 4,
    age: 10,
    gender: "Male",
  },
  {
    name: "Aamina",
    phoneNumber: "1231231231",
    contactName: "Aathik",
    id: 3,
    class: 9,
    age: 12,
    gender: "Female",
  },
  {
    name: "Aashik",
    phoneNumber: "1231231231",
    contactName: "Aathik",
    id: 4,
    class: 12,
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
  {
    title: "Code",
    field: "id",
    // type: "numeric",
    // cellStyle: {
    //   width: 150,
    //   maxWidth: 150,
    // },
    // headerStyle: {
    //   width: 150,
    //   maxWidth: 150,
    // },
  },
  { title: "Name", field: "name" },
  { title: "Class", field: "class", lookup: years },
  {
    title: "Gender",
    field: "gender",
    lookup: { Male: "Male", Female: "Female" },
  },
  { title: "Contact Person", field: "contactName" },
  { title: "Telephone", field: "phoneNumber" },
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
          pageSize: 10, // make initial page size
          emptyRowsWhenPaging: true, //to make page size fix in case of less data rows
        }}
        onSelectionChange={(rows) => {
          console.log("Rows: ", rows);
        }}
      />
    </>
  );
};

export default StudentsPage;
