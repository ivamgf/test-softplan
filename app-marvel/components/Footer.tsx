import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

function Footer() {
    return (
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Logo>
            <span>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </Logo>          
        </a>
    )
}

const Logo = styled.span`
    height: 1em;
    margin-left: 0.5rem;
`

export default Footer;
