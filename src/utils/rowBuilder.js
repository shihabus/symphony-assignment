const rowBuilder = (data, delimiter, rows) =>
  String(data)
    .split(String(delimiter).trim() == "" ? " " : delimiter)
    .slice(0, 4 * Number(rows));

export default rowBuilder;
