import React, { Component } from 'react';
import Header from '../Header/Header';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Category/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;