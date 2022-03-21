import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="nav-bar">
          <Link to="/homepage" className="text brand">Barbosa</Link>
        <div className="locations">
          <Link to="/photos" className="btn text">
            Photos
          </Link>
          <button>Ameneties</button>
          <button>About</button>
          <button>Contact</button>
        </div>

        <div className="book-room text">
          <button>Book Room</button>
        </div>
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

    .brand {
      font-weight: 500;
      font-size: 3vw;
      text-decoration: none;
    }

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
        background-color: #282625
      }

      .btn:hover {
        background-color: #353333
      }



      button {
        font-size: 1.5vw;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 5px;
      }

      button:hover {
        background-color: #353333;
        cursor: pointer;
      }
    }

    .book-room {
      margin-left: 3px;

      button {
        font-size: 1.5vw;
        background-color: #97918f;
        padding-left: 20px;
        padding-right: 20px;
        font-weight: 500;
      }

      button:hover {
        background-color: #787372;
        cursor: pointer;
      }
    }
  }
`;
