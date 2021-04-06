import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Box } from "@material-ui/core";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 300,
  },
}));

const Input = ({ entered, setEntered, values, setValues }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setValues(event.target.value);
  };

  useEffect(() => {
    let elem = document.getElementById("formatted-numberformat-input");

    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        setValues(event.target.value);
        setEntered(true);
        setValues("");
      } else {
        setEntered(false);
      }
    };
    if (elem) {
      elem.addEventListener("keydown", listener);
    }
  }, []);
  return (
    <Box display="flex" justifyContent="space-between" width="500px" mb={3}>
      <TextField
        className={classes.textField}
        label="Type number and hit enter"
        value={values}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />

      <Button variant="contained" onClick={() => {}}>
        Start Sorting
      </Button>
    </Box>
  );
};

export default Input;
