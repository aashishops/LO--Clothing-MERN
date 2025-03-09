import React from "react";
import Facebook from "../assets/Facebook.png"; // Correct import for PNG
import Instagram from "../assets/Instagram.png"; // Correct import for PNG
import LinkedIn from "../assets/Linkedin.png"; // Correct import for PNG
import X from "../assets/X.png"; // Correct import for PNG
import Youtube from "../assets/Youtube.png"; // Correct import for PNG

export const Footer = () => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        gap: "40px", // Reduced gap for smaller screens
        padding: "40px 5%", // Responsive padding (5% on sides)
        position: "relative",
        width: "100%", // Full width
      }}
    >
      {/* Content Section */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column", // Stack vertically on small screens
          gap: "32px",
          width: "100%",
          maxWidth: "1200px", // Max width for larger screens
        }}
      >
        {/* Logo */}
        <div style={{ flex: 1, flexGrow: 1, position: "relative" }} />

        {/* Navbar */}
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexWrap: "wrap", // Wrap items on small screens
            gap: "16px", // Reduced gap for smaller screens
            justifyContent: "center", // Center items
          }}
        >
          <div
            style={{
              color: "#F0E130",
              fontFamily: "Roboto, Helvetica",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 600,
              letterSpacing: "0px",
              lineHeight: "150%",
              whiteSpace: "nowrap",
            }}
          >
            Home
          </div>
          <div
            style={{
              color: "#F0E130",
              fontFamily: "Roboto, Helvetica",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 600,
              letterSpacing: "0px",
              lineHeight: "150%",
              whiteSpace: "nowrap",
            }}
          >
            Products
          </div>
          <div
            style={{
              color: "#F0E130",
              fontFamily: "Roboto, Helvetica",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 600,
              letterSpacing: "0px",
              lineHeight: "150%",
              whiteSpace: "nowrap",
            }}
          >
            Contact Us
          </div>
          <div
            style={{
              color: "#F0E130",
              fontFamily: "Roboto, Helvetica",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 600,
              letterSpacing: "0px",
              lineHeight: "150%",
              whiteSpace: "nowrap",
            }}
          >
            About Us
          </div>
        </div>

        {/* Social Links */}
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "12px",
            justifyContent: "center", // Center items
          }}
        >
          <img
            src={Facebook}
            alt="Facebook"
            style={{ height: "24px", width: "24px" }}
          />
          <img
            src={Instagram}
            alt="Instagram"
            style={{ height: "24px", width: "24px" }}
          />
          <img
            src={X}
            alt="X"
            style={{ height: "24px", width: "24px" }}
          />
          <img
            src={LinkedIn}
            alt="LinkedIn"
            style={{ height: "24px", width: "24px" }}
          />
          <img
            src={Youtube}
            alt="Youtube"
            style={{ height: "24px", width: "24px" }}
          />
        </div>
      </div>

      {/* Credits Section */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "16px", // Reduced gap for smaller screens
          width: "100%",
          maxWidth: "1200px", // Max width for larger screens
        }}
      >
        {/* Divider */}
        <div
          style={{
            backgroundColor: "#F0E130",
            height: "1px",
            width: "100%", // Full width
          }}
        />

        {/* Credits Text */}
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column", // Stack vertically on small screens
            gap: "16px", // Reduced gap for smaller screens
            textAlign: "center", // Center text
          }}
        >
          <p
            style={{
              color: "#F0E130",
              fontFamily: "Roboto, Helvetica",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              letterSpacing: "0px",
              lineHeight: "150%",
              margin: 0, // Remove default margin
            }}
          >
            © 2024 LO. All rights reserved.
          </p>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap", // Wrap items on small screens
              gap: "16px", // Reduced gap for smaller screens
              justifyContent: "center", // Center items
            }}
          >
            <div
              style={{
                color: "#F0E130",
                fontFamily: "Roboto, Helvetica",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                letterSpacing: "0px",
                lineHeight: "150%",
                textDecoration: "underline",
                whiteSpace: "nowrap",
              }}
            >
              Privacy Policy
            </div>
            <div
              style={{
                color: "#F0E130",
                fontFamily: "Roboto, Helvetica",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                letterSpacing: "0px",
                lineHeight: "150%",
                textDecoration: "underline",
                whiteSpace: "nowrap",
              }}
            >
              Terms of Service
            </div>
            <div
              style={{
                color: "#F0E130",
                fontFamily: "Roboto, Helvetica",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                letterSpacing: "0px",
                lineHeight: "150%",
                textDecoration: "underline",
                whiteSpace: "nowrap",
              }}
            >
              Cookies Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};