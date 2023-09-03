import HideFrontMatterSummaryView from './HideFrontMatterSummaryView'

module.exports = {
  originalNoteListItemSummaryView: null,

  activate() {
    this.originalNoteListItemSummaryView = inkdrop.components.getComponentClass(
      'NoteListItemSummaryView'
    )
    inkdrop.components.registerClass(
      HideFrontMatterSummaryView,
      'NoteListItemSummaryView'
    )
  },

  deactivate() {
    inkdrop.components.registerClass(
      this.originalNoteListItemSummaryView,
      'NoteListItemSummaryView'
    )
  }
}
