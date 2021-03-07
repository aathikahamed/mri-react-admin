import { Button, Card, TextField, makeStyles, Grid } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  buttonRight: {
    marginBottom: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(4),
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
  },
}));

const StudentsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [firstName, setFirstName] = useState();

  const classes = useStyles();
  return (
    <>
      <div
        className={classes.buttonRight}
        style={{ display: "flex", justifyContent: "end" }}
      >
        <Button variant="contained" color="primary" endIcon={<SaveIcon />}>
          Save Student
        </Button>
      </div>
      <Card className={classes.card}>
        <TextField required label="First Name" variant="outlined" />
        <TextField required label="Last Name" variant="outlined" />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            label="Date Of Birth"
            format="dd/MM/yyyy"
            value={selectedDate}
            inputVariant="outlined"
            onChange={(e) => {
              setSelectedDate(e);
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField required label="Phone Number" variant="outlined" />
      {/* https://material-ui.com/components/radio-buttons/ */}
      </Card>

    </>
  );
};

export default StudentsPage;
