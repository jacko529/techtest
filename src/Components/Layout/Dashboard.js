import React, { Component } from 'react'

import PokemonList from '../pokemon/PokemonList';
import '../../App.css';

import styled from 'styled-components';
import { Link } from 'react-router-dom';



const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

var title = {
  color: 'white',
  marginBottom: 2,
  marginTop: 2,
};


export default class Dashboard extends Component {

  removeAll()
{
    localStorage.clear('contacts');
    window.location.reload(); 

}

renderUserMessage(){
  var namePokemon = localStorage.getItem('contacts');

  if (namePokemon != null) {
    var namePokemon = localStorage.getItem('contacts');

    var res = namePokemon.split(",");

    const unique_numbers = Array.from(new Set(res));

    const last = unique_numbers.slice(1);


    return (
      
      last.map(function(last, indexs){

      return   <StyledLink key={ indexs } className="myPokemon " to={`pokemon/${last}`}>
      <li className="list" stylekey={ indexs }>{last}</li>
</StyledLink>
    })


    );

    

       } else {
    return (
      <h2 style={title}>Hey man! Add some pokemon</h2>
    );
  }
}



  render() {
    return (
      <div className="row row-offcanvas row-offcanvas-left">
              <div  className="col-md-3 col-lg-2 sidebar-offcanvas bg-dark pl-0 text-center" id="sidebar" role="navigation">
           <p style={title}>My pokemon</p>
            <button
            onClick={() => this.removeAll()}
          >
            Clear all
          </button>
            <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3 ">
            { this.renderUserMessage() }

            </ul>
        </div>
        <div className="col main pt-5 mt-3">

              <PokemonList/>
              </div>
                </div>
     
    )
  }
}
