const Button = (props) => {
  return (
    <button
      type={props.submit ? "submit" : "button"}
      className={`btn-s ${props.addclass && props.addclass}`}
      {...props}
    />
  )
}
export default Button
