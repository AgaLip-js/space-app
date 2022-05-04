import React from 'react'

const propTypes = {}

const Card = ({ children, className, style }: any) => {
  return (
    <div className={`${className || ''} card`} style={style}>
      {children}
    </div>
  )
}

Card.propTypes = propTypes

export default Card;