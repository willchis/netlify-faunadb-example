import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
import logo from '../../assets/logo.svg'
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' />
            <div className='app-title-text'>
              <h1 className='app-title'>Netlify + Fauna DB</h1>
              <p className='app-intro'>
                FaunaDB & Netlify
              </p>
            </div>
          </div>
        </div>
        <div className='deploy-button-wrapper'>
          <div className='view-src'>
            <a
              rel='noopener noreferrer'
              href='#'>
              Create a new sharezie
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
