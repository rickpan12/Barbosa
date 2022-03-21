import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import LeftPictureBlock from '../components/LeftPictureBlock'
import RightPictureBlock from '../components/RightPictureBlock'
import Connects from '../components/Connects'





function Landing() {
    return (

        <Wrapper>
            <Navbar />

            <div className='main-block text'>
                <h1>Exceptional design.</h1>
                <h1>Extraordinary service.</h1>
                <img src='https://barbosaclone.carrd.co/assets/images/image02.jpg?v01117391680951' alt='#' />
            </div>

            <LeftPictureBlock
                title='About the Hotel'
                text='Designed to be a sanctuary in the middle of the city, the Barbosa knows that a little comfort goes a long way.'
                img='https://barbosaclone.carrd.co/assets/images/image04.jpg?v01117391680951'
                buttonText='Learn More'
            />


            <RightPictureBlock
                title='Take a Tour'
                text='A stay at the Barbosa is more than a room. Explore a day in the life of a community of artists, innovators and travelers.'
                img='https://barbosaclone.carrd.co/assets/images/image03.jpg?v01117391680951'
                buttonText='View Gallery'
            />

            <LeftPictureBlock
                title='Ameneties'
                text="Whether you’re looking for a healthy breakfast or a late-night snack, our award-winning kitchen has you covered."
                img='https://barbosaclone.carrd.co/assets/images/image05.jpg?v01117391680951'
                buttonText='Learn More'
            />


            <div className='quotes text'>
                <div id='quote-left'>
                    <h3>“I can’t imagine a hipper place to stay for the price.”</h3>
                    <h4>- The Lionel</h4>
                </div>

                <div id='quote-right'>
                    <h3>“If I could live there, I would. And believe me, I’ve asked.”</h3>
                    <h4>– Milo F.</h4>
                </div>
            </div>


            <div id='booking-panel' className='text'>
                <h1>Plan a stay with us today.</h1>
                <button>Book a Room</button>
            </div>


            <Connects/>

        </Wrapper>
    )
}

export default Landing

const Wrapper = styled.div`

    .main-block {
        color: white;
        font-size: 2vw;
        margin-top: 3%;
    


        img{
            margin-top: 1%;
            width: 46.5em;
            height: 26em;

        }
    }

    .quotes {
        padding-top: 5%;
        margin-top: 3%;
        height: 20vh;
        display: flex;

        h3{
            font-size: 2.5vw;
        }
 
         #quote-right {
             padding-left: 5%;
             padding-right: 3%;

        } 

        #quote-left {
            padding-left: 3%;
            padding-right:8%;
        }
    }

    #booking-panel {
        display: flex;
        flex-direction: column;
        height: 33vh;
        width: 100%;
        align-items: center;
        justify-content: center;    
        margin-top: 15%;
        background-color: #97918F;
        font-size:1.5vw;
        padding-bottom: 3%;

        button {
            color: #97918F;
            background-color: white;
            height: 4vw;
            width: 14%;
            font-weight: 700;
            font-size: 1vw;
        }

        button:hover {
            cursor: pointer;
            background-color: #EBE5E2;
        }

    }


`
