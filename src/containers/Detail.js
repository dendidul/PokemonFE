import React, { useState, useEffect } from 'react';
 import axios from 'axios'
 import { getPokemonBeUrl } from "../helpers";
// import Swiper from 'react-id-swiper';
import Header from '../components/Header'
import { Link, useParams,useHistory } from 'react-router-dom';
import PlayButton from '../assets/images/play.svg'
import Heart from '../assets/images/heart.png'
import Share from '../assets/images/share.png'
import Question from '../assets/images/icon-question-msg.svg'
import LeftArrow from '../assets/images/icon-left-arrow.svg'

import TaskBar from '../components/TaskBar'

import Loading from '../components/Loading';
import SingleButton from '../components/Button'
import { getCookie } from '../helpers'

const contentSwiperData = {
  headingData: {
    heading: "Video Terbaru",
    headingColor: "white",
    linkName: "Lihat Semua",
    url: "/",
  },
}



const contentSwiperData2 = {
  headingData: {
    heading: "Video Reaksi",
    headingColor: "white",
    linkName: "Lihat Semua",
    url: "/"
  },
}

const questionHeadingData = {
  headingData: {
    heading: "Partanyaan Fan Terbaru",
    headingColor: "white",
    linkName: "Lihat Semua",
    url: "/"
  },
}







const Detail = (props) => {
  const history = useHistory();
  const { pokemonname } = useParams();
  const [pokemonImage, setpokemonImage] = useState();
 
  const gqlQuery = `query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }`;

  const gqlVariables = {
   name: pokemonname
  };

  const [pokemondata, setpokemondata] = useState([]);
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState(getCookie("userid"));
  const [pokemonId, setPokemonId] = useState("");
 
  
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const submit = (e) => {
    


    e.preventDefault();

    const randomInt = randomIntFromInterval(1, 2);

    if(randomInt == 1)
    {
      var r = window.confirm("Pokemonmu berhasil tertangkap yuk simpan pokemonmu");
      if (r == true) {
       let param = {
        "user_id": parseInt(userId),
        "pokemon_id": pokemonId || "",
        "pokemon_origin_name": pokemonname,
        "pokemon_nickname":  "",
        "pokemon_img":pokemonImage
       
      }
      
      axios.post(`${getPokemonBeUrl()}/api/PokemonData/CreateUserPokemon/`, param)
     
         .then((res) => {      
           if(res.data.message == 'success'){
           
          history.push("/pokemonUpdate/"+res.data.result.id);
         }
        })
      } 

     
    }
    else
    {
      alert('gagal');
    }

  


    
  }


 

  const { talentId } = useParams();


  const getPokemon = async () => {
    // setError(false);
    let params = {
      name: pokemonname
    }
  

    fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: gqlQuery,
      variables: params,
    }),
    method: 'POST',
  })
    .then((res) => res.json()
    )
    .then((res) => {
      
     
       var pokemondata = res.data.pokemon;

       let pokemontype = {
        name:pokemondata.name  ,
        type:"type : "+ pokemondata.types[0].type.name,
        height:"height : 27",
        weight:"weight : 16lbs",
        battles:"20",
        LinkImg:pokemondata.sprites.front_default
      }
      setpokemondata(pokemontype);
      setpokemonImage(pokemondata.sprites.front_default)

    
  })
   
   
  };

  useEffect(() => {
    window.scroll(0,0)
    getPokemon();
 
  }, []);

  return (
    <div className="section-profile">
    <Header content={{ title: '', BtnLeftIcon: "", BtnRightIcon: "Simpan" }} />
    <div className="after-heading-wrapper">
    <div className="container px-0"> 
      <div className="detail-wrapper">
      <div className="container px-0">
        <div className="idol-banner">
          {!pokemondata.LinkImg && <Loading />}
        
          <img src={pokemondata.LinkImg} className="idol-image" alt="fameo-idol" />
        </div>
      </div>
      <div className="container">
        
        <h2 className="idol-name text-center text-white">{pokemondata.name}</h2>
        <div className="row idol-category">
          <div className="badge-list mx-auto text-white">
            <span className="badge badge-one">{pokemondata.type} &nbsp; | </span>
            <span className="badge badge-two">{pokemondata.height}&nbsp; | </span>
            <span className="badge badge-three">{pokemondata.weight}</span>
          </div>
        </div>
       
      </div>
      <div className="container">
        <div className="idol-message">
          <p className="detail-paragraph heading text-white">
            {pokemondata.type}
          </p>
          <p style={{marginTop:"20px"}}>
          {/* <SingleButton  content={{ text: 'Tangkap Pokemon', color: 'pink' }} /> */}
          <div className="row pills-section">
          <div className="pills-wrapper mx-auto">
            <Link to="/" className="pill pill-yellow">
              <p className="pill-text" style={{color:'black'}}>Kembali</p>
              
            </Link>
            <Link to ="#" onClick={submit} className="pill pill-pink">
              <p className="pill-text">Tangkap Pokemonmu</p>
             
            </Link>
          </div>
        </div>
          </p>
        </div>
      </div>


    

     
    </div>
      </div>
    </div>
    <TaskBar />
  </div>

  )
}

export default Detail