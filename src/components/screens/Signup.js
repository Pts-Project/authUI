import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import sin from '../../sin.jpg'



const Signup = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [mobile, setMobile] = useState("")
    
    const PostData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            return
        }
        if (password !== confirmPassword) {
            M.toast({ html: "Passwords do not match", classes: "#c62828 red darken-3" })
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password,
                confirmPassword,
                mobile
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }else{
                M.toast({html: data.message,classes:"#43a047 green darken-1"}) 
                history.push('/login')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="mycard">
            <div className="card auth-card " style={{ backgroundImage: `url(${sin})`, minWidth: "100%", minHeight: "100%", backgroundPosition: "centre", backgroundSize: "cover" }}>
                <h6 style={{letterSpacing:"2px"}}>SIGNUP</h6><br />
                <h4 style={{letterSpacing:"2px"}}><bold>PLATFORM</bold></h4>

                <div class="input-field col s12" style={{ marginTop: "10%" }}>
                    <input id="text" type="text" class="validate"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label for="text" style={{ textAlign: "center", color: "black" }}>NAME</label>
                    <span class="helper-text" data-error="INVALID EMAIL ADDRESS"  ></span>
                </div>

                <div class="input-field col s12" style={{ marginTop: "5%" }}>
                    <input id="email" type="email" class="validate"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="email" style={{ textAlign: "center", color: "black" }}>EMAIL</label>
                    <span class="helper-text" data-error="INVALID EMAIL ADDRESS"  ></span>
                </div>

                <div class="input-field col s12" style={{ marginTop: "5%" }}>
                    <input id="password" type="password" class="validate"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="password" style={{ textAlign: "center", color: "black" }}>PASSWORD</label>
                    <span class="helper-text" data-error="INVALID EMAIL ADDRESS" style={{ align: "center" }}></span>
                </div>
                <br />
                <div class="input-field col s12">
                    <input id="password" type="password" class="validate"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label for="password" style={{ textAlign: "center", color: "black" }}>CONFIRM PASSWORD</label>
                    <span class="helper-text" style={{ align: "center", color: "red" }}></span>
                </div>

                <div class="input-field col s12" style={{ marginTop: "5%" }}>
                    <input id="text" type="text" class="validate"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <label for="text" style={{ textAlign: "center", color: "black" }}>PHONE</label>
                    <span class="helper-text" data-error="INVALID EMAIL ADDRESS"  ></span>
                </div>

                <button style={{ borderRadius: "50px", marginTop: "100px", marginBottom: "30px",letterSpacing:"2px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit"
                    onClick={() => PostData()}
                >
                    <strong>  SIGN UP</strong>
                </button>


                <p>By creating an account, you agree to our </p>

                <Link to="/signup"> <p style={{ color: "#6CD4CA" }}><strong>Terms and Conditions</strong></p></Link>
                <p>and</p>
                <Link to="/signup"> <p style={{ color: "#6CD4CA" }}><strong>Privacy Policy</strong></p></Link>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}

export default Signup