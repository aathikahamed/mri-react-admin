import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EmailIcon from "@material-ui/icons/Email";
import ListItem from "./ListItem";

export const mainListItems = (
  <>
    <ListItem text="Dashboard">
      <DashboardIcon />
    </ListItem>

    <ListItem text="Students">
      <AssignmentIndIcon />
    </ListItem>

    <ListItem text="Staff">
      <PeopleIcon />
    </ListItem>

    <ListItem text="Fees">
      <AttachMoneyIcon />
    </ListItem>

    <ListItem text="Exams">
      <BarChartIcon />
    </ListItem>

    <ListItem text="News">
      <EmailIcon />
    </ListItem>
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader inset>Saved reports</ListSubheader>

    <ListItem text="Current">
      <AssignmentIcon />
    </ListItem>

    <ListItem text="Last">
      <AssignmentIcon />
    </ListItem>

    <ListItem text="Year">
      <AssignmentIcon />
    </ListItem>
  </>
);
