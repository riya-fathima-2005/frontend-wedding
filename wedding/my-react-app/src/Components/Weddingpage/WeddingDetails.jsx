import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../assets/Style/WeddingDetails.css";

const WeddingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const wedding = location.state;

console.log(wedding);

  if (!wedding) {
    return (
      <div className="container mt-5">
        <h3>No Wedding Details Found</h3>
      </div>
    );
  }

  return (
<div className="wedding-details-page1">

  <div className="wedding-profile-page">

    {/* Left Side Image */}
    <div>
     <div>
  {wedding.profile_image ? (
    <img
      src={wedding.profile_image}
      alt="Wedding"
      className="wedding-image1"
    />
  ) : (
    <img
      src="https://picsum.photos/400/500"
      alt="No image"
      className="wedding-image1"
    />
  )}
</div>

    </div>

    {/* Right Side Content */}
    <div className="wedding-body">

      <h2 className="wedding-title1">
        {wedding.firstname} & {wedding.partner_firstname}
      </h2>

      <div className="row">

        <div className="col-md-6">
          <div className="detail-box">
            <strong>Role</strong>
            {wedding.role}
          </div>

          <div className="detail-box">
            <strong>Email</strong>
            {wedding.email}
          </div>

          <div className="detail-box">
            <strong>Phone Number</strong>
            {wedding.phone}
          </div>

          <div className="detail-box">
  <strong>Manager Contact - Please Contact</strong>
  {wedding.manager_phone || "Not Added"}
</div>
          
        </div>

        <div className="col-md-6">
          <div className="detail-box">
            <strong>Wedding Date</strong>
            {wedding.wedding_date || "Not Added"}
          </div>

          <div className="detail-box">
            <strong>Venue</strong>
            {wedding.custom_venue || "Not Added"}
          </div>

          <div className="detail-box">
            <strong>Food Type</strong>
            {wedding.food_type || "Not Added"}
          </div>

          <div className="detail-box">
            <strong>Language</strong>
            {wedding.language || "Not Added"}
          </div>

          
{wedding.latitude && wedding.longitude && (
  <div className="mt-3" style={{paddingTop:"30px"}}>
    <a
      href={`https://www.google.com/maps?q=${wedding.latitude},${wedding.longitude}`}
      target="_blank"
      rel="noreferrer"
      className="btn btn-dark me-2"
    >
      Get Directions
    </a>
  </div>
)}


        </div>

      </div>

      <div className="description-box">
        <h4>Wedding Story</h4>
        <div>{wedding.description || "No Description Added"}</div>
      </div>

      {wedding.youtubeLink && (
        <div className="mt-4">
          <a
            href={wedding.youtube_link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-danger"
          >
            Watch Wedding Video
          </a>
        </div>
      )}

      <button
        className="btn btn-dark back-btn"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

    </div>

  </div>

</div>
  );
};

export default WeddingDetails;