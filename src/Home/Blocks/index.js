import React, { useState, useEffect } from "react";
import { Box, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { inputArrayState } from "../../state/slices/inputArray";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    width: 1000,
    backgroundColor: "orange",
    height: 600,
  },
  block: {
    backgroundColor: "lavender",
    width: 200,
  },
}));
const Blocks = ({ arrayInput }) => {
  const classes = useStyles();
  const inputArray = useSelector(inputArrayState);

  return (
    <Box
      mt={3}
      className={classes.blockContainer}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      {inputArray.value.map((item, i) => (
        <Box
          key={i}
          mr={1}
          className={classes.block}
          height={`${0.6 * item.split(",").join("")}px`}
          alignSelf="flex-end"
        >
          {item}
        </Box>
      ))}
    </Box>
  );
};

export default Blocks;
