import React from 'react'

const Alert  = ({alert}) => {
  console.log(alert.msg)
  return (
    <div>{alert.msg}</div>
  )
}

export default Alert 