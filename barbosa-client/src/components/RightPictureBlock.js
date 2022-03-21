import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RightPictureBlock = props => {
    return (
        <Wrapper>
            <div className='right-pic-block text'>
                <div className='block-text'>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <button>{props.buttonText}</button>
                </div>
                <img src={props.img} alt='#' />
            </div>
        </Wrapper>
    )
}

RightPictureBlock.propTypes = { title: PropTypes.string, text: PropTypes.string, img: PropTypes.string, buttonText:PropTypes.string }

export default RightPictureBlock

const Wrapper = styled.div`
    .right-pic-block{
        margin-top:5%;
        display: flex;

        img{
            height: 54%;
            width: 54%;
        }

        .block-text {
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