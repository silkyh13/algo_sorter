import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { FixedSizeList } from "react-window";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
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

const ListComponent = ({ arrayInput }) => {
  const classes = useStyles();

  return (
    // <List subheader={<li />}>
    //   {arrayInput &&
    //     arrayInput.map((item) => {
    //       return <ListItemText key={item} primary={item} />;
    //     })}
    // </List>
    <div className={classes.root}>
      <FixedSizeList
        height={300}
        width={300}
        itemSize={getItemSize}
        itemCount={arrayInput.length}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
};
const getItemSize = (index) => {
  // return a size for items[index]
};

export default ListComponent;
