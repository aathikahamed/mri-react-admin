import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./Components/NavBar/NavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Route } from "react-router-dom";
import StudentsPage from "./Components/Pages/StudentsPage/StudentsPage";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <NavBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Route exact path={["/", "/dashboard"]} component={Dashboard} />
            <Route path="/students" component={StudentsPage} />
          </Container>
        </main>
      </div>
    </>
  );
}
