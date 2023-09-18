import React from "react";
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from './actions';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReactDOM from "react";
import Provider from "react-redux";

import solteiro from './../../assets/img/ap1.jpg'
import casal from './../../assets/img/ap2.jpg'
import quatro from './../../assets/img/ap3.jpg'
import geral from './../../assets/img/ap4.jpg'
import './../demo/demo.css'
import store from '../demo/store'



function Demo(props) {
  const { count, incrementCount, decrementCount } = props;

 
  return (
    <>
      <Header/>
      <div className="margem_demo">
        <div className="caixa_demo">
          <h1>Bem-vindo!</h1>
        </div>
        <div className="caixa_demo">
          <h2>Apartamentos para solteiros</h2>
          <img src={solteiro} className="img-fluid"/>
          <p>Lorem ipsum...</p>
          <button onClick={incrementCount}>Incrementar</button>
          <button onClick={decrementCount}>Decrementar</button>
          <p>Contagem: {count}</p>
        </div>
        
      </div>
      <Footer/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);