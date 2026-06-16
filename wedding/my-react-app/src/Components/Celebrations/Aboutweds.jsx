import React from "react";
import christianImage from "../../assets/Images/christian.jpg";
import muslimImage from "../../assets/Images/rokha.jpg";
import punjabiImage from "../../assets/Images/sikh.jpeg";
import southIndianImage from "../../assets/Images/southind.jpg";
import rajasthaniImage from "../../assets/Images/royalrajasthani.jpg";
import assameseImage from "../../assets/Images/assamese.jpg";
import ban1 from "../../assets/Images/ban3.png";

const Aboutweds = ({ weddingType = "christian" }) => {

  const weddingData = {

    christian: {
      title: "What Is An Indian Christian Wedding",
      image: christianImage,
      description:
        `An Indian Christian wedding is a beautiful blend of faith, tradition, and celebration. The ceremony usually takes place in a beautifully decorated church filled with flowers, hymns, and prayers. Family and friends gather together to witness the sacred union of the couple.

The wedding follows Christian traditions such as Bible readings, prayers, exchanging vows, rings, and blessings by the priest. These rituals symbolize love, commitment, and togetherness before God. After the ceremony, the celebration continues with joyful gatherings, music, food, and the warmth of Indian hospitality.`,
    },

    muslim: {
      title: "What Is An Indian Muslim Wedding (Nikah)",
      image: muslimImage,
      description:
        `An Indian Muslim wedding, known as Nikah, is a sacred Islamic ceremony that unites two individuals in marriage. Traditional rituals, prayers, and celebrations make it a rich cultural experience.`,
    },

    punjabi: {
      title: "What Is A Punjabi Wedding",
      image: punjabiImage,
      description:
        `A Punjabi wedding is a vibrant celebration filled with music, dance, colorful traditions, and joyful ceremonies that bring families together.`,
    },

    southindian: {
      title: "What Is A South Indian Wedding",
      image: southIndianImage,
      description:
        `A South Indian wedding is deeply rooted in ancient traditions, featuring elegant rituals, temple jewelry, silk sarees, and spiritual ceremonies.`,
    },

    rajasthani: {
      title: "What Is A Rajasthani Wedding",
      image: rajasthaniImage,
      description:
        `A Rajasthani wedding is a royal and colorful celebration reflecting Rajasthan’s regal heritage, folk culture, and grand traditions.`,
    },

    assamese: {
      title: "What Is An Assamese Wedding",
      image: assameseImage,
      description:
        `An Assamese wedding is a graceful blend of Assamese culture and Vedic traditions celebrated with simplicity, spirituality, and elegance.`,
    },
  };

  const data = weddingData[weddingType] || weddingData.christian;

  return (

    <div className="container-fluid px-0">

      {/* =========================
          HERO BANNER
      ========================= */}

      <div
        style={{
          height: "55vh",
          width: "100%",

          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.50),
              rgba(0,0,0,0.50)
            ),
            url(${ban1})
          `,

          backgroundSize: "cover",

          backgroundPosition: " center 25%",

          backgroundRepeat: "no-repeat",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          textAlign: "center",

          overflow: "hidden",
        }}
      >

        <div style={{ padding: "20px" }}>

          <h1
            style={{
              color: "white",

              fontSize: "4rem",

              fontWeight: "700",

              fontFamily: "Poppins, sans-serif",

              letterSpacing: "-1px",

              marginBottom: "20px",

              textShadow:
                "0 10px 25px rgba(0,0,0,0.35)",
            }}
          >
            Wedding Traditions
          </h1>

         

        </div>

      </div>

      {/* =========================
          CONTENT SECTION
      ========================= */}

      <div className="container py-5">

        <div className="row align-items-center g-5">

          {/* IMAGE */}

          <div className="col-lg-6 text-center">

            <img
              src={data.image}
              alt={data.title}
              className="img-fluid"
              style={{
                height: "600px",

                width: "80%",

                objectFit: "cover",

                borderRadius: "18px",

                boxShadow:
                  "0 15px 35px rgba(0,0,0,0.12)",
              }}
            />

          </div>

          {/* TEXT */}

          <div className="col-lg-6">

            <h2
              style={{
                fontSize: "42px",

                fontWeight: "700",

                fontFamily: "Poppins, sans-serif",

                color: "#1d1d1d",

                marginBottom: "25px",

                lineHeight: "1.3",
              }}
            >
              {data.title}
            </h2>

            <p
              style={{
                fontSize: "16px",

                lineHeight: "1.9",

                color: "#555",

                fontFamily: "Poppins, sans-serif",
              }}
            >
              {data.description}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Aboutweds;