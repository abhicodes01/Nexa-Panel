'use client'

import React, { useState } from 'react'
import { Nav } from './ui/nav'
import { Button } from './ui/button'

import dynamic from "next/dynamic";




type Props = {}

import {
    useWindowWidth,
  } from '@react-hook/window-size'

import {
    ChevronRight,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    UsersRound,
  } from "lucide-react"

function SideNavbar({}: Props) {
    const [isCollapsed, setisCollapsed] = useState(false)

    const width = useWindowWidth();

    const mobilewidth = width < 768;

    function tooglesidebar() {
        setisCollapsed(!isCollapsed)
    }
  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'>
        {!mobilewidth && (
            <div className=' absolute top-7 right-[-20px]' >
            <Button onClick={tooglesidebar} className='rounded-full p-2'>
                <ChevronRight/>
            </Button>
        </div>
        )}
        <Nav
            isCollapsed={mobilewidth ? true : isCollapsed}
            links={[
              {
                title: "Dashboard",
                icon: LayoutDashboard,
                variant: "default",
                href: "/"
              },
              {
                title: "Users",
                icon: UsersRound,
                variant: "ghost",
                href:"/Users"
              },
              {
                title: "Orders",
                icon: ShoppingCart,
                variant: "ghost",
                href:"/Orders"
              },
              {
                title: "Settings",
                icon: Settings,
                variant: "ghost",
                href:"/Settings"
              },
            ]}
          />
    </div>
  )
}

export default dynamic (() => Promise.resolve(SideNavbar), {ssr: false})