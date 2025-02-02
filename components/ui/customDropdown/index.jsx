"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Select, { components } from "react-select";

import dropdownStyle from "./style.module.scss";
import { ImageCustom } from "../imageCustom";

// clearIndicator
// container
// control
// dropdownIndicator
// group
// groupHeading
// indicatorsContainer
// indicatorSeparator
// input
// loadingIndicator
// loadingMessage
// menu
// menuList
// menuPortal
// multiValue
// multiValueLabel
// multiValueRemove
// noOptionsMessage
// option
// placeholder
// singleValue
// valueContainer
const { ValueContainer, Placeholder } = components;
const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

const CustomDropdown = ({
  options,
  onChange,
  className,
  inputError,
  styles,
  placeholder,
  setFieldValue,
  name,
  value,
}) => {
  const controlStyle = {
    control: (styles) => ({
      ...styles,
      height: 60,
      borderRadius: 12,
      backgroundColor: "#F1F1F1",
      borderWidth: "0.14rem",
      borderColor: "rgba(17, 17, 17, 0.12)",
      "&:hover": {
        borderColor: "#ba6f37",
      },
      boxShadow: "none",
      fontWeight: 400,
      fontFamily: "../public/fonts/Aeonik-Regular.otf",
      fontSize: "1rem",
      color: "#000000",
    }),
    singleValue: () => ({
      color: "#111",
      top: "-5px",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    valueContainer: (provided) => ({
      ...provided,
      overflow: "visible",
      top: 0,
      position: "relative",
      left: 10,
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      right: 10,
      position: "relative",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      position: "absolute",
      top: state.hasValue || state.selectProps.inputValue ? 0 : "0",
      left: -2,
      transition: "top 0.1s, font-size 0.1s",
      fontSize: (state.hasValue || state.selectProps.inputValue) && 13,
      color: "#8d8d8d",
      fontWeight: 900,
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#0066CC" : null,
        color: isFocused ? "white" : "#111",
        fontSize: "1rem",
        borderColor: isFocused ? "#05bed7" : "#05bed7",
        cursor: "pointer",
      };
    },
  };

  // if (clear) {
  //   ref.current.clearValue();
  // }

  return (
    <div
      className={cn(
        className,
        dropdownStyle.wrapperStyle,
        inputError && "custom-dropdown-style"
      )}
    >
      <Select
        onChange={(opt) => {
          if (opt) setFieldValue(name, opt.value);
        }}
        defaultValue={{
          value: options[0].name,
          label: options[0].name,
          image: options[0].flag,
          code: options[0].code,
        }}
        options={options.map((item) => ({
          value: item?.name,
          label: item?.name,
          image: item?.flag,
          code: item?.code,
        }))}
        value={
          options.map((item) => ({
            value: item?.name,
            label: item?.name,
            image: item?.flag,
            code: item?.code,
          }))
            ? options
                .map((item) => ({
                  value: item?.name,
                  label: item?.name,
                  image: item?.flag,
                  code: item?.code,
                }))
                .find((option) => option.label === value)
            : ""
        }
        classNamePrefix="react-select"
        styles={controlStyle || styles}
        isSearchable={false}
        placeholder={placeholder}
        components={{
          ValueContainer: CustomValueContainer,
        }}
      />
    </div>
  );
};

export const ServiceDropdown = ({
  options,
  onChange,
  className,
  inputError,
  styles,
  placeholder,
  setFieldValue,
  name,
  value,
}) => {
  const controlStyle = {
    control: (styles) => ({
      ...styles,
      height: 60,
      borderRadius: 12,
      backgroundColor: "#F1F1F1",
      borderWidth: "0.14rem",
      borderColor: "rgba(17, 17, 17, 0.12)",
      "&:hover": {
        borderColor: "#05bed7",
      },
      boxShadow: "none",
      fontWeight: 400,
      fontFamily: "../public/fonts/Aeonik-Regular.otf",
      fontSize: "1rem",
      color: "#000000",
    }),
    singleValue: () => ({
      color: "#111",
      top: "-5px",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    valueContainer: (provided) => ({
      ...provided,
      overflow: "visible",
      top: 0,
      position: "relative",
      left: 10,
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      right: 10,
      position: "relative",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      position: "absolute",
      top: state.hasValue || state.selectProps.inputValue ? 0 : "0",
      left: -2,
      transition: "top 0.1s, font-size 0.1s",
      fontSize: (state.hasValue || state.selectProps.inputValue) && "1rem",
      color: "#8d8d8d",
      fontWeight: 400,
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#0066CC" : null,
        color: isFocused ? "white" : "#111",
        fontSize: "1rem",
        borderColor: isFocused ? "#05bed7" : "#05bed7",
        cursor: "pointer",
      };
    },
  };

  return (
    <div
      className={cn(
        className,
        dropdownStyle.wrapperStyle,
        inputError && "custom-dropdown-style"
      )}
    >
      <Select
        onChange={(opt) => {
          if (opt) setFieldValue(name, opt.value);
        }}
        options={options.map((item) => ({
          value: item?.name,
          label: item?.name,
        }))}
        value={
          value
            ? options
                .map((item) => ({
                  value: item?.name,
                  label: item?.name,
                }))
                .find((option) => option.value === value)
            : {
                value: "",
                label: "",
              }
        }
        classNamePrefix="react-select"
        styles={controlStyle || styles}
        isSearchable={false}
        placeholder={placeholder}
        components={{
          ValueContainer: CustomValueContainer,
        }}
      />
    </div>
  );
};

export default CustomDropdown;
