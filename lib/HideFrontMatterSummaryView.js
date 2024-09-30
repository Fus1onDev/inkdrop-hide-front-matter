"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HideFrontMatterSummaryView;
var _react = _interopRequireDefault(require("react"));
var _removeMarkdown = _interopRequireDefault(require("remove-markdown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function parseContent(markdown) {
  const match = /^---\n([\s\S]+?)\n---\n/.exec(markdown);
  if (match) {
    return markdown.slice(match[0].length);
  } else {
    return markdown;
  }
}
function HideFrontMatterSummaryView(props) {
  function getSummary() {
    const content = parseContent(props.body);
    if (content) {
      return (0, _removeMarkdown.default)(content.slice(0, 80));
    } else {
      return (0, _removeMarkdown.default)(props.body.slice(0, 80));
    }
  }
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "text summary"
  }, getSummary());
}