import React from 'react'

interface Props{
    className?: string;
    flexDirection?: string;
    alignItems?: string;
}
const NavItemWrapper:React.FC <Props> = ({className, children}) => {
    return (
       <div className={className}>{children}</div>
    )
}

export default NavItemWrapper
