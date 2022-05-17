import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://6221a9f6afd560ea69b63a0d.mockapi.io/database")
      .then((result) => setData(result.data));
     
  }, []);

  const removeData = (id) => {
    axios.delete(`https://6221a9f6afd560ea69b63a0d.mockapi.io/database/${id}`);
    navigate("/crud-app");
  };

  return (
    <>
      <h3 className="text-center text-3xl text-gray-800 font-bold py-5">
        Participants{" "}
      </h3>
      <div class="lg:w-2/3 w-full mx-auto overflow-auto">
        <table class="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th class="px-2 md:px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Name
              </th>
              <th class="px-2 md:px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Email
              </th>
              <th class="px-2 md:px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Contact
              </th>
              <th class="px-2 md:px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((elem) => {
                return (
                  <>
                    <tr>
                      <td class="px-2 md:px-4">{elem.name}</td>
                      <td class="px-2 md:px-4">{elem.email}</td>
                      <td class="px-2 md:px-4">{elem.phone}</td>
                      <td class="px-2 md:px-4 flex items-center space-x-3">
                        <Link to={`/Edit/${elem.id}`}>
                          <i class="bx bxs-edit text-2xl text-green-500"></i>
                        </Link>
                        <button onClick={() => removeData(elem.id)}>
                          <i class="bx bxs-box text-2xl text-red-600"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
