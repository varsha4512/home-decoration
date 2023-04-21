import React from 'react'

const Signup = () => {
  const [form, setForm] = React.useState({});
  const handleForm = (e) => {
    console.log(e.target.value)
    setForm({
      ...form, [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    console.log(form)
    e.preventDefault();
    const res = await fetch('http://localhost:8080/Signup', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    console.log(data)
  }

  return (
    <>

      
 <div className='container'>
        <div className="subContainer">
          <div className='login'>
            <p className='text-welcome'>Welcome Back!</p>
            <button className="btn btn-lg btn-info">login</button>

          </div>


          <div className="registrationCon">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit} className="formContainer">

              <div className='regContent'>
                <div>
                  <input className="form-control" type="text" placeholder="first name" name="firstname" required={true} maxLength={20} onChange={handleForm} />
                </div>
                <div>
                  <input className="form-control" type="text" placeholder="last name" name="lastname" required={true} maxLength={15} onChange={handleForm} />

                </div>
                <div>
                  <input className="form-control" type="email" placeholder="email" name="email" required={true} onChange={handleForm} />
                </div>
                <div>
                  <input className="form-control" type="password" placeholder="Password" name="password" required={true} minLength={6} maxLength={15} onChange={handleForm} />
                </div>
                <button className="btn btn-lg btn-info">Sign up</button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default Signup