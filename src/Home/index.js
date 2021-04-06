import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import Input from "./Input";
import List from "./List";
const Home = () => {
  const [entered, setEntered] = useState(false);
  const [values, setValues] = useState("");

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
      ></Input>
      <List entered={entered} values={values} setValues={setValues} />
    </Box>
  );
};

export default Home;
