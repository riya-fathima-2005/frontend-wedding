  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  import "../../assets/Style/Payment.css";

  const Payment = () => {
    const navigate = useNavigate();
    const [booking, setBooking] = useState(null);

    useEffect(() => {
      const data = sessionStorage.getItem("finalWedding");

      console.log("PAYMENT PAGE DATA:", data);
      

      if (data) {
        setBooking(JSON.parse(data));
      }
    }, []);

    const handlePayment = async () => {
      if (!booking) return;

      try {
        const paymentResponse = await axios.post(
          "https://wedding-book.onrender.com/create-payment/",
          {
            amount: booking.venuePrice || 0,
          }
        );

        const order = paymentResponse.data;

        const options = {
          key: "rzp_test_SyG00JPy3MbhJq",
          amount: order.amount,
          currency: order.currency,
          order_id: order.id,
          name: "Wedding Booking",
          description: booking.venueName,

          handler: async function (response) {
            try {
              // Save payment
              await axios.post(
                "https://wedding-book.onrender.com/save-payment/",
                {
                  payer_name: "Customer",
                  venue_name: booking.venueName,
                  amount: booking.venuePrice,
                  razorpay_order_id: order.id,
                  razorpay_payment_id:
                    response.razorpay_payment_id,
                }
              );

              const latestWedding = JSON.parse(
                sessionStorage.getItem("hostStep1")
              );

              const token = localStorage.getItem("token");

              // FORM DATA
              const weddingPayload = new FormData();

              weddingPayload.append(
                "role",
                latestWedding.role
              );

              weddingPayload.append(
                "firstname",
                latestWedding.firstname
              );

              weddingPayload.append(
                "lastname",
                latestWedding.lastname
              );

              weddingPayload.append(
                "partner_firstname",
                latestWedding.partnerFirstname
              );

              weddingPayload.append(
                "partner_lastname",
                latestWedding.partnerLastname
              );

              weddingPayload.append(
                "email",
                latestWedding.email
              );

              weddingPayload.append(
                "phone",
                latestWedding.phonenumber
              );

              weddingPayload.append(
                "wedding_date",
                booking.weddingDate
              );

              weddingPayload.append(
                "wedding_time",
                booking.weddingTime
              );

              weddingPayload.append(
                "food_type",
                booking.foodType
              );

              weddingPayload.append(
                "alcohol_served",
                booking.alcoholServed
              );

              weddingPayload.append(
                "language",
                booking.language
              );

              weddingPayload.append(
                "dress_code",
                booking.dressCode
              );

              weddingPayload.append(
                "description",
                booking.description
              );

              weddingPayload.append(
                "custom_venue",
                booking.venueName
              );

              weddingPayload.append(
                "venue_price",
                booking.venuePrice
              );

              weddingPayload.append(
                "manager_phone",
                booking.managerPhone
              );

              weddingPayload.append(
                "latitude",
                booking.latitude || ""
              );

              weddingPayload.append(
                "longitude",
                booking.longitude || ""
              );

              weddingPayload.append(
                "payment_status",
                "Success"
              );

              // IMAGE
            // IMAGE
  if (window.selectedProfileImage) {
    weddingPayload.append(
      "profile_image",
      window.selectedProfileImage
    );
  }

  // DEBUG CHECK
  console.log(
    "IMAGE CHECK:",
    window.selectedProfileImage
  );

  console.log("FORM DATA CONTENT:");

  for (let pair of weddingPayload.entries()) {
    console.log(
      pair[0],
      pair[1]
    );
  }

  console.log(
    "Sending to Django..."
  );

              const weddingResponse =
                await axios.post(
                  "https://wedding-book.onrender.com/api/weddings/",
                  weddingPayload,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type":
                        "multipart/form-data",
                    },
                  }
                );

              console.log(
                "SUCCESS:",
                weddingResponse.data
              );

             sessionStorage.removeItem("hostDetails");

alert("Payment Successful!");
navigate("/payment-success");

            } catch (error) {
              console.log(
                error.response?.data
              );

              alert(
                "Wedding save failed"
              );
            }
          },

          theme: {
            color: "#111827",
          },
        };

        const razorpay =
          new window.Razorpay(options);

        razorpay.open();

      } catch (error) {
        console.error(error);

        alert(
          "Failed to initiate payment"
        );
      }
    };

    if (!booking) {
      return <h2>No Booking Found</h2>;
    }

    return (
      <div className="payment-container">
        <div className="payment-card">

          <div className="payment-header">
            <h2>Payment Summary</h2>
            <p>
              Review your wedding booking details
            </p>
          </div>

          <div className="detail-row">
            <span>Venue Name</span>
            <strong>
              {booking.venueName ||
                "Not Selected"}
            </strong>
          </div>

          <div className="detail-row">
            <span>Wedding Date</span>
            <strong>
              {booking.weddingDate}
            </strong>
          </div>

          <div className="detail-row">
            <span>Wedding Time</span>
            <strong>
              {booking.weddingTime}
            </strong>
          </div>

          <div className="detail-row">
            <span>Food Type</span>
            <strong>
              {booking.foodType}
            </strong>
          </div>

          <div className="detail-row">
            <span>Language</span>
            <strong>
              {booking.language}
            </strong>
          </div>

          <div className="detail-row">
            <span>Dress Code</span>
            <strong>
              {booking.dressCode}
            </strong>
          </div>

          <div className="amount-box">
            <span>Total Amount</span>
            <h3>
              ₹ {booking.venuePrice || 0}
            </h3>
          </div>

          <button
            className="pay-btn"
            onClick={handlePayment}
          >
            Proceed to Pay
          </button>

          <p className="secure-text">
            🔒 Secure Payment Powered by Razorpay
          </p>

        </div>
      </div>
    );
  };

  export default Payment;