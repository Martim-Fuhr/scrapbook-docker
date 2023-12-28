'use client'

import Link from 'next/link'
import { SocialMedias } from './styles'

import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const SOCIAL_MEDIA = {
  LINKEDIN: 'https://www.linkedin.com/company/facilita-system/',
  SITE_SYSTEM: 'https://facilitasystem.com.br/',
  WPP: 'https://api.whatsapp.com/send/?phone=555131811858&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site.&type=phone_number&app_absent=0',
}

export function Contact() {
  return (
    <SocialMedias>
      <div className="flex flex-wrap justify-between max-w-md w-full">
        <Link href={SOCIAL_MEDIA.LINKEDIN} className="linkedin" target="_blank">
          <FaLinkedinIn size={38} />
        </Link>

        <Link
          href={SOCIAL_MEDIA.SITE_SYSTEM}
          className="site-system"
          target="_blank"
        >
          <TbWorldWww size={38} />
        </Link>

        <Link href={SOCIAL_MEDIA.WPP} className="wpp">
          <FaWhatsapp size={38} />
        </Link>
      </div>
    </SocialMedias>
  )
}

export default Contact
