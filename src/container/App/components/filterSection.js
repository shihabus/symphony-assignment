import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Input } from "../../../components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 3rem;
`;

export default function FilterSection(props) {
  const { onFilterChange, delimiter, rowCount } = props;
  return (
    <Wrapper>
      <Input
        onValueChange={x => onFilterChange({ item: "delimiter", value: x })}
        label="Delimiter"
        initialValue={delimiter}
      />
      <Input
        onValueChange={x => onFilterChange({ item: "rowCount", value: x })}
        label="Rows"
        initialValue={rowCount}
      />
    </Wrapper>
  );
}

FilterSection.propTypes = {
  onFilterChange: PropTypes.func,
  delimiter: PropTypes.string,
  rowCount: PropTypes.string
};
