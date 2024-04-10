import { title } from 'process';
import React from 'react'

type Props = {
    activeItem: number;
}

const navItems = [
    {
        title: "Inicio",
        href: "/",
    },

    {
        title: "Quienes Somos",
        href: "/nosotros",
    },

    {
        title: "Tu Cuenta",
        href: "/cuenta",
    },
    {
        title: "Marketplace",
        href: "/marketplace",
    },
    {
        title: "Contacto",
        href: "/contacto",
    },
    {
        title: "Legal",
        href: "/politica-privacidad",
    },

]

const Navigation = ({activeItem}: Props) => {
  return <div className="block md:flex">
    {
        navItems.map((item, index) => (
            <div key={item.title}>
                <h5 className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text[18px] font-[500] font-inter ${activeItem === index &&'text-[#6dff4d]'}`}>
                    {item.title}
                </h5>
            </div>
        ))
    }
  </div>
 
}

export default Navigation