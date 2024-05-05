import React from "react";
import "./styles.css";
import scrollIcon from "../resources/scrollIcon.png";
import asset from "../resources/asset.png";
import arrow from "../resources/arrow.png";
import signUp from "../resources/signUp.png";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = async (data) => {
    const { firstName, lastName, email, country, phoneNumber } = data;
    const res = await axios.post("http://localhost:3030/api/send", {
      firstName,
      lastName,
      email,
      country,
      phoneNumber,
    });
    if (res.data) {
      alert(res.data);
    } else {
      alert("Something went wrong while sending email");
    }
  };

  const onSubmit = async (data) => {
    const res = await axios.post("http://127.0.0.1:8000/api/contact", data);
    if (res.data.status === 200) {
      alert(res.data.message);
      sendEmail(data);
      reset();
    } else if (res.data.status === 400) {
      const validateErr = res.data.validate_err;
      let errorMessages = "";
      Object.keys(validateErr).forEach((key) => {
        validateErr[key].forEach((errorMessage) => {
          errorMessages += errorMessage + "\n";
        });
      });
      alert(errorMessages);
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h1 className="contactUs-h1">تواصل معنا</h1>
        <h2>التواصل معانا أسهل مما تظن بكثير</h2>
        <img className="scrollIcon-img" src={scrollIcon} />
        <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="checkEnteredData-h1">
            الرجاء التأكد من ادخال البيانات بشكل صحيح
          </h1>
          <div className="assetImg-wrapper">
            <img className="asset-img" src={asset} />
          </div>
          <div className="arrowImg-wrapper">
            <img className="arrow-img" src={arrow} />
          </div>
          <div className="mainFormInput-container">
            <div className="formInput-conatiner">
              <div className="firstLastName-wrapper">
                <div className="firstLastName-input">
                  <h3>الاسم الأخير</h3>
                  <input
                    {...register("lastName", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors.lastName && (
                    <span className="errorMsg">الاسم الاخير مطلوب</span>
                  )}
                </div>
                <div className="firstLastName-input">
                  <h3>الاسم الاول</h3>
                  <input
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors.firstName && (
                    <span className="errorMsg">الاسم الاول مطلوب</span>
                  )}
                </div>
              </div>
              <div className="formInput-wrapper">
                <h3>البريد الإلكتروني</h3>
                <input
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                />
                {errors.email && (
                  <span className="errorMsg">الايميل مطلوب</span>
                )}
              </div>
              <div className="formInput-wrapper">
                <h3>الدولة</h3>
                <select
                  className="emailCountry-input"
                  {...register("country", {
                    required: true,
                  })}
                >
                  <option value="مصر">مصر</option>
                </select>
                {errors.country && (
                  <span className="errorMsg">يجب اختيار البلد</span>
                )}
              </div>
              <div className="phoneNumber-wrapper">
                <h3>الهاتف</h3>
                <div className="phoneNumberInput-wrapper">
                  <select className="countryCode-input">
                    <option value="(+20) مصر">(+20) مصر</option>
                  </select>
                  <div className="errorMesg-display">
                    <input
                      className="phoneNumber-input"
                      {...register("phoneNumber", {
                        required: true,
                        pattern: /^01\d{9,11}$/,
                      })}
                    />
                    {errors.phoneNumber && (
                      <span className="errorMsg">يجب ادخال رقم الهاتف</span>
                    )}
                  </div>
                </div>
              </div>
              <button className="submit-button" type="submit">
                سجل الان
              </button>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <div className="handel-checkbox">
                    <span>.اوافق على الشروط والأحكام و المشاركة البريدية</span>
                    <input
                      className="checkbox-input"
                      type="checkbox"
                      {...register("policy", {
                        required: true,
                      })}
                    />
                  </div>
                  <span>.يجب أن تكون بياناتك صحيحة</span>
                  {errors.policy && (
                    <span className="errorMsg">يجب الضغط على موافق</span>
                  )}
                </label>
              </div>
            </div>
            <div className="signUp-container">
              <img className="signUp-img" src={signUp} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
