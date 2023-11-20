import React, { useEffect, useState } from 'react'

function Form(){
  const initialValues = {username:"", email:"", password:"", cpassword:"", contact:""}

  const [formValues, setFormValues] = useState(initialValues) 
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)

  function handleChange(e){
    const {name,value} = e.target;
    setFormValues({...formValues, [name]:value})
    console.log(formValues);
  }

  function handleSubmit(e){
    e.preventDefault()
     setFormErrors(validateForm(formValues))
     setIsSubmit(true)
  }

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
    }

  },[formErrors])

  function validateForm(values){
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.username){
      errors.username = "Username is required"
    }

    if(!values.email){
      errors.email = "Email is required!"
    }else if(!regex.test(values.email)){
      errors.email = "** Email is not valid"
    }

    if(!values.password){
      errors.password = "Password is required!"
    }else if(values.password.length <= 3){
      errors.password = " ** Password is too short"
    }

    if(values.password !== values.cpassword){
      errors.cpassword = " ** Password doesn't match"
    }

    if(values.contact.length !== 10){
      errors.contact = " ** Contact must be 10 digit"
    }

    return errors;
  }

return(
  <div>
    {Object.keys(formErrors).length === 0 && isSubmit ? <div>SignUp Successfully!!</div> : <pre>{JSON.stringify(formValues,undefined, 2)}</pre>}
    
    <h1>Form Validation</h1>
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Username:</label>
        <input type="text" placeholder="Username" name="username" value={formValues.username} onChange={handleChange} /><br /><br />
      </div>
      <p>{formErrors.username}</p>

      <div>
        <label htmlFor="">Email:</label>
        <input type="email" placeholder="Email" name="email" value={formValues.email} onChange={handleChange} /><br /><br />
      </div>
      <p>{formErrors.email}</p>


      <div>
        <label htmlFor="">Password:</label>
        <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={handleChange} /><br /><br />
      <p>{formErrors.password}</p>
      </div>

      <div>
        <label htmlFor="">Confirm Password:</label>
        <input type="password" placeholder=" Confirm Password" name="cpassword" value={formValues.cpassword} onChange={handleChange} /><br /><br />     
      </div>
      <p>{formErrors.cpassword}</p>

      <div>
        <label htmlFor="">Contact No:</label>
        <input type="number" placeholder=" Contact Number" name="contact" value={formValues.contact} onChange={handleChange} /><br /><br />     
      </div>
      <p>{formErrors.contact}</p>


      <button>Submit</button>
    </form>
  </div>
)
}

export default Form;
