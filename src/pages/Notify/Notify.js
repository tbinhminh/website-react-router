import React, { Component } from 'react';
import './Notify.css'
import Header from '../Header/Header';
class Notify extends Component {
    constructor(props) {
        super(props);
        this.state ={
            items: [],
            isLoaded: false
        }
    }
    async componentDidMount(){
        const URL = 'https://api.unsplash.com/search/photos';
        const QUERY ='?query=dog&per_page=20';
        const KEY = '&client_id=ngPhGLeiePQLyint84_s9e2gIgnd25xzJKLLJhUJnA8'
        await fetch(`${URL}${QUERY}${KEY}`)
            .then(res=>res.json())
            .then(data => {
                this.setState({
                    items: data.results
                });
            },
            error =>{
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }
    render() {
        const { isLoaded, items } = this.state;
        if(isLoaded){
            return <div>Loading...</div>
        }  else{
            return (
            <React.Fragment>
                <Header/>
                    <div className="content">
                        <section className="gird">
                            {items.map((item,index) =>(
                               
                                <div className={`item item-${Math.ceil(
                                    item.height / item.width,
                                )}`} key ={index}>
                                   <img  src={item.urls.small} alt="Dog" ></img>
                                </div>
                            ))}
                        </section>
                    </div>
            </React.Fragment>
            );
         }

    }
}

export default Notify;