import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/Style/Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("weddingDetails");
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
            // save payment
            await axios.post(
              "https://wedding-book.onrender.com/save-payment/",
              {
                payer_name: "Customer",
                venue_name: booking.venueName,
                amount: booking.venuePrice,
                razorpay_order_id: order.id,
                razorpay_payment_id: response.razorpay_payment_id,
              }
            );

            const allWeddings =
              JSON.parse(localStorage.getItem("allWeddings")) || [];

            const latestWedding =
              allWeddings[allWeddings.length - 1];

            const token = localStorage.getItem("token");

            // save wedding
            const weddingResponse = await axios.post(
              "https://wedding-book.onrender.com/api/weddings/",
              {
                role: latestWedding.role,
                firstname: latestWedding.firstname,
                lastname: latestWedding.lastname,
                partner_firstname: latestWedding.partnerFirstname,
                partner_lastname: latestWedding.partnerLastname,
                email: latestWedding.email,
                phone: latestWedding.phone,

                wedding_date: latestWedding.weddingDate,
                wedding_time: latestWedding.weddingTime,

                food_type: latestWedding.foodType,
                alcohol_served: latestWedding.alcoholServed,
                language: latestWedding.language,
                dress_code: latestWedding.dressCode,
                description: latestWedding.description,

                custom_venue: latestWedding.venueName,
                venue_price: latestWedding.venuePrice,

                manager_phone: latestWedding.managerPhone,
                latitude: latestWedding.latitude,
                longitude: latestWedding.longitude,

                payment_status: "Success",
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            console.log("Wedding Saved:", weddingResponse.data);

            alert("Payment Successful!");
            navigate("/payment-success");

          } catch (error) {
            console.log("BACKEND ERROR:", error.response?.data);   // IMPORTANT
            console.error(error);
            alert("Wedding save failed");
          }
        },

        theme: {
          color: "#111827",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Failed to initiate payment");
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
          <p>Review your wedding booking details</p>
        </div>

        <div className="detail-row">
          <span>Venue Name</span>
          <strong>{booking.venueName || "Not Selected"}</strong>
        </div>

        <div className="detail-row">
          <span>Wedding Date</span>
          <strong>{booking.weddingDate}</strong>
        </div>

        <div className="detail-row">
          <span>Wedding Time</span>
          <strong>{booking.weddingTime}</strong>
        </div>

        <div className="detail-row">
          <span>Food Type</span>
          <strong>{booking.foodType}</strong>
        </div>

        <div className="detail-row">
          <span>Language</span>
          <strong>{booking.language}</strong>
        </div>

        <div className="detail-row">
          <span>Dress Code</span>
          <strong>{booking.dressCode}</strong>
        </div>

        <div className="amount-box">
          <span>Total Amount</span>
          <h3>₹ {booking.venuePrice || 0}</h3>
        </div>

        <button className="pay-btn" onClick={handlePayment}>
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