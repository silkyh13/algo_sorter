import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import Input from "./Input";
import List from "./List";
import Blocks from "./Blocks";
import { setMessageState } from "../state/slices/message";
import { setInputArray, inputArrayState } from "../state/slices/inputArray";

import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [entered, setEntered] = useState(false);
  const [values, setValues] = useState("");
  // const [arrayInput, setArrayInput] = useState([]);
  const [valid, setValid] = useState(true);
  const dispatch = useDispatch();
  const arrayInput = useSelector(inputArrayState);

  useEffect(() => {
    if (entered) {
      if (arrayInput.value.length >= 10) {
        setValid(false);
        dispatch(setMessageState("Delete something"));
      } else {
        dispatch(setInputArray(values));
      }
    }
  }, [entered]);

  return (
    <Box
      pl="10vw"
      pt="5vh"
      display="flex"
      height="100%"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
    >
      <Input
        setEntered={setEntered}
        entered={entered}
        setValues={setValues}
        values={values}
        valid={valid}
        setValid={setValid}
      ></Input>
      <List />
      <Blocks />
    </Box>
  );
};

export default Home;
