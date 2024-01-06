'use client'

import { useState, useEffect } from 'react'

import { HeaderSection } from './styles'

export function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      setIsHeaderVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 200,
      )
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <HeaderSection
      style={{
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <h1>SCRAPBOOK</h1>
        <span>YOUR TODO LIST</span>
      </div>
    </HeaderSection>
  )
}

export default Header
