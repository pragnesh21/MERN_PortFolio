import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
      } else {
        const response = await axios.post("/api/v1/portfolio/sendWhatsAppMessage", {
          name,
          email,
          msg,
        });

        if (response.data.success) {
          toast.success("Message sent to WhatsApp!");
          // Clear form fields after successful submission
          setname("");
          setEmail("");
          setMsg("");
        } else {
          toast.error("Failed to send message to WhatsApp");
        }
      }
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
    }
  };

  return (
    <>
      {/* Existing code */}
      <div className="contact" id="contact">
        {/* ... (existing code) */}

        <div className="row px-3">
          <button className="button" onClick={handleSubmit}>
            SEND MESSAGE
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
