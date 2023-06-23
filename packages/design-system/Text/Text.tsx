import React from 'react'

interface ITextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode
}

export default function Text({tag, children, ...props}: ITextProps): React.JSX.Element {
  return (
    <div>Text</div>
  )
}
