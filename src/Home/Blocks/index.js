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
  const bubbleSort = async () => {
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
  const classes = useStyles();
  const inputArray = useSelector(inputArrayState).value;
  const dispatch = useDispatch();
  const [copy, setCopy] = useState(inputArray);

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    dispatch(setNewArray(copy));
  }, [copy]);
  const mergeSort = async () => {
    var sorted = inputArray.slice(0),
      n = sorted.length,
      buffer = new Array(n);
    console.log("start", sorted);
    for (var size = 1; size < n; size *= 2) {
      for (var leftStart = 0; leftStart < n; leftStart += 2 * size) {
        var left = leftStart,
          right = Math.min(left + size, n),
          leftLimit = right,
          rightLimit = Math.min(right + size, n),
          i = left;
        while (left < leftLimit && right < rightLimit) {
          if (sorted[left] <= sorted[right]) {
            buffer[i++] = sorted[left++];
          } else {
            buffer[i++] = sorted[right++];
          }
        }
        while (left < leftLimit) {
          buffer[i++] = sorted[left++];
          var filtered = buffer.filter(Boolean);
          setCopy(filtered.concat(sorted.slice(filtered.length)));
          await timer(1000);
        }

        while (right < rightLimit) {
          buffer[i++] = sorted[right++];
          filtered = buffer.filter(Boolean);
          setCopy(filtered.concat(sorted.slice(filtered.length)));
          await timer(1000);
        }
      }
      var temp = sorted,
        sorted = buffer,
        buffer = temp;
      setCopy(sorted.slice(0));
      await timer(2000);

      // console.log(size, sorted);
    }
    dispatch(setNewArray(sorted));
    // return sorted;
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
      <Box display="flex" flexDirection="column">
        <Button
          variant="contained"
          onClick={() => {
            bubbleSort();
          }}
        >
          bubble Sort
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            mergeSort();
          }}
        >
          Merge Sort
        </Button>
      </Box>
    </Box>
  );
};

export default Blocks;
