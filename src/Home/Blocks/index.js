import React, { useState, useEffect } from "react";
import { Box, List, ListItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { inputArrayState, setNewArray } from "../../state/slices/inputArray";
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
  const inputArray = useSelector(inputArrayState).value;
  const dispatch = useDispatch();
  const [copy, setCopy] = useState(inputArray);

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    dispatch(setNewArray(copy));
  }, [copy]);

  const swapping = async () => {
    let noSwaps;
    let tempArray = inputArray.slice(0);
    for (let i = tempArray.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (tempArray[j] > tempArray[j + 1]) {
          await timer(1000);
          let temp = tempArray[j];
          tempArray[j] = tempArray[j + 1];
          tempArray[j + 1] = temp;
          setCopy(tempArray.slice(0));
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
  };
  return (
    <Box mt={3} display="flex" flexDirection="row">
      <Box
        className={classes.blockContainer}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        {inputArray &&
          inputArray.map((item, i) => (
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
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            swapping();
          }}
        >
          Start Sorting
        </Button>
      </Box>
    </Box>
  );
};

export default Blocks;
