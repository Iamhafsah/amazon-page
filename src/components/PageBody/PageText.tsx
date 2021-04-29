import React from 'react'

interface Props{
    className?: string;
    fontSize?: any;
    color?: string;
}
const PageText:React.FC <Props> = ({className, children}) => {
    return (
       <span className={className}>{children}</span>
    )
}

export default PageText
