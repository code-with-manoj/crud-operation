import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const postData = (e) => {
    e.preventDefault();
    axios.post("https://6221a9f6afd560ea69b63a0d.mockapi.io/database", {
      name,
      email,
      phone,
    });

    navigate("/crud-app");
  };

  return (
    <>
      <section className="py-10 w-11/12 md:w-4/5 mx-auto ">
        <h3 className="text-center text-2xl text-gray-800 uppercase font-semibold">
          Register Now
        </h3>

        <form className="py-5 w-4/6 mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="phone"
            placeholder="Contact"
            className="input"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
          />

          <button
            onClick={(e) => postData(e)}
            className="bg-gray-800 text-white py-1 px-3 rounded-sm font-semibold"
          >
            submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Create;
