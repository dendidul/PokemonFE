import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import Swiper from 'react-id-swiper';
import TaskBar from '../components/TaskBar'
import ProfileData from '../components/ProfileData'
import Header from '../components/Header'
import { Form, FormGroup, Input, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

import { Collapse } from 'reactstrap';
import Total from '../components/Total'
import { getDetailTalent, getOrderList, getFavourite } from '../services/profile';
import Loading from '../components/Loading';
import ProfileCard from '../components/ProfileCard';
import { getCookie ,eraseCookie} from '../helpers'

import { getPokemonBeUrl } from "../helpers";








const Profile = (props) => {
  const history = useHistory();
  const [talents, setTalents] = useState([]);
  const [pokemonlist, setpokemonlist] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen( !isOpen ) & changeimgarrow() ;
  const [activeTab, setActiveTab] = useState('1');
  const [modal, setModal] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [cookieusername] = useState(getCookie("username"));
  const [cookieuserid] = useState(getCookie("userid"));
  // const toggle = () => {
  //   setModal(!modal);
  // }

  function changeimgarrow() {
    var element = document.getElementById("total-arrow-id");
    var elementtwo = document.getElementById("total-collapse-id");
    if ( elementtwo.getAttribute("class") == "collapse show" ){
      element.style.transform = "rotate(0)" ;
    } else {
      element.style.transform = "rotate(180deg)" ;
    }
    
  }

  


  const UserProfileData = {
 
    name: cookieusername,
   
  }

  const Signout = () => {
    eraseCookie('userid');
    eraseCookie('username');
    history.push("/signin/");
  }
 
  const getData = async () => {
    
    let param =
            { user_id : parseInt(cookieuserid) }
            
            axios.post(`${getPokemonBeUrl()}/api/PokemonData/GetListPokemon`, param)
   
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

             setpokemonlist(res.data.result)
             setIsLoading(false)
             
            }
           })   

    
  };
  useEffect(() => {
    window.scroll(0,0)
    //getsearchVideo()
    getData();  
    
   

    if(cookieusername == "")
    {
      history.push("/signin/");
    }
    

 
  }, []);
 
  
  return (
    <div className="section-profile">
      <Header content={{ title: 'Profile Saya', BtnLeftIcon: "", BtnRightIcon: "Simpan" }} />
      <div className="after-heading-wrapper">
        <div className="container px-0"> 
          {/* {<ProfileData content={UserProfileData} icon={talents}/>} */}
          <div className="profile-wrapper">
      <div className="container px-0">
        <div className="profile-data">
          {/* "profile-image-wrapper with-notif" */}
          <div className="profile-image-wrapper">
            <img src="https://i.pinimg.com/564x/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.jpg" className="round-image" alt="ic" />
          </div>
          <div className="user-data-wrapper">
            <p className="user-name"> Hi, {cookieusername}</p>
            <p>
            <a class="btn navbar-btn btn-danger" href="#" onClick={Signout}>Sign Out</a>
            </p>
          </div>
        </div>
      </div>
  
    </div>
            
        </div>
        <p className="name" style={{color:'white'}}>My List Pokemon</p>
        <div className="container px-0">
        <TabContent className="results-holder" activeTab={activeTab}>
            {isLoading && <div className="height-100"><Loading/></div>}
            <TabPane className="tab-content -m-1" tabId="1">
              {!!pokemonlist &&
                pokemonlist.map((item, i) => (
                  <div className="w-50 d-inline-block p-1" key={i}>
                    <ProfileCard content={item}/>
                  </div>
                ))
              }
            </TabPane>
           
          </TabContent>
        </div>
      </div>
      <TaskBar />
    </div>
  )
}

export default Profile