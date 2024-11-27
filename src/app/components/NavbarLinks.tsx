import React from 'react'
import { NavlinkProps } from '../../../types/Types'
import Link from 'next/link'

function NavbarLinks(props:NavlinkProps) {
  return (
    <div>
        <Link href={props.href}>{props.title}</Link>
    </div>
  )
}

export default NavbarLinks