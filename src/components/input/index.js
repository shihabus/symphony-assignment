import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 1rem;
`;
const Input = styled.input`
  margin-left: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
`;
const Label = styled.label``;

export default function Index(props) {
  const { label, onValueChange, initialValue } = props;

  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    e.preventDefault();
    e.stopPropagation();
    const { value } = e.target;
    setValue(value);
    onValueChange(value);
  };
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input onChange={e => handleChange(e)} value={value} />
    </Wrapper>
  );
}

Index.defaultProps = {
  label: "Label",
  onValueChange: () => {},
  initialValue: ""
};

Index.propTypes = {
  label: PropTypes.string,
  initialValue: PropTypes.string,
  onValueChange: PropTypes.func
};
