const Button = (props) => {
  return (
    <button
      type={props.submit ? "submit" : "button"}
      className={`btn-s ${
        props.seconbtn1 ? "secon-btn1" : props.seconbtn2 ? "secon-btn2" : props.prybtn1 ? "pry-btn1" : ""
      }`}
      {...props}
    />
  )
}
export default Button
