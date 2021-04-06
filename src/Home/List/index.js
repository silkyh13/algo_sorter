import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { FixedSizeList } from "react-window";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.default,
    position: "relative",
    overflow: "auto",
    height: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));
function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={items[index]} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

const ListComponent = ({ values, setValues, entered }) => {
  const classes = useStyles();
  const [arrayInput, setArrayInput] = useState([]);

  useEffect(() => {
    if (entered) {
      setArrayInput([...arrayInput, values]);
    }
  }, [entered]);
  return (
    <List className={classes.root} subheader={<li />}>
      {arrayInput.map((item, i) => (
        <ListItem key={i}>
          <ListItemText primary={item} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                arrayInput.splice(i, 1);
                setArrayInput([...arrayInput]);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ListComponent;
