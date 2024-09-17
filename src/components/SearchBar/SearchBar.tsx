import { Field, Form, Formik } from "formik"
import css from "./SearchBar.module.css"
import toast, { Toaster } from "react-hot-toast"
import { FcSearch } from "react-icons/fc";
import { OnSubmitinterface } from "../../types";

// const initial_Values = {query: ""}
const notifyEmpty =()=> toast("text must be entered to search for images")

const SearchBar = ({onSubmit}:OnSubmitinterface) => {

 
  return (
    <Formik 
    initialValues={{query: ""}} 
    onSubmit={(values, actions)=>{
    if(values.query.trim()==="") {
      notifyEmpty()
    } 
    else{
      onSubmit(values.query)
      
    }
    actions.resetForm()
  }}>
      <header className={css.container}>
  <Form className={css.form}>
    <Field className={css.field}
      name="query"
      type="text"
      placeholder="Search images and photos"
    />
    <button 
    className={css.button} 
    type="submit"><FcSearch />
    </button>
    <Toaster  toastOptions={{style: {background: "red", color: "white"}}}/>
  </Form>
</header>
    </Formik>
  )
}

export default SearchBar