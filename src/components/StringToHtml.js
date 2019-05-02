import React from 'react'

function createMarkup(html) {
  return { __html: html }
}

function StringToHtml(props) {
  const { html } = props
  return <span className={html} dangerouslySetInnerHTML={createMarkup(html)} />
}

export default StringToHtml