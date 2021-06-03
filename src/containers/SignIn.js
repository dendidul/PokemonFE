import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormGroup, Label, Input } from 'reactstrap';

import SingleButton from '../components/Button'

 import { login } from "../services/signup";
import { setCookie } from "../helpers";

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    // let params = {
    //   UserName : email,
		//   Password : password
    // }
    // login(params)
    // .then(resp => {
    //   if(resp.User === "Valid"){
    //     setCookie('UserId', resp.UserId, 1)
    //     setCookie('RoleId', resp.RoleId, 1)
    //     history.push("/");
    //   }
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    history.push("/profile");
  }

  useEffect(()=>{
    window.scroll(0,0)
  }, [])
  return (
    <div className="login-form sign-in overlay-image">
      <div className="container">
        <div className="content-wrapper">
          <h2 className="title">Selamat Datang di Dunia Pokemon!</h2>
          <p><iframe src="https://giphy.com/embed/kuWN0iF9BLQKk" width="84" height="64" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pokemon-running-kuWN0iF9BLQKk"></a></p></p>
          <p>Masuk ke dalam akunmu.</p>
          <div className="icon-holder">
           
          </div>
        
          <div>
            <FormGroup>
            
                <Input type="text" name="number" id="exampleNumber" placeholder="Masukkan Username" onChange={e => setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <div className="password-holder">
                <Input type="password" name="password" id="examplePassword" placeholder="Masukkan Password" onChange={e => setPassword(e.target.value)}/>
                <span className="eye-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18.467" height="10" viewBox="0 0 18.467 10">
                    <g id="eye" transform="translate(0 -104.721)">
                      <g id="Group_822" data-name="Group 822" transform="translate(0 104.721)">
                        <path id="Path_457" data-name="Path 457" d="M18.15,109.32a13.791,13.791,0,0,0-2.466-2.3,10.973,10.973,0,0,0-6.45-2.3,10.973,10.973,0,0,0-6.45,2.3,13.793,13.793,0,0,0-2.466,2.3l-.317.4.317.4a13.794,13.794,0,0,0,2.466,2.3,10.973,10.973,0,0,0,6.45,2.3,10.973,10.973,0,0,0,6.45-2.3,13.791,13.791,0,0,0,2.466-2.3l.317-.4Zm-8.916,3.9a3.5,3.5,0,0,1-3.392-4.379l-.8-.135a4.308,4.308,0,0,0,1.263,4.172A11.351,11.351,0,0,1,3.579,111.4a13.59,13.59,0,0,1-1.893-1.677,13.593,13.593,0,0,1,1.893-1.677,11.353,11.353,0,0,1,2.726-1.484l.536.6a3.5,3.5,0,1,1,2.392,6.059Zm5.655-1.826a11.353,11.353,0,0,1-2.726,1.484,4.3,4.3,0,0,0,0-6.322,11.354,11.354,0,0,1,2.726,1.484,13.592,13.592,0,0,1,1.893,1.677A13.585,13.585,0,0,1,14.889,111.4Z" transform="translate(0 -104.721)" fill="#a8abbb" />
                        <path id="Path_458" data-name="Path 458" d="M170.855,172.405a2.334,2.334,0,1,0,.615-1l1.149,1.3Z" transform="translate(-163.851 -168.086)" fill="#a8abbb" />
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </FormGroup>
           
            <div className="button-holder">
              <SingleButton type="submit" _onclick={submit} content={{ text: 'MASUK KE AKUN SAYA', color: 'pink' }} />
            </div>
           
          </div>
        </div>

        <div className="row">
          
          <div className="col-md-12">
            <p>
              <u> Available User</u>
            
            </p>
           
          </div>
      
            
          
        </div>
       
        <div className="row">
          
          <div className="col-md-12">
            <p>
              UserName : momon
            </p>
            <p>
              Password : momon
            </p>
          </div>
      
            
          
        </div>
      </div>
    </div>
  )
}

export default SignIn
