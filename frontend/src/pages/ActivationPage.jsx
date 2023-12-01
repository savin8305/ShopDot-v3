import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import "./Activation.css"
const ActivationPage = () => {
  const { activation_token } = useParams();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const activateUser = async () => {
      if (activation_token) {
        try {
          const response = await axios.post(`${server}/user/activation`, {
            activation_token,
          });

          console.log(response);
        } catch (error) {
          setIsError(true);
        }
      }
    };

    activateUser();
  }, [activation_token]);

  return (
    <div className={`activation-page ${isError ? "error" : "success"}`}>
      <div className="content">
        {isError ? (
          <p>Your token has expired!</p>
        ) : (
          <p>Your account has been created successfully!</p>
        )}
      </div>
    </div>
  );
};

export default ActivationPage;
