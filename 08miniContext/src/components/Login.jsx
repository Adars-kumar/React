import { useState, useContext } from "react"
import UserContext from "../context/UserContext"


function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault() // To prevent random submit.  
        setUser({userName, password})
    }

  return (
    <div>
        <h2 >Login</h2>

        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}  placeholder="username"  />
            <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="password"  />
            <br />
            <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login