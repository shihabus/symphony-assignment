import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UpdateButton = styled.input`
  cursor: pointer;
  color: transparent;
  overflow: hidden;
  width: 50%;
`;

export default function Index(props) {
  const { onChangeHandler } = props;
  return (
    <Wrapper>
      <UpdateButton
        type="file"
        accept="text/plain"
        onChange={event => onChangeHandler(event.target.files[0])}
      />
      <p>Click/Drop to upload</p>
    </Wrapper>
  );
}

Index.defaultProps = {
  onChangeHandler: () => {}
};

Index.propTypes = {
  onChangeHandler: PropTypes.func
};
