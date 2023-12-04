import { useState } from "react"
import { useEmployerLogin } from "../hooks/useEmployerLogin"
import { useNavigate } from "react-router-dom"

const EmployerLogin = () => {
  const navigate=useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login,error,isLoading} =useEmployerLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await login(username,password)
    setUsername('')
    setPassword('')
  }

  return (
    <div className="bg-dom d-flex justify-content-center p-5">
      <div className="mw-25 bg-sub shadow p-5 m-5 rounded">
      <div>
        <input type="radio" className="btn-check" id='candidate' name="user-type"/>
        <label className="btn" htmlFor="candidate" onClick={()=>{window.location.replace('/candidate/login')}}>Candidate</label>
        <input type="radio" className="btn-check" id='employer' name="user-type" checked onChange={()=>{}}/>
        <label className="btn" htmlFor="employer" >Employer</label>
      </div>
      <form onSubmit={handleSubmit} className="">
        <div className="py-3"><h3>Log in</h3></div>
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
        <div className="py-3 d-grid"><button disabled={isLoading} className="btn bg-dom">Log in</button></div>
        <p className="py-3">Not registered yet?<a href="/employer/signup"> sign-up</a></p>
    </form></div>

    </div>
  )
}

export default EmployerLogin