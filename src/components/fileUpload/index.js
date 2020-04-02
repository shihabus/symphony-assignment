import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineReload } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { FileDropper, FilePicker } from "../index";
import fileFormatChecker from "../../utils/fileTypeCheck";
import FETCH_STATUS from "../../constants/fetchStatus";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  const { fileUploadCallBack, uploadStatus, reTryUpload } = props;
  const [file, setFile] = useState(null);
  const [isTxt, setIsTxt] = useState(null);

  useEffect(() => {
    if (file) {
      setIsTxt(fileFormatChecker(file, "txt"));
    }
  }, [file]);

  useEffect(() => {
    if (isTxt) {
      fileUploadCallBack(file);
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
        {isTxt && showUpload()}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
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

Index.propTypes = {
  fileUploadCallBack: PropTypes.func,
  uploadStatus: PropTypes.string,
  reTryUpload: PropTypes.func
};
