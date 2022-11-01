import styles from '../styles/Home.module.css'
import { ToggleContext } from '../contexts/ToggleContext'
import { UserContext } from '../contexts/UserContext'
import React, { useState } from 'react'
import { Component1 } from '../components/Component1'
import { Component2 } from '../components/Component2'
import { Modal } from '../components/Modal'

export default function Home() {

  const [toggleComponent, setToggleComponent]= useState<boolean>(true)
  const [secretWord, setSecretWord]= useState<string>('put your secret word here')
  const [showModal, setShowModal] = useState<boolean>(true)

  return (
    <div className={styles.container}>
      <UserContext.Provider value={{secretWord, setSecretWord}}>
        {showModal ?
          <Modal show={setShowModal}></Modal>
          :
          <ToggleContext.Provider value={{toggleComponent, setToggleComponent}}>
            {toggleComponent ? <Component1 /> : <Component2 />}
          </ToggleContext.Provider>
        }
      </UserContext.Provider>

    </div>
  )
}
