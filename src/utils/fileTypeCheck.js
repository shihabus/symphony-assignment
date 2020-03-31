const fileFormat = {
  txt: "text/plain"
};

const fileFormatChecker = (file, format) => file.type === fileFormat[format];

export default fileFormatChecker;
