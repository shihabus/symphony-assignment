import React from "react";
import styled from "styled-components";
import { FileUpload } from "./components";
import FETCH_STATUS from "./constants/fetchStatus";

const Wrapper = styled.div`
  height: 100%;
  background: red;
  display: grid;
  grid-template-rows: 10vh calc(100% - (0.5rem+5%));
  grid-gap: 0.5rem;
  grid-template-areas: "nav" "table";
`;

const Nav = styled.div`
  grid-area: nav;
  background: white;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

function App() {
  return (
    <Wrapper>
      <Nav>
        File Drop
        <FileUpload
          onFileUploadCallBack={file =>
            console.log("onFileUploadCallBack", file)
          }
          uploadStatus={FETCH_STATUS.SUCCESS}
          reTryUpload={() => console.log("Retry")}
        />
      </Nav>
      Hello
    </Wrapper>
  );
}

export default App;
