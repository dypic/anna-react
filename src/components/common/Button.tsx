import React from "react"

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  submit?: string
  addclass?: string
  children: React.ReactNode
}

const Button: React.FC<IProps> = ({ addclass, submit, ...props }) => {
  return <button type={submit ? "submit" : "button"} className={`btn-s ${addclass && addclass}`} {...props} />
}
export default Button
