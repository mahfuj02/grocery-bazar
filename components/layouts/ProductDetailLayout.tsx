import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode;
}
const ProductDetailLayout = ({children}:Props) => {
  return (
    <>
        {children}
    </>
  )
}

export default ProductDetailLayout