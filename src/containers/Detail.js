import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import Swiper from 'react-id-swiper';
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
// import IdolImage from '../assets/images/img-idol-1.png'
import PlayButton from '../assets/images/play.svg'
import Heart from '../assets/images/heart.png'
import Share from '../assets/images/share.png'
import Question from '../assets/images/icon-question-msg.svg'
import LeftArrow from '../assets/images/icon-left-arrow.svg'

import TaskBar from '../components/TaskBar'

import Loading from '../components/Loading';
import SingleButton from '../components/Button'

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

  const { pokemonname } = useParams();
 
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

  const [talents, setTalents] = useState([]);
  const [error, setError] = useState(false);

  // const {
  //   buttonLabel,
  //   className
  // } = props;
  
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }

  function myFunction() {
    var element = document.getElementById("taskbar");
    if (element.getAttribute("class") === "taskbar w-100") {
      element.classList.add("hidden");
    } else {
      element.classList.remove("hidden");
      stopvideo()
    }
  }

  function askbtnshow() {
    var element = document.getElementById("custom-ask-on-video");
    if (element.getAttribute("class") === "custom-ask-on-video-hidden") {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }

  }

  function playvideo() {
    var element = document.getElementById("playpause_video_id");
    var videoku = document.getElementById("video");
    element.classList.add("hidden");
    videoku.play();

    videoku.ontimeupdate = function () {
      var percentage = (videoku.currentTime / videoku.duration) * 100;
      document.getElementById("custom-seekbar-span").style.width = percentage + "%";
      document.getElementById("custom-seekbar-div").style.left = percentage + "%";
    };
  }

  function stopvideo() {
    var element = document.getElementById("playpause_video_id");
    var videoku = document.getElementById("video");
    element.classList.remove("hidden");
    videoku.pause();
  }

  const { talentId } = useParams();


  const getTalents = async () => {
    // setError(false);
    let params = {
      name: pokemonname
    }
    // getDetailTalent(params)
    //   .then(resp => {
    //     setTalents(resp);
    //   })

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
      
       console.log(res.data.pokemon)
       var pokemondata = res.data.pokemon;

       let pokemontype = {
        name:pokemondata.name  ,
        type:"type : "+ pokemondata.types[0].type.name,
        height:"height : 27",
        weight:"weight : 16lbs",
        battles:"20",
       // LinkImg:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
       LinkImg:pokemondata.sprites.front_default
      }
      setTalents(pokemontype);

     //setSearchResults(res.data.pokemons.results)
  })
   // .then((res) => setTalents(pokemontype));

    // let pokemontype = {
    //   name:"Pokemon",
    //   type:"grass",
    //   height:"height : 27",
    //   weight:"weight : 16lbs",
    //   battles:"20",
    //   LinkImg:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    // }

   
  };

  useEffect(() => {
    window.scroll(0,0)
    getTalents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="section-profile">
    <Header content={{ title: '', BtnLeftIcon: "", BtnRightIcon: "Simpan" }} />
    <div className="after-heading-wrapper">
    <div className="container px-0"> 
      <div className="detail-wrapper">
      <div className="container px-0">
        <div className="idol-banner">
          {!talents.LinkImg && <Loading />}
        
          <img src={talents.LinkImg} className="idol-image" alt="fameo-idol" />
        </div>
      </div>
      <div className="container">
        
        <h2 className="idol-name text-center text-white">{talents.name}</h2>
        <div className="row idol-category">
          <div className="badge-list mx-auto text-white">
            <span className="badge badge-one">{talents.type} &nbsp; | </span>
            <span className="badge badge-two">{talents.height}&nbsp; | </span>
            <span className="badge badge-three">{talents.weight}</span>
          </div>
        </div>
       
      </div>
      <div className="container">
        <div className="idol-message">
          <p className="detail-paragraph heading text-white">
            {talents.type}
          </p>
          <p style={{marginTop:"20px"}}>
          {/* <SingleButton  content={{ text: 'Tangkap Pokemon', color: 'pink' }} /> */}
          <div className="row pills-section">
          <div className="pills-wrapper mx-auto">
            <Link to="/" className="pill pill-yellow">
              <p className="pill-text" style={{color:'black'}}>Kembali</p>
              {/* <img src={Question} className="question-tick" alt="question" /> */}
              <p className="pill-text font-weight-bold">{talents.FirstName}</p>
            </Link>
            <Link to={`/order-personal/`+talentId} className="pill pill-pink">
              <p className="pill-text">Tangkap Pokemonmu</p>
              <p className="pill-text font-weight-bold">{talents.PriceAmount}</p>
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