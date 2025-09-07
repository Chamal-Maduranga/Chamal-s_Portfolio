'use client'
import React, { useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import SelectTheme from './SelectTheme'
import MobileMenuButton from './MobileMenuButton'

function Header() {
  const [menuShow, setMenuShow] = useState(false)
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 h-[60px] bg-[var(--background)]">

      <Logo />
      <SelectTheme />
      <Nav/>
    </div>
  )
}

export default Header
