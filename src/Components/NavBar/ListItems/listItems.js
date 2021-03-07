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

const mainItems = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
  },
  {
    icon: <AssignmentIndIcon />,
    text: "Students",
  },
  {
    icon: <PeopleIcon />,
    text: "Staff",
  },
  {
    icon: <AttachMoneyIcon />,
    text: "Fees",
  },
  {
    icon: <BarChartIcon />,
    text: "Exams",
  },
  {
    icon: <EmailIcon />,
    text: "News",
  },
];

const secondaryItems = ["Current", "Last", "Year"];

export const mainListItems = mainItems.map(({ text, icon }) => (
  <ListItem key={text} text={text} icon={icon} />
));

export const secondaryListItems = (
  <>
    <ListSubheader inset>Saved reports</ListSubheader>

    {secondaryItems.map((text) => (
      <ListItem key={text} text={text} icon={<AssignmentIcon />} />
    ))}
  </>
);
