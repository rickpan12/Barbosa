import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="nav-bar">
        <Link to="/homepage" className="text brand">
          Barbosa
        </Link>
        <div className="locations">
          <Link to="/photos" className="btn text">
            Photos
          </Link>
          <Link to="/ameneties" className="btn text">
            Ameneties
          </Link>
          <Link to="/about" className="btn text">
            About
          </Link>
          <Link to="/contact" className="btn text">
            Contact
          </Link>

          <Link className="book-room text">Book Room</Link>
        </div>

        {/* <div className="book-room text">
          <button>Book Room</button>
        </div> */}
      </nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  nav {
    display: flex;
    width: 100%;
    margin-top: 4%;
    margin-bottom: 6%;

    .locations {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;

      .btn {
        display: flex;
        font-size: 1.5vw;
        text-decoration: none;
        height: 100%;
        padding-left: 30px;
        padding-right: 30px;
        margin: 5px;
        align-items: center;
        background-color: #282625;
      }

      .btn:hover {
        background-color: #353333;
      }
    }

    .book-room {
      display: flex;
      font-size: 1.5vw;
      text-decoration: none;
      height: 100%;
      padding-left: 30px;
      padding-right: 30px;
      margin: 5px;
      align-items: center;
      background-color: #97918f;
    }

    .book-room:hover {
      background-color: #787372;
    }
  }
`;
