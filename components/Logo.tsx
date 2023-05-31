import React from 'react'
import logo from '../public/logo.svg'
import {Image} from '@chakra-ui/react'
const Logo = () => {

    const imageUrl = logo.src;

  return (
    <Image src={imageUrl} alt="grocery logo" objectFit="contain" />

  )
}

export default Logo