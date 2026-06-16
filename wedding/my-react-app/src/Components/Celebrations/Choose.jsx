import React from "react";
import james from "../../assets/Images/james.jpg";
import morris from "../../assets/Images/morris.jpg";
import abin from "../../assets/Images/abin.jpg";
import rithik from "../../assets/Images/Rithik.jpg";
import peter from "../../assets/Images/peter.jpg";
import aaab from "../../assets/Images/aaab.jpg";

import nikhah from "../../assets/Images/nikah1.jpg";
import nikah2 from "../../assets/Images/nikah2.jpg";
import nikah3 from "../../assets/Images/nikah3.jpg";
import nikah4 from "../../assets/Images/nikah4.jpg";
import nikah5 from "../../assets/Images/nikah5.jpg";
import nikah6 from "../../assets/Images/nikah6.jpg";

import punjabi1 from "../../assets/Images/punjabi1.jpg";
import punjabi2 from "../../assets/Images/punjabi2.jpg";
import punjabi3 from "../../assets/Images/punjabi3.jpg";
import punjabi4 from "../../assets/Images/punjabi4.jpg";
import punjabi5 from "../../assets/Images/punjabi5.jpg";
import punjabi6 from "../../assets/Images/punjabi6.jpg";

import chennai from "../../assets/Images/chennai.jpg";
import banglore from "../../assets/Images/banglore.jpg";
import hyder from "../../assets/Images/hyderabadi.jpg";
import coimba from "../../assets/Images/coimba.jpg";
import kochi from "../../assets/Images/kochi.jpg";
import vizag from "../../assets/Images/vizag.jpg";

import rajas1 from "../../assets/Images/rajas1.jpg";
import rajas2 from "../../assets/Images/rajas2.jpg";
import rajas3 from "../../assets/Images/rajas3.jpg";
import rajas4 from "../../assets/Images/rajas4.jpg";
import rajas5 from "../../assets/Images/rajas5.jpg";
import rajas6 from "../../assets/Images/rajas6.jpg";

import assam1 from "../../assets/Images/assam1.jpg";
import assam2 from "../../assets/Images/assam2.jpg";
import assam3 from "../../assets/Images/assam3.jpg";
import assam4 from "../../assets/Images/assam4.jpg";
import assam5 from "../../assets/Images/assam5.jpg";
import assam6 from "../../assets/Images/assam6.jpg";
import "../../assets/Style/Recently.css";

