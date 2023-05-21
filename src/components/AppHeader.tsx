import React from 'react'
import logo from '@/assets/images/logo.svg'

const AppHeader = () => {
  return (
    <header className='app-header'>
      <img src={logo} className='app-logo' alt='logo' />
      <div className='app-title'>
        <p>React + Typescript 보일러 플레이트 코드</p>
      </div>
      <div className='app-subtitle'>
        <p>made by jungwoo lee (jjjjjw910911)</p>
      </div>
    </header>
  )
}

export default AppHeader
