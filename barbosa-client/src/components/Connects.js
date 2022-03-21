import React from 'react'
import { FaInstagram, FaFacebookF,FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

const Connects = () => {
    return (
        <Wrapper>
            <div className='connects text'>
                <div className='socials'>
                    <div id='logo'>
                        <button>Barbosa</button>
                    </div>
                    <div id='social-buttons'>
                        <button><FaInstagram /></button>
                        <button><FaFacebookF /></button>
                        <button><FaTwitter /></button>
                    </div>

                </div>

                <div className='links'>
                    <p>About</p>
                    <p>Photos</p>
                    <p>Book a Room</p>
                    <p>Ameneties</p>
                </div>

            </div>

        </Wrapper>
    )
}

export default Connects

const Wrapper = styled.div`


    .connects {
        /* border: 1px solid white; */
        display: flex;
        height: 25vh;
        justify-content: flex-start;

        #logo{
            /* border: 1px solid white; */
            button {
            margin-top: 6%;
            font-weight: 500;
            font-size: 2vw;
            height: 50%;

            }



            button:hover{
                cursor: pointer;
            }

        }
        
        #social-buttons {

            margin-top: 1em;
            padding-left: 0.1vw;
            button {
                font-size: 1.5vw;
                background-color: none;
            }
            button:hover {
                cursor: pointer;
            }
        }

        .socials {
            /* border: 1px solid white; */
            display: flex;
            flex-direction: column;
            width: 70%;
            padding-left: 2em;
            align-self: center;

        }

        .links {
            width: 30%;
            color: #97918F;
            text-decoration: underline;
            padding-top: 1vw;
            font-size: 1.3vw;
            align-self: center;

            p:hover{
                cursor: pointer;
            }

        }

    }

`

