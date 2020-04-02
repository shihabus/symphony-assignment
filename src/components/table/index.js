import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 3rem;
  margin-top: 1rem;
  width: ${props => props.tableWidth};
  height: ${props => props.tableHeight};
  overflow: auto;
`;

const ItemWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: black;
  border-width: 0px;
  border-bottom-width: 0.25px;
  border-style: solid;
  padding: 0 2px;
  :nth-child(odd) {
    background: #e1e1e1;
  }
`;

const EllipsisText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 95%;
  text-align: center;
`;

export default function Index(props) {
  const { tableContent } = props;

  return (
    <TableWrapper {...props}>
      {tableContent.map((item, index) => (
        <ItemWrapper key={index}>
          <EllipsisText>{item}</EllipsisText>
        </ItemWrapper>
      ))}
    </TableWrapper>
  );
}

Index.defaultProps = {
  tableWidth: " 100%",
  tableHeight: "150%",
  tableContent: []
};

Index.propTypes = {
  tableContent: PropTypes.array
};
