import React, { Component } from 'react';


import Card1 from './images/cards/card_1.png'
import Card2 from './images/cards/card_2.png'
import Card3 from './images/cards/card_3.png'
import Card4 from './images/cards/card_4.png'
import Card5 from './images/cards/card_5.png'
import Card6 from './images/cards/card_6.png'
import Card7 from './images/cards/card_7.png'
import Card8 from './images/cards/card_8.png'



class Pics extends Component {
    render() {
        const imageArray = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8]
        let randomCardNum = Math.floor(Math.random() * imageArray.length)
        console.log(randomCardNum)
        let imageMapper = imageArray.map((image) => {
            return <img src={image} width="100%" height="100%" />
        })
        console.log(imageMapper[randomCardNum])
        return (
            <div className="App">
                {imageMapper[randomCardNum]}
            </div>
        );
    }
}
export default Pics;