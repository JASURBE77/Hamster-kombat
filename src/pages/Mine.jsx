  import React, { useContext } from 'react'
  import { Hamstermoney } from './Home'

  const Mine = () => {
    const coin = useContext(Hamstermoney)
    return (
      <>
      <div>
        <h1>{coin}</h1>
      </div>
      </>
    )
  }

  export default Mine