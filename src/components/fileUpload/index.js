/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineReload } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { FileDropper, FilePicker } from "../index";
import fileFormatChecker from "../../utils/fileTypeCheck";
import FETCH_STATUS from "../../constants/fetchStatus";

const Wrapper = styled.div`
  width: ${props => props.compWidth};
  height: ${props => props.compHeight};
  background: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrongFile = styled.div`
  height: 100%;
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReloadWrapper = styled(WrongFile)`
  flex-direction: column;
  cursor: pointer;
`;

export default function Index(props) {
  const { onFileUploadCallBack, uploadStatus, reTryUpload } = props;
  const [file, setFile] = useState(null);
  const [isTxt, setIsTxt] = useState(null);

  useEffect(() => {
    if (file) {
      setIsTxt(fileFormatChecker(file, "txt"));
    }
  }, [file]);

  useEffect(() => {
    if (isTxt) {
      onFileUploadCallBack(file);
      setFile(null);
    }
  }, [isTxt]);

  const showUpload = () => (
    <FileDropper onFileDropCallBack={setFile.bind(this)}>
      <FilePicker onChangeHandler={setFile.bind(this)} />
    </FileDropper>
  );

  const removeFile = () => {
    setFile(null);
    setIsTxt(null);
  };

  const wrongFile = () => (
    <WrongFile>
      Wrong file Type <IoIosCloseCircle onClick={removeFile} />
    </WrongFile>
  );

  if (isTxt !== null) {
    return (
      <Wrapper {...props}>
        {!isTxt && wrongFile()}
        {isTxt && <div>Ok</div>}
      </Wrapper>
    );
  }

  return (
    <Wrapper {...props}>
      {uploadStatus === FETCH_STATUS.IN_PROGRESS && <div>Loading...</div>}
      {uploadStatus === FETCH_STATUS.FAILED && (
        <ReloadWrapper onClick={reTryUpload}>
          <AiOutlineReload />
          <div>Retry</div>
        </ReloadWrapper>
      )}
      {!file && uploadStatus === FETCH_STATUS.SUCCESS && showUpload()}
    </Wrapper>
  );
}

Index.defaultProps = {
  compWidth: "10rem",
  compHeight: "4.5rem"
};
