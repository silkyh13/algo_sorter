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
import {
  setInputArray,
  inputArrayState,
  deleteValue,
} from "../../state/slices/inputArray";
import { useSelector, useDispatch } from "react-redux";

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

const ListComponent = () => {
  const classes = useStyles();
  const inputArray = useSelector(inputArrayState);
  const dispatch = useDispatch();
  return (
    <List className={classes.root} subheader={<li />}>
      {inputArray.value.map((item, i) => (
        <ListItem key={i}>
          <ListItemText primary={item} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                dispatch(deleteValue(i));
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
