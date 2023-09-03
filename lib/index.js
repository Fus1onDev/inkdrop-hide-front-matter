"use strict";

var _HideFrontMatterSummaryView = _interopRequireDefault(require("./HideFrontMatterSummaryView"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
module.exports = {
  originalNoteListItemSummaryView: null,
  activate() {
    this.originalNoteListItemSummaryView = inkdrop.components.getComponentClass('NoteListItemSummaryView');
    inkdrop.components.registerClass(_HideFrontMatterSummaryView.default, 'NoteListItemSummaryView');
  },
  deactivate() {
    inkdrop.components.registerClass(this.originalNoteListItemSummaryView, 'NoteListItemSummaryView');
  }
};