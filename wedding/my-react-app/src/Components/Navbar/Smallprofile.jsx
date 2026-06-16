import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../../assets/Style/Smallprofile.css";

const Smallprofile = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: ""
  });

  const [loading, setLoading] =
    useState(true);

  const [currentPassword,
    setCurrentPassword] =
    useState("");

  const [newPassword,
    setNewPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const token =
          localStorage.getItem("token");

        if (!token) {

          setLoading(false);

          return;

        }

        const response =
          await fetch(

            `${import.meta.env.VITE_API_URL}/api/profile/`,

            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }

          );

        const data =
          await response.json();

        setUser({

          username:
            data.username || "",

          email:
            data.email || "",

          phone:
            data.phone || "",

        });

      } catch (error) {

        console.log(
          "Profile Error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchProfile();

  }, []);

  // CHANGE PASSWORD
  const handlePasswordChange =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await fetch(

            `${import.meta.env.VITE_API_URL}/api/change-password/`,

            {
              method: "POST",

              headers: {

                "Content-Type":
                  "application/json",

                Authorization:
                  `Bearer ${token}`

              },

              body: JSON.stringify({

                current_password:
                  currentPassword,

                new_password:
                  newPassword,

                confirm_password:
                  confirmPassword

              })

            }

          );

        const data =
          await response.json();

if (response.ok) {

  alert(
    "Password Updated Successfully ✅ Please login again."
  );

  // CLEAR TOKENS
  localStorage.removeItem("token");
  localStorage.removeItem("refresh");
  localStorage.removeItem("user");

  // REDIRECT LOGIN
  window.location.href = "/login";

} else {

          alert(
            data.message
          );

        }

      } catch (error) {

        console.log(error);

        alert(
          "Something Went Wrong ❌"
        );

      }

    };

  if (loading) {

    return (

      <div className="profile-page">

        <h3>
          Loading...
        </h3>

      </div>

    );

  }

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">

          <FaUserCircle
            size={120}
            className="profile-avatar"
          />

          <h2>
            {user.username || "User"}
          </h2>

          <p>
            Wedding Planner Account
          </p>

        </div>

        <div className="profile-body">

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              value={user.username}
              readOnly
            />

          </div>

          <div className="form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              value={user.email}
              readOnly
            />

          </div>

          <div className="form-group">

            <label>
              Phone Number
            </label>

            <input
              type="text"
              value={user.phone}
              readOnly
            />

          </div>

          <hr />

          <h4>
            Change Password
          </h4>

          <div className="form-group">

            <label>
              Current Password
            </label>

            <input
              type="password"
              value={currentPassword}
              onChange={(e) =>
                setCurrentPassword(
                  e.target.value
                )
              }
              placeholder="Enter current password"
            />

          </div>

          <div className="form-group">

            <label>
              New Password
            </label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
              placeholder="Enter new password"
            />

          </div>

          <div className="form-group">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              placeholder="Confirm new password"
            />

          </div>

          <button
            className="profile-btn"
            onClick={
              handlePasswordChange
            }
          >

            Save Changes

          </button>

        </div>

      </div>

    </div>

  );

};

export default Smallprofile;