import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Box } from "@material-ui/core";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { setMessageState, stateOfMessage } from "../../state/slices/message";
import {
  setInputArray,
  inputArrayState,
  merge,
} from "../../state/slices/inputArray";
import { useSelector, useDispatch } from "react-redux";

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

const Input = ({ entered, setEntered, values, setValues, setValid, valid }) => {
  const messageState = useSelector(stateOfMessage);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleChange = (event) => {
    setValues(event.target.value);
  };

  useEffect(() => {
    let elem = document.getElementById("formatted-numberformat-input");

    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        let stringNumber = event.target.value.split(",").join("");
        if (stringNumber === "") {
        } else if (stringNumber > 1000) {
          setValid(false);
          dispatch(
            setMessageState("Enter a number less than or equal to 1,000")
          );
        } else if (stringNumber < 1000) {
          dispatch(setMessageState("Type number and hit enter"));
          setValid(true);
          setValues(event.target.value);
          setEntered(true);
          setValues("");
        }
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
        error={valid === false ? true : false}
        className={classes.textField}
        label={messageState.value}
        value={values}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </Box>
  );
};

export default Input;
