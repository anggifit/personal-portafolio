import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import CustomButton from "./CustomButton.js";

type FormData = {
  from_name: string;
  email: string;
  message: string;
};

type FormChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

const ContactMe = () => {
  const { t } = useTranslation();

  const form = useRef<HTMLFormElement>(null);

  const initialState: FormData = {
    from_name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [success, setSuccess] = useState(false);

  function handleCleanData(event: FormChangeEvent) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const sendEmail = (event: FormSubmitEvent) => {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current!,
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
        <div className="text-black mb-8">
          <h4 className="text-black text-center mb-8">{t("contactTitle")}</h4>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder={t("placeholderName")}
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
              placeholder={t("placeholderEmail")}
              value={formData.email}
              onChange={handleCleanData}
            />
          </div>
          <div>
            <textarea
              rows={4}
              name="message"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder={t("placeholderMessage")}
              value={formData.message}
              onChange={handleCleanData}
            />
          </div>
          {success ? <div>{t("successMessage")}</div> : null}

          <CustomButton text={t("sendMessageButton")} />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
