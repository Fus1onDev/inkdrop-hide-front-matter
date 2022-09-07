'use babel';

import {registerAsNoteListItemSummaryView, /*unregisterAsNoteListItemSummaryView*/} from './HideFrontMatterSummaryView'

module.exports = {

  activate() {
    registerAsNoteListItemSummaryView()
  },

  deactivate() {
    // unregisterAsNoteListItemSummaryView()
  }

}
