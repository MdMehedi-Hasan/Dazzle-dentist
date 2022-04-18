import React from "react";
import image from "../../../images/doctor.png";
import "./Person.css";

const Person = () => {
  return (
      <div>
          <h1 className="w-25 mx-auto text-center mt-5 mb-5 text-info">About me <hr /></h1>
      <div className="d-md-flex text-center align-items-center justify-content-around mb-5">
        <div className="cstm-width">
          <img className="me-md-3" src={image} alt="" />
        </div>
        <div className="text-lg-start">
          <h1> Md. Joynab Binte Jahas</h1>
          <p >
            Hi, i am Joynab. I am a professional dentist &amp; consultant at{" "}
            <span>Dazzle Dentist</span> . I have done MBBS from Dhaka medical
            college &amp; completed P.h.d from South california. Over 8 years i
            have been serving my patients to protect their smile. I provide the
            highest priority to my patients &amp; ensure better service. All of
            cliets are always welcome to give feedbacks about my service.
            Although each of my patients have expreced nice concern and loved my
            service. However, i always try to give my best to protect each of
            patients smile. Because end of the day their smile matters to their
            family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Person;
