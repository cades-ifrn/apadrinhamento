import React from 'react'

const Wrapper = ({isFirst=false, children}) => {
  return (
    <div className={`main-wrapper${isFirst ? '-first' : ''}`}>
      {children}
    </div>
  )
}

export default Wrapper