const Choose = ({ weddingType = "christian" }) => {
  const weddingCardData = {
    christian: [
      {
        id: 1,
        title: "James & Alice",
        text: "Mumbai",
        img: james,
        date: "27-12-2025",
      },
      {
        id: 2,
        title: "Morris & Mariya",
        text: "Maharashtra",
        img: morris,
        date: "27-12-2025",
      },
      {
        id: 3,
        title: "Abin & Josna",
        text: "Maharashtra",
        img: abin,
        date: "27-12-2025",
      },
      {
        id: 4,
        title: "Rithik & Aleena",
        text: "Maharashtra",
        img: rithik,
        date: "27-12-2025",
      },
      {
        id: 5,
        title: "Peter & Samantha",
        text: "Maharashtra",
        img: peter,
        date: "27-12-2025",
      },
      {
        id: 6,
        title: "Ebin & Tojisha",
        text: "Maharashtra",
        img: aaab,
        date: "27-12-2025",
      },
    ],
    muslim: [
      {
        id: 7,
        title: "Tariq & Fatima",
        text: "Uttar Pradesh",
        img: nikhah,
        date: "25-12-2025",
      },
      {
        id: 8,
        title: "Ahmed & Ayesha",
        text: "Delhi",
        img: nikah2,
        date: "20-12-2025",
      },
      {
        id: 9,
        title: "Rashid & Zoya",
        text: "Hyderabad",
        img: nikah3,
        date: "15-12-2025",
      },
      {
        id: 10,
        title: "Imran & Sana",
        text: "Lucknow",
        img: nikah4,
        date: "10-12-2025",
      },
      {
        id: 11,
        title: "Arif & Nadia",
        text: "Kolkata",
        img: nikah5,
        date: "05-12-2025",
      },
      {
        id: 12,
        title: "Farhan & Amina",
        text: "Chennai",
        img: nikah6,
        date: "01-12-2025",
      },
    ],
    punjabi: [
      {
        id: 13,
        title: "Gurpreet & Simran",
        text: "Punjab",
        img: punjabi1,
        date: "28-12-2025",
      },
      {
        id: 14,
        title: "Jaspreet & Navneet",
        text: "Chandigarh",
        img: punjabi2,
        date: "22-12-2025",
      },
      {
        id: 15,
        title: "Harpreet & Manpreet",
        text: "Ludhiana",
        img: punjabi3,
        date: "18-12-2025",
      },
      {
        id: 16,
        title: "Balwinder & Kuldeep",
        text: "Amritsar",
        img: punjabi4,
        date: "12-12-2025",
      },
      {
        id: 17,
        title: "Rajdeep & Harleen",
        text: "Jalandhar",
        img: punjabi5,
        date: "08-12-2025",
      },
      {
        id: 18,
        title: "Simar & Guneet",
        text: "Patiala",
        img: punjabi6,
        date: "03-12-2025",
      },
    ],
    southindian: [
      {
        id: 19,
        title: "Karthik & Priya",
        text: "Chennai",
        img: chennai,
        date: "29-12-2025",
      },
      {
        id: 20,
        title: "Arjun & Meera",
        text: "Bangalore",
        img: banglore,
        date: "23-12-2025",
      },
      {
        id: 21,
        title: "Rohit & Anjali",
        text: "Hyderabad",
        img: hyder,
        date: "19-12-2025",
      },
      {
        id: 22,
        title: "Vikram & Shreya",
        text: "Coimbatore",
        img: coimba,
        date: "13-12-2025",
      },
      {
        id: 23,
        title: "Suresh & Lakshmi",
        text: "Kochi",
        img: kochi,
        date: "09-12-2025",
      },
      {
        id: 24,
        title: "Mohan & Geetha",
        text: "Vizag",
        img: vizag,
        date: "04-12-2025",
      },
    ],
    rajasthani: [
      {
        id: 25,
        title: "Rajveer & Padmini",
        text: "Jaipur",
        img: rajas1,
        date: "30-12-2025",
      },
      {
        id: 26,
        title: "Mahavir & Chandni",
        text: "Udaipur",
        img: rajas2,
        date: "24-12-2025",
      },
      {
        id: 27,
        title: "Devraj & Meenakshi",
        text: "Jodhpur",
        img: rajas3,
        date: "20-12-2025",
      },
      {
        id: 28,
        title: "Veer & Rajeshwari",
        text: "Bikaner",
        img: rajas4,
        date: "14-12-2025",
      },
      {
        id: 29,
        title: "Bhanu & Padmavati",
        text: "Pushkar",
        img: rajas5,
        date: "10-12-2025",
      },
      {
        id: 30,
        title: "Keshav & Gauri",
        text: "Ajmer",
        img: rajas6,
        date: "05-12-2025",
      },
    ],
    assamese: [
      {
        id: 31,
        title: "Himangshu & Barnali",
        text: "Guwahati",
        img: assam1,
        date: "26-12-2025",
      },
      {
        id: 32,
        title: "Bhabesh & Munmi",
        text: "Dibrugarh",
        img: assam2,
        date: "21-12-2025",
      },
      {
        id: 33,
        title: "Pranjal & Juri",
        text: "Jorhat",
        img: assam3,
        date: "16-12-2025",
      },
      {
        id: 34,
        title: "Bishal & Mousumi",
        text: "Silchar",
        img: assam4,
        date: "11-12-2025",
      },
      {
        id: 35,
        title: "Anupam & Rashmi",
        text: "Tezpur",
        img: assam5,
        date: "06-12-2025",
      },
      {
        id: 36,
        title: "Deep & Monika",
        text: "Nagaon",
        img: assam6,
        date: "02-12-2025",
      },
    ],
  };

  const currentCardData =
    weddingCardData[weddingType] || weddingCardData.christian;

  const displayWeddingType =
    weddingType.charAt(0).toUpperCase() + weddingType.slice(1);

  return (
    <div>
      <div className="container mb-5">
        <h2 className="text-center mt-5 mb-5" style={{ color: "black" }}>
          Recent {displayWeddingType} Weddings
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
          {currentCardData.map((card) => (
            <div className="col d-flex justify-content-center" key={card.id}>
              <div className="card card-overlay text-center border-0 card-service">
                <img src={card.img} alt={card.title} className="card-img" />
                <div className="card-img-overlay d-flex flex-column justify-content-end text-center text-white">
                  <h5 className="card-title text-center">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <p className="card-date">{card.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
