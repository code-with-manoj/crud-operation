import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = user;

  const onchangeHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const postData = (e) => {
    e.preventDefault();
    axios.put(
      `https://6221a9f6afd560ea69b63a0d.mockapi.io/database/${id}`,
      user
    );

    navigate("/crud-app");
  };

  const loadUser = () => {
    axios
      .get(`https://6221a9f6afd560ea69b63a0d.mockapi.io/database/${id}`)
      .then((res) => setUser(res.data));
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <section className="py-10 w-11/12 md:w-4/5 mx-auto ">
        <h3 className="text-center text-2xl text-gray-800 uppercase font-semibold">
          Update User
        </h3>

        <div className="py-5 w-4/6 mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
            required
            value={name}
            onChange={(e) => onchangeHandle(e)}
          />
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            className="input"
            required
            value={email}
            onChange={(e) => onchangeHandle(e)}
          />
          <input
            type="text"
            name="phone"
            placeholder="Contact"
            className="input"
            required
            value={phone}
            onChange={(e) => onchangeHandle(e)}
            maxLength={10}
          />

          <button
            onClick={(e) => postData(e)}
            className="bg-gray-800 text-white py-1 px-3 rounded-sm font-semibold"
          >
            Update
          </button>
        </div>
      </section>
    </>
  );
};

export default Edit;
