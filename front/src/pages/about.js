import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    axios
      .get("http://localhost:8080/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="about-section">
      <h2>About Us Page</h2>
      <div className="item-container">
        {users.map((user) => (
          <div className="card">
            <h3>{user.id}</h3>
            <h4>{user.name}</h4>
            <h6>{user.mail}</h6>
            <p>{user.password}</p>
            <div>Clothes :
              {user.clothes.map((clothe) => (
                <div className="cardClothe">
                    <h3>{clothe.type}</h3>
                    <img src={clothe.photo}/>
                    <p>{clothe.price}</p>
                    <p>{clothe.brand}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
