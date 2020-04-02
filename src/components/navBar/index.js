import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Nav = styled.div`
  grid-area: nav;
  background: white;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const Header = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
`;

const RightDiv = styled.div`
  width: ${props => props.divWidth};
  height: ${props => props.divHeight};
  background: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Index(props) {
  const { header, rightDiv } = props;

  return (
    <Nav>
      <Header>{header}</Header>
      <RightDiv {...props}>{rightDiv()}</RightDiv>
    </Nav>
  );
}

Index.propTypes = {
  header: PropTypes.string,
  rightDiv: PropTypes.node
};

Index.defaultProps = {
  divWidth: "10rem",
  divHeight: "4.5rem"
};
