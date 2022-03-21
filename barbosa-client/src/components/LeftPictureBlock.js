import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
 
const LeftPictureBlock = props => {
    return (
        <Wrapper>
            <div className='left-pic-block text'>
                <img src={props.img} alt='#' />
                <div className='block-text'>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <button>{props.buttonText}</button>
                </div>
            </div>
        </Wrapper>
    )
}

LeftPictureBlock.propTypes = { title: PropTypes.string, text: PropTypes.string, img: PropTypes.string, buttonText: PropTypes.string }

export default LeftPictureBlock

const Wrapper = styled.div`
    .left-pic-block{
        margin-top:5%;
        display: flex;

        img{
            height: 54%;
            width: 54%;
        }

        .block-text {
            padding-left: 5%;
            color: white;
            padding-top: 16%;
            padding-right: 3%;

            h2 {
                font-size: 2vw;
            }

            p {
                font-size: 1.5vw;
                line-height: 1.7;
            }

            button{
                border: none;
                background-color: #97918F;
                color: white;
                height: 10%;
                padding-left: 3vw;
                padding-right: 3vw;
                padding-top: 1.9vw;
                padding-bottom: 3vw;
                text-align: center;
                justify-content: center;
                font-weight: 700;
                font-size: 1vw;
            }

            button:hover {
                cursor: pointer;
                background-color: #787372;
            }

        }
    }
`