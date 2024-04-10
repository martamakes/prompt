'use client'
import React from 'react'
import Header from "@/components/Header";


type Props = {
  activeItem: number;
}

const Page = (props: Props) => {

  return(
    <div>
      <Header activeItem={0} />
    </div>
  )   
}

export default Page