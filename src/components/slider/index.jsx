import React from 'react'
import Card from './card'
import SectionHeader from '../section-header'

const Comments = () => {
  return (
    <section className="comments">
      <div className="container">
        <div className="comments__content">
          <SectionHeader
            title="Our customers says"
            btn="Button"
            class={'padding45'}
          />
          <Card />
        </div>
      </div>
    </section>
  )
}

export default Comments
