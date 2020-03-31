/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */

import { useState, useEffect } from "react";
import _ from "lodash";

export default function useOnDropHook(ref, onDropCallBack) {
  const [isDragging, setSetIsDragging] = useState(false);

  useEffect(() => {
    let div = ref.current;
    if (div) {
      div.addEventListener("dragenter", handleDragIn);
      div.addEventListener("dragleave", handleDragOut);
      div.addEventListener("dragover", handleDrag);
      div.addEventListener("drop", handleDrop);
    }
    return () => {
      if (div) {
        div.removeEventListener("dragenter", handleDragIn);
        div.removeEventListener("dragleave", handleDragOut);
        div.removeEventListener("dragover", handleDrag);
        div.removeEventListener("drop", handleDrop);
      }
    };
  }, [ref]);

  const handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    let itemsCount = _.get(e, "dataTransfer.items.length", 0);
    if (itemsCount) {
      setSetIsDragging(true);
    }
  };

  const handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    setSetIsDragging(false);
  };

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setSetIsDragging(false);
    let files = _.get(e, "dataTransfer.files", []);
    if (files.length > 0) {
      onDropCallBack(files);
      e.dataTransfer.clearData();
    }
  };

  return isDragging;
}

useOnDropHook.defaultProps = {
  ref: null,
  onDropCallBack: () => {}
};
