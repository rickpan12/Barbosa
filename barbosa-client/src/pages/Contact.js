import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Connects from "../components/Connects";
import styled from "styled-components";
import ErrorAlert from "../components/ErrorAlert";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
    showAlert: false,
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    console.log(state)
    const value = e.target.name;
    setState({
      ...state,
      [value]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, message} = state

    if(name ==='' || email === ''|| message ==='') {
      setState({...state, showAlert: true})
    }
    else {
      setState({...state, showAlert: false})
    }
    
    console.log(state)
    return
  }

  return (
    <Wrapper>
      <Navbar />
      <div className="main">
        <div className="text info">
          <h1>Contact</h1>
          <p>123 Demo Street</p>
          <p>Stockholm, Sweden 12345</p>
          <br />
          <p id="boldtext">Phone</p>
          <p>+1 (555) 555-5555</p>
          <br />
          <p id="boldtext">Front Desk</p>
          <p>email@example.com</p>
          <p>+1 (555) 555-5555</p>
          <br />
          <p id="boldtext">Hotel Reservations</p>
          <p>email@example.com</p>
          <p>+1 (555) 555-5555</p>
          <br />
          <p>Would you like us to arrange airport transfer </p>
          <p>with private car or taxi? You can reach us at</p>
          <p>+ 1 (555) 555-5555</p>
        </div>

        <div className="form">
          {state.showAlert && <ErrorAlert />}
          <form>
            <input
              value={state.name}
              onChange={handleChange}
              name="name"
              placeholder="Name"
              className="form-text"
              type="text"
            ></input>
            <input
              onChange={handleChange}
              name="email"
              placeholder="Email"
              className="form-text"
              type="email"
            ></input>
            <textarea
              onChange={handleChange}
              name="message"
              placeholder="Message"
              className="form-box"
            ></textarea>
            <button className="form-submit"  onClick={onSubmit}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Connects />
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  .main {
    display: flex;
  }

  #boldtext {
    font-weight: 600;
  }

  .info {
    width: 50%;
    font-size: 1.3vw;
  }

  .form {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    justify-content: flex-start;
    width: 50%;

    .form-text {
      display: flex;
      width: 35em;
      min-height: 0;
      margin-top: 1.5vw;
      margin-bottom: 1.5vw;
      font-size: 1.2vw;
      padding: 2vw;
      background-color: #353333;
      color: white;
    }

    .form-box {
      display: flex;
      width: 35em;
      min-height: 10vw;
      margin-top: 1.5vw;
      margin-bottom: 1.5vw;
      font-size: 1.2vw;
      padding: 2vw;
      background-color: #353333;
      border: none;
      color: white;
    }

    .form-submit {
      display: flex;
      width: 12em;
      height: 5em;
      background-color: #97918f;
      align-items: center;
      justify-content: center;
      font-size: 1vw;
      font-weight: 600;
    }

    .form-submit:hover {
      cursor: pointer;
      background-color: #787372;
    }
  }
`;
