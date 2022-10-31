import styles from '../styles/Home.module.css'
import { TestContext } from '../contexts/TestContext'
import React, { useState } from 'react'
import { Component1 } from '../components/Component1'
import { Component2 } from '../components/Component2'

export default function Home() {

  const [toggleComponent, setToggleComponent]= useState<boolean>(true)

  return (
    <div className={styles.container}>
      <TestContext.Provider value={{toggleComponent, setToggleComponent}}>
        {toggleComponent ? <Component1 /> : <Component2 />}
      </TestContext.Provider>
    </div>
  )
}
