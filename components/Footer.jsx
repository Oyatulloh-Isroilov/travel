import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants/index"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="flex justify-center mb-24">
      <div className="p-4 max-w-screen-xl flex flex-col gap-14">
        <div className="flex flex-col items-center md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 justify-center md:justify-between md:flex-1">
            {FOOTER_LINKS.map(columns => (
              <FooterColumn title={columns.title}>
                <ul className="text-gray-700">
                  {columns.links.map(link => (
                    <li key={link}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map(link => (
                  <Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="text-blue-700">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="text-gray-700">
                  {SOCIALS.links.map(link => (
                    <li key={link}>
                      <Link href="/">
                        <Image src={link} alt="logo" width={24} height={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-200" />
        <p className="text-center text-gray-700">
          2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-lg">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
