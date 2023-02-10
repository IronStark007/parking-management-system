const fs = require("fs");
var path = require("path");

module.exports = createOrDeleteHandler = (fileName, data) => {
  const file = path.join(__dirname, `models/${fileName}.js`);
  const content = fs.readFileSync(file, "utf8");
  const start = content.indexOf("=");
  const previous = content.slice(0, start + 1);
  const complete = `${previous} ${JSON.stringify(data)}`;
  fs.writeFileSync(file, complete, "utf8");
};
