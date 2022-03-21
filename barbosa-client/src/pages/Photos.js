import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Connects from "../components/Connects";

const Photos = () => {
    return (
        <Wrapper>
            <Navbar/>

            <div className="info">
                <div className="text" id='title'>Take a Tour</div>
                <div className="text" id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.</div>
            </div>

            <div className="row">
                <div className="col">
                    <img className="photo photo-reg" src="https://barbosaclone.carrd.co/assets/images/gallery03/631e2970.jpg?v01117391680951"/>
                    <img className="photo photo-reg" src="https://barbosaclone.carrd.co/assets/images/gallery03/bb5e81b4.jpg?v01117391680951"/>
                </div>
                <div className="col">
                    <img className="photo photo-reg" src="https://barbosaclone.carrd.co/assets/images/gallery03/4fd2bcdf.jpg?v01117391680951"/>
                    <img className="photo photo-reg" src="https://barbosaclone.carrd.co/assets/images/gallery03/ad315030.jpg?v01117391680951"/>
                </div>

                <div className="col">
                    <img className="photo photo-reg" src="https://barbosaclone.carrd.co/assets/images/gallery03/3e7ca25f_original.jpg?v01117391680951"/>
                    <img className="photo photo-reg" src="https://barbosaclone.carrd.co/assets/images/gallery03/3f044979.jpg?v01117391680951"/>
                </div>

                <div className="col">

                </div>

            </div>




            <Connects/>
        </Wrapper>
    )
}


export default Photos


const Wrapper = styled.div `

.info {
    /* border: 1px solid white; */
    display: flex;
    margin-top: 11em;

    #title {
        /* border: 1px solid white; */
        width: 50%;
        font-size: 3.1vw;
        font-weight: 500;
    }

    #text {
        /* border: 1px solid white; */
        width: 50%;
        font-size: 1.3vw;
        line-height: 1.7;
        justify-self: start;
    }
}




.photo-reg{
    margin: 2%;
    vertical-align: middle;
    width: 90%;
}


.row {
    display: flex;
    flex-wrap: wrap;

}

.col {
    display: flex;
    max-width: 50%;
    padding:0 4px;
}

`
