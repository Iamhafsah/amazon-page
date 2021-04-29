import React from 'react'

interface Props{
    className?: string;
    flexDirection?: string;
    alignItems?: string;
    maxWidth?: string;
    margin?: string;
}
const PageItemWrapper:React.FC <Props> = ({className, children}) => {
    return (
       <div className={className}>{children}</div>
    )
}

export default PageItemWrapper
