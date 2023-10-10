import React from 'react'
import '../Styles/Button.css'

const Button = ({text = "Click"}) => {
  return (
    <button>
      {text}
    </button>
  )
}

export default Button
