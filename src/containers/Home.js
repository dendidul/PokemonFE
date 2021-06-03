import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'

// Components
import Header from '../components/Header'
import TaskBar from '../components/TaskBar'

import Toggler from '../assets/images/icon-toggler.svg'
import Sort from '../assets/images/icon-sort.svg';
import { searchVideo } from '../services/search';
import NormalCard from '../components/NormalCard';
import Loading from '../components/Loading'



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
  limit: 150,
  offset: 1,
};


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = event => {
    setSearchTerm(event.target.value);
    let params = {
      type: 1,
      talentname: event.target.value,
      limitvideo: 20
    }
    fectData(params)
  };

  const fectData = (params) => {
    searchVideo(params).then((resp) => {
      setSearchResults(resp)
      setIsLoading(false)
    })
      .catch(err => {
        // setError(true);
        console.log(err);
      });
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

  useEffect(() => {
    window.scroll(0,0)
    getsearchVideo()
  }, []);

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <Header content={{ title: 'Cari Pokemonmu', BtnLeftIcon: Toggler, BtnRightIcon: Sort }} />
      <div className="search">
        <div className="container">
          {/* <Form className="search-bar"> */}
            <div className="search-bar">
            <FormGroup>
              <Input
                type="inputs"
                name="search"
                id="exampleSearch"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Cari berdasarkan nama pokemon"
              />
              <span className="search-icon" />
            </FormGroup>
              </div>
         
          <TabContent className="results-holder" activeTab={activeTab}>
            {isLoading && <div className="height-100"><Loading/></div>}
            <TabPane className="tab-content -m-1" tabId="1">
              {!!searchResults &&
                searchResults.map((item, i) => (
                  <div className="w-50 d-inline-block p-1" key={i}>
                    <NormalCard content={item}/>
                  </div>
                ))
              }
            </TabPane>
           
          </TabContent>
        </div>
        <TaskBar active={'search'}/>
      </div>
    </>
  )
}

export default Search
