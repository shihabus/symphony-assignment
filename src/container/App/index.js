import React from "react";
import styled from "styled-components";
import { FileUpload, Navbar, Table } from "../../components";
import FilterSection from "./components/filterSection";
import { connect } from "react-redux";
import {
  getUploadStatus,
  getFileData,
  getDelimiterFilter,
  getRowCountFilter,
  isDataNull
} from "./selectors";
import PropTypes from "prop-types";
import actions from "./actions";

const Wrapper = styled.div`
  height: 100%;
  background: #d1d1d1;
  display: grid;
  grid-template-rows: 10vh calc(100% - (0.5rem + 10vh));
  grid-gap: 0.5rem;
  grid-template-areas: "nav" "content";
`;

const Content = styled.div`
  grid-area: content;
  background: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
`;

function App(props) {
  const { uploadStatus, initFileUpload, dataIsNull } = props;

  const fileUploadHandler = file => {
    const formData = new FormData();
    formData.append("file", file);
    initFileUpload(formData);
  };

  return (
    <Wrapper>
      <Navbar
        header="File Viewer"
        rightDiv={() => (
          <FileUpload
            uploadStatus={uploadStatus}
            reTryUpload={() => {}} // yet to complete
            fileUploadCallBack={file => fileUploadHandler(file)}
            {...props}
          />
        )}
      />
      <Content>
        {dataIsNull ? (
          <React.Fragment>Please upload a file</React.Fragment>
        ) : (
          <React.Fragment>
            <FilterSection {...props} />
            <Table {...props} />
          </React.Fragment>
        )}
      </Content>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  uploadStatus: getUploadStatus(state),
  tableContent: getFileData(state),
  delimiter: getDelimiterFilter(state),
  rowCount: getRowCountFilter(state),
  dataIsNull: isDataNull(state)
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: data => dispatch(actions.FILTER_CHANGED(data)),
  initFileUpload: data => dispatch(actions.UPLOAD_FILE(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  uploadStatus: PropTypes.string,
  initFileUpload: PropTypes.func,
  dataIsNull: PropTypes.bool
};

App.defaultProps = {
  tableHeight: "100%",
  initFileUpload: () => {}
};
