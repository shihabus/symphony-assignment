/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import useOnDropHook from "../../utils/useOnDropHook";
import { FiUpload } from "react-icons/fi";
import _ from "lodash";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OnDragWrapper = styled.div`
  height: 100%;
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Index(props) {
  const { onFileDropCallBack } = props;
  const parentDiv = useRef(null);
  const [_isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  // text / plain;

  const isDragging = useOnDropHook(parentDiv, setFile.bind(this));

  useEffect(() => {
    if (isDragging) setFile(null);
    setIsDragging(isDragging);
  }, [isDragging]);

  useEffect(() => {
    if (file) {
      onFileDropCallBack(file[0]);
      setFile(null);
    }
  }, [file]);

  const dragDiv = () => (
    <OnDragWrapper>
      <FiUpload />
      <p>Drop Here!</p>
    </OnDragWrapper>
  );

  return (
    <Wrapper ref={parentDiv}>
      {_isDragging && dragDiv()}
      {!_isDragging && props.children}
    </Wrapper>
  );
}
