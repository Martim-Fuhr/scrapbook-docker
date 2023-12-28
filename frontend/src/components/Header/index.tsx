'use client'

import { useState, useEffect } from 'react'

import { HeaderSection } from './styles'
import { useBreakpoints } from '@/hooks/use-breakpoints'
import { IMAGES } from '@/images'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const LINK_FACILITA = 'https://facilitasystem.com.br/'
  const { isMobile } = useBreakpoints()

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
      className="bg-sky-800"
      style={{
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Link href={LINK_FACILITA} target="_blank">
        <Image
          src={IMAGES.HEADER_IMAGE}
          priority={true}
          width={isMobile ? 350 : 400}
          height={80}
          alt="logo facilita System"
        />
      </Link>
    </HeaderSection>
  )
}

export default Header
