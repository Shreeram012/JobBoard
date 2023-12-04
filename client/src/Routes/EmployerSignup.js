import { useState } from "react"
import { useEmployerSignup } from "../hooks/useEmployerSignup"

const EmployerSignup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useEmployerSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(username, password)
    await signup(username,password)
  }

  return (
    <div  className="bg-dom d-flex justify-content-center p-5">
      <div className="mw-25 bg-sub shadow p-5 m-5 rounded">
      <div>
        <input type="radio" className="btn-check" id='candidate' name="user-type" onClick={()=>{window.location.replace('/candidate/signup')}} />
        <label className="btn" htmlFor="candidate" >Candidate</label>
        <input type="radio" className="btn-check" id='employer' name="user-type" checked/>
        <label className="btn" htmlFor="employer" >Employer</label>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="py-3"><h3>Sign Up</h3></div>

      <div className="py-3">
      <input 
        className="form-control"
        placeholder="username"
        type="text" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />
      </div>

      <div className="py-3">
      <input 
        className="form-control"
        placeholder="password"
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      </div>
      <div className="text-danger fw-bold">{error && <div className="error">{error}</div>}</div>


      <div className="py-3 d-grid"><button className='btn bg-dom' disabled={isLoading}>Sign up</button></div>
    </form>
      </div>
    </div>

  )
}

export default EmployerSignup