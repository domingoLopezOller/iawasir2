import React from 'react'
import './section.module.css'
import ControlledCarousel from '../Carousel'
import { Card } from '@mui/material'
import Tarjeta from './Cards'
import ImageCards from './CardsGallery'


function Section() {
  return (
    <section  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1rem', gap: '0.1rem' }}>
      <article> <ImageCards style={{ flex: 1 }}/> </article>
      <ControlledCarousel style={{ flex: 1 }}/>
    </section>
  )
}

export default Section