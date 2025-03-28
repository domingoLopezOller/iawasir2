import React from 'react'
import BasicSelect from '../Select'
import { Route, Routes } from 'react-router-dom'

function Aside() {
  return (
    <aside>
      <BasicSelect/>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/wGxDfSWC4Ww?si=M8v6MB5VOe5Z156H" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </aside>
  )
}

export default Aside