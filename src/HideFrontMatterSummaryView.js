'use babel'

import * as React from 'react'
const matter = require('white-matter')
const removeMd = require('remove-markdown')

export default function HideFrontMatterSummaryView(props) {
  function getSummary() {
    const { content } = matter(props.body)
    if (content) {
      return removeMd(content.slice(0, 80))
    } else {
      return removeMd(props.body.slice(0, 80))
    }
  }
  return (
    <span className='text'>
      {getSummary()}
    </span>
  )
}

export function registerAsNoteListItemSummaryView() {
  inkdrop.components.registerClass(
    HideFrontMatterSummaryView,
    'NoteListItemSummaryView'
  )
}

/* export function unregisterAsNoteListItemSummaryView() {
  inkdrop.components.deleteClass(
    HideFrontMatterSummaryView,
    'NoteListItemSummaryView'
  ) 
} */
