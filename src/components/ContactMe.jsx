import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "./CustomButton";

const ContactMe = () => {
  const form = useRef();

  const initialState = {
    from_name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [success, setSuccess] = useState(false);

  function handleCleanData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setFormData(initialState);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-[800px] overflow-scroll bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
      <div className="bg-white py-6 px-10 sm:max-w-md w-full">
        <div className="text-black font-semibold text-2xl text-center mb-8">
          <div className="text-black font-semibold text-2xl text-center mb-8">
            Get in Touch
          </div>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Your name"
              name="from_name"
              value={formData.from_name}
              onChange={handleCleanData}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleCleanData}
            />
          </div>
          <div>
            <textarea
              rows="6"
              type="text"
              name="message"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Your message"
              value={formData.message}
              onChange={handleCleanData}
            />
          </div>
          {success ? <div>Mensaje enviado</div> : null}

          <CustomButton text="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
