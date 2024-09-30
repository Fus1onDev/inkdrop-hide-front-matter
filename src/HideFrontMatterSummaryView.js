import React from 'react'
import removeMd from 'remove-markdown'

function parseContent(markdown) {
  const match = /^---\n([\s\S]+?)\n---\n/.exec(markdown)
  if (match) {
    return markdown.slice(match[0].length)
  } else {
    return markdown
  }
}

export default function HideFrontMatterSummaryView(props) {
  function getSummary() {
    const content = parseContent(props.body)
    if (content) {
      return removeMd(content.slice(0, 80))
    } else {
      return removeMd(props.body.slice(0, 80))
    }
  }
  return <span className="text summary">{getSummary()}</span>
}
