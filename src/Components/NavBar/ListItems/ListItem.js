import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";

const OneListItem = ({ icon, text }) => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(text.toLowerCase());
  };

  return (
    <ListItem button onClick={handleRedirect}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default OneListItem;
