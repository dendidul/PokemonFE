import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper';
import TaskBar from '../components/TaskBar'
import ProfileData from '../components/ProfileData'
import Header from '../components/Header'
import { Form, FormGroup, Input, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
// import CardSwiperProfile from "../components/CardSwiperProfile"
// import CardSwiper from "../components/CardSwiper"
import { Collapse } from 'reactstrap';
import Total from '../components/Total'
import { getDetailTalent, getOrderList, getFavourite } from '../services/profile';
import Loading from '../components/Loading';
import ProfileCard from '../components/ProfileCard';

import Burger from '../assets/images/icon-burger-menu.svg'
import Settings from '../assets/images/icon-settings.svg'
import Boxone from '../assets/images/gift-box.svg'
import Boxtwo from '../assets/images/main-box.svg'
import Boxthree from '../assets/images/order-box.svg'
import Boxfour from '../assets/images/favorit-box.svg'


const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}`;

const gqlVariables = {
  limit: 4,
  offset: 1,
};

const UserProfileData = {
  type: 'user',
  icon: require('../assets/images/img-idol-1.png'),
  name: "John Doe",
  inbox: 2,
  notif: true
}

const contentSwiperData = {
  headingData: {
    heading: "Order Saya",
    headingColor: "white",
    linkName: "Lihat Semua",
    url: "/orderList",
    // headingLetters: 'uppercase',
  },

  isNormalCard: true,
};


const contentSwiperData2 = {
  headingData: {
    heading: "Favorit Saya",
    headingColor: "white",
    linkName: "Lihat Semua",
    url: "/"
  },
  isNormalCard: true,

}

const Profile = (props) => {
  const [talents, setTalents] = useState([]);
  const [orders, setOrders] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen( !isOpen ) & changeimgarrow() ;
  const [activeTab, setActiveTab] = useState('1');
  const [modal, setModal] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const getsearchVideo = () => {
    // let params = {
    //   limitall: 20
    // }
    // fectData(params)

    fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: 'POST',
    })
      .then((res) => res.json()
      )
      
      .then((res) => {
          setSearchResults(res.data.pokemons.results)
          setIsLoading(false)
      // console.log(res)
         //setSearchResults(res.data.pokemons.results)
      })
     
        .catch(err => {
          // setError(true);
          console.log(err);
        });

  //   fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
  //   credentials: 'omit',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     query: gqlQuery,
  //     variables: gqlVariables,
  //   }),
  //   method: 'POST',
  // })
  //   .then((res) => res.json()
  //   )
  //    .then((res) => 
    
  //    setSearchResults(res.data.pokemons.results));
  
  }

  const getData = async () => {
      
    setError(false);
    let params = {
      userid: 622
    }
    getDetailTalent(params)
      .then(resp => {
        setTalents(resp.UserModel);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      }); 

      params = {
        UserId: 622
      }
      getOrderList(params) 
      .then(resp => {
        setOrders(resp);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      }); 

      getFavourite(params) 
      .then(resp => {
        setFavourite(resp);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      }); 
  };
  useEffect(() => {
    window.scroll(0,0)
    getsearchVideo()
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(favourite);
  
  return (
    <div className="section-profile">
      <Header content={{ title: 'Profile Saya', BtnLeftIcon: "", BtnRightIcon: "Simpan" }} />
      <div className="after-heading-wrapper">
        <div className="container px-0"> 
          {<ProfileData content={UserProfileData} icon={talents}/>}
    
            {/* {!orders && <Loading/> }
            { orders && <div className="section-gift mt-4"><CardSwiperProfile contentSwiper={contentSwiperData} contents={orders} /> 
            </div>}
            {!orders && <Loading/> }
            {favourite && <div className="section-favorite mt-4 pb-3">
              <CardSwiper contentSwiper={contentSwiperData2} dataTalent={favourite}/>
            </div>} */}
        </div>
        <p className="name" style={{color:'white'}}>My List Pokemon</p>
        <div className="container px-0">
        <TabContent className="results-holder" activeTab={activeTab}>
            {isLoading && <div className="height-100"><Loading/></div>}
            <TabPane className="tab-content -m-1" tabId="1">
              {!!searchResults &&
                searchResults.map((item, i) => (
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