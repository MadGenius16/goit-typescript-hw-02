import css from "./ErrorMessage.module.css"

const ErrorMessage = () => {
  return (
    <p className={css.textError}>Some error occured! Please, try again later.</p>
  )
}

export default ErrorMessage