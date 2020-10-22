import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="container">
                <img className="home__image" src="https://i.pcmag.com/imagery/lineups/03UlRIC0KuSBbHtx9aJOlmZ-2..1601168755.jpg" alt="promo_image"/>
            </div>
            <div className="home__row">
                <Product/>
            </div>
            <div className="home__row">

            </div>
            <div className="home__row">

            </div>
            <div className="home__row">

            </div>
        </div>
    )
}

export default Home
