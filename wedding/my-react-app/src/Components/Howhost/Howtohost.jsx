import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Style/Howtohost.css";
import wed7 from "../../assets/Images/banimgjpj.jpeg"

const Howtohost = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const [partnerFirstname, setPartnerFirstname] = useState("");
  const [partnerLastname, setPartnerLastname] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerPhone, setPartnerPhone] = useState("");

  const [profileImage, setProfileImage] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState("");

  const getPartnerLabel = () => {
    switch (role) {
      case "Groom":
        return "Bride";
      case "Bride":
        return "Groom";
      default:
        return "Partner";
    }
  };

  const handleNext = (e) => {
    e.preventDefault();

    // Required validation
    if (
      !role ||
      !firstname ||
      !lastname ||
      !email ||
      !phonenumber ||
      !partnerFirstname ||
      !partnerLastname ||
      !partnerEmail ||
      !partnerPhone ||
      !profileImage
    ) {
      alert("⚠️ Please complete all required fields.");
      return;
    }

    // Same email validation
    if (email === partnerEmail) {
      alert("Bride and Groom email cannot be the same.");
      return;
    }

    // Same phone validation
    if (phonenumber === partnerPhone) {
      alert("Bride and Groom phone number cannot be the same.");
      return;
    }

    const formData = {
      role,
      firstname,
      lastname,
      email,
      phonenumber,
      partnerFirstname,
      partnerLastname,
      partnerEmail,
      partnerPhone,
      youtubeLink,
    };

    sessionStorage.setItem(
      "hostStep1",
      JSON.stringify(formData)
    );

    // store image temporarily
    window.selectedProfileImage = profileImage;

    navigate("/hostdetails");
  };

  return (
    <div >

      {/* New Banner First */}
                <div className="banner-wrapper">
                  <div className="banner-box">
                    <img src={wed7} alt="decor" className="decore-img" />
            
                    <div className="banner-overlay"></div>
            
                    <div className="banner-content">
                      <h2 style={{marginTop:"200px"}}>CONTACT</h2>
                      <p style={{marginTop:"120px", marginLeft:"235px", fontSize:"35px", fontFamily:"Cormorant Garamond, serif"}}>HOME / HOST</p>
                    </div>
                  </div>
                </div>

 <div className="container host mt-5">
      <form onSubmit={handleNext}>
        
        {/* Heading */}
        <h4 className="headtex">
          Hi, let's get you ready to become a host
        </h4>

        {/* About You */}
        <h3>Step 1: About You</h3>

        <div className="mb-4">
          <label className="form-label">You Are</label>

          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="Groom">Groom</option>
            <option value="Bride">Bride</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Your Details */}
        <h3>Your Contact Details</h3>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Partner Details */}
        {role && (
          <>
            <h3>{getPartnerLabel()} Details</h3>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={`${getPartnerLabel()} First Name`}
                  value={partnerFirstname}
                  onChange={(e) =>
                    setPartnerFirstname(e.target.value)
                  }
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={`${getPartnerLabel()} Last Name`}
                  value={partnerLastname}
                  onChange={(e) =>
                    setPartnerLastname(e.target.value)
                  }
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder={`${getPartnerLabel()} Email`}
                  value={partnerEmail}
                  onChange={(e) =>
                    setPartnerEmail(e.target.value)
                  }
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder={`${getPartnerLabel()} Phone Number`}
                  value={partnerPhone}
                  onChange={(e) =>
                    setPartnerPhone(e.target.value)
                  }
                  required
                />
              </div>
            </div>
          </>
        )}

        {/* Profile Information */}
        <h3>Profile Information</h3>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">
              Upload Profile Image
            </label>

            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={(e) =>
                setProfileImage(e.target.files[0])
              }
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              YouTube Video Link (Optional)
            </label>

            <input
              type="url"
              className="form-control"
              placeholder="https://www.youtube.com/watch?v=..."
              value={youtubeLink}
              onChange={(e) =>
                setYoutubeLink(e.target.value)
              }
            />
          </div>
        </div>

        {/* Footer */}
        <p className="mt-4 text-center">
          We promise not to spam you. We will only
          contact you regarding hosting guests.
        </p>

        <div className="text-center py-3 mb-5">
          <button
            type="submit"
            className="faq-button"
          >
            Next
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Howtohost;