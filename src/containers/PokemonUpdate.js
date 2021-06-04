import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { Link, useParams,useHistory } from 'react-router-dom';
import Header from '../components/Header'
import SingleButton from '../components/Button'

import { getPokemonBeUrl } from "../helpers";

import IdolImage from '../assets/images/img-idol-1.png'
import Back from '../assets/images/icon-left-arrow-two.svg'
import Camera from '../assets/images/icon-camera.svg'
import Eye from '../assets/images/eye-show.svg'



const PokemonUpdate = () => {
  const history = useHistory();
  const [files, setFiles] = useState([]);
  const [nickname, setNickName] = useState();
  const [UserId, setUserId] = useState();
  const [PokemonImage, setPokemonImage] = useState();
  const [originName, setoriginName] = useState();
  const [pokemondata, setpokemondata] = useState();
  const { id } = useParams();

  const param = {
      id:id
   };

  const GetMyPokemon =()=>{

 
  {
    
     axios.post(`${getPokemonBeUrl()}/api/PokemonData/GetUserPokemonById/`, param)
   
       .then((res) => {      
         if(res.data.message == 'success'){
        let resultdata = {
            id : res.data.result.id,
            user_id : res.data.result.user_id,
            pokemon_id : res.data.result.pokemon_id,
            pokemon_origin_name : res.data.result.pokemon_origin_name,
            pokemon_nickname : res.data.result.pokemon_nickname,
            pokemon_img :res.data.result.pokemon_img
        }
        setNickName(res.data.result.pokemon_nickname)
        setoriginName(res.data.result.pokemon_origin_name)
        setUserId(res.data.result.user_id)
        setpokemondata(resultdata);
        setPokemonImage(res.data.result.pokemon_img);
        
       }
      })
  }
}

const release = (e) => {
  e.preventDefault();
  let param = {
    "id":parseInt(id),
    "user_id": parseInt(UserId),
    "pokemon_id": "",
    "pokemon_origin_name": originName,
    "pokemon_nickname":  nickname,
    "pokemon_img":PokemonImage
  }


  
  axios.post(`${getPokemonBeUrl()}/api/PokemonData/DeleteUserListPokemonById`, param)
 
     .then((res) => {      
       if(res.data.message == 'success'){
      
       history.push("/profile");
     }
    })

}

  const submit = (e) => {
    e.preventDefault();
    let param = {
      "id":parseInt(id),
      "user_id": parseInt(UserId),
      "pokemon_id": "",
      "pokemon_origin_name": originName,
      "pokemon_nickname":  nickname,
      "pokemon_img":PokemonImage
    }


  
    axios.post(`${getPokemonBeUrl()}/api/PokemonData/UpdateUserPokemon`, param)
   
       .then((res) => {      
         if(res.data.message == 'success'){
        
         history.push("/profile");
       }
      })

  }

  const thumbs = files.map(file => (
    <img
      src={file.preview}
      className="round-image"
      alt="fameo-user"
    />
  ));

  useEffect(()=>{
    window.scroll(0,0)
    GetMyPokemon();
  }, [])

  return (
    <div className="profile-update-wrapper">
    <Header content={{ title: 'My Pokemon', BtnLeftIcon: Back, BtnRightText: '' }} />
      <div className="after-heading-wrapper">
        <div className="container">
          <div className="profile-image-wrapper">
          <img src={PokemonImage} className="fameo-upload" alt="fameo-upload" />
            
          </div>
          <div className="update-form-wrapper">
            <Form>
              <FormGroup>
                <Label for="first-name" className="title-textbox">Pokemon Origin Name</Label>
                <Input type="text" readonly name="origin-name" id="origin-name" className="textbox" placeholder="pokemon origin name"  value={originName}   />
              </FormGroup>
              <FormGroup>
                <Label for="last-name" className="title-textbox">Pokemon NickName</Label>
                <Input type="text" name="nick-name" id="nick-name" className="textbox" placeholder="masukkan nickname pokemonmu"   value={nickname} 
                 onChange={(e) => { setNickName(e.target.value)}
                }
                />
              </FormGroup>
              {/* <div className="button-holder"> */}
              {/* <SingleButton type="button" _onclick={submit} content={{ text: 'Simpan', color: 'pink' }} />
               */}
            {/* <div className="pills-wrapper mx-auto">
              <Link to="/" onClick={release} className="pill pill-yellow">
                <p className="pill-text" style={{color:'black'}}>Release Pokemon</p>
                
              </Link>
              <Link to ="#" onClick={submit} className="pill pill-pink">
                <p className="pill-text">Update Pokemonmu</p>
              
              </Link>
            </div> */}
            {/* </div>  */}

            <p style={{marginTop:"20px"}}>
        
            {/* <div className="row">
              <div className="col-md-6">
              <SingleButton  content={{ text: 'Tangkap Pokemon', color: 'pink' }} /> 
              </div>
              <div className="col-md-6">
              <SingleButton  content={{ text: 'Tangkap Pokemon', color: 'pink' }} /> 
              </div>

            </div> */}
           <p class="tpbutton btn-toolbar text-center">
                    <a class="btn navbar-btn btn-primary" href="#" onClick={submit}>Simpan Pokemon</a>
                  
                    </p>

                    <p class="tpbutton btn-toolbar text-center">
                    <a class="btn navbar-btn btn-danger" href="#" onClick={release}>Release Pokemon</a>
                  
                    </p>
          </p>

          

            </Form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonUpdate