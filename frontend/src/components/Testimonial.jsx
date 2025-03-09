import React from "react";
import PlaceholderLogo from "../assets/Placeholder_Logo.png";
import stars from "../assets/stars.png";

export const Testimonial = () => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Added for vertical centering
        minHeight: "100vh", // Full viewport height
        padding: "52px 34px",
        position: "relative",
        width: "100%", // Changed from fixed width
      }}
    >
      {/* Content Section */}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          maxWidth: "768px", // Changed from fixed width
          width: "100%", // Responsive width
          margin: "0 auto", // Horizontal centering
        }}
      >
        {/* Stars - Repeated 5 times */}
        <div style={{ display: "flex", gap: "8px" }}>
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              className="stars"
              alt="Star"
              src={stars}
              style={{ width: "15px", height: "15px" }} // Adjust size as needed
            />
          ))}
        </div>

        {/* Rest of the component remains the same */}
        <p
          style={{
            alignSelf: "stretch",
            color: "#F0E130",
            fontFamily: "Roboto, Helvetica",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            letterSpacing: "0px",
            lineHeight: "139.9999976158142%",
            position: "relative",
            textAlign: "center",
          }}
        >
          “Lo never misses! Every time I order, the quality is amazing, and the
          designs are exactly my style. The graphics are bold, the fit is
          perfect, and I always get asked where I got my shirts from. Definitely
          my favorite spot for unique streetwear!”
        </p>

        {/* Avatar Section */}
        <div
          style={{
            alignItems: "center",
            display: "inline-flex",
            flex: "0 0 auto",
            gap: "20px",
            position: "relative",
          }}
        >
          {/* Avatar Content */}
          <div
            style={{
              alignItems: "flex-start",
              display: "inline-flex",
              flex: "0 0 auto",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "#F0E130",
                fontFamily: "Roboto, Helvetica",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                letterSpacing: "0px",
                lineHeight: "150%",
                marginTop: "-1px",
                position: "relative",
                whiteSpace: "nowrap",
                width: "fit-content",
              }}
            >
              John Smith
            </div>
            <div
              style={{
                color: "#F0E130",
                fontFamily: "Roboto, Helvetica",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                letterSpacing: "0px",
                lineHeight: "150%",
                position: "relative",
                whiteSpace: "nowrap",
                width: "fit-content",
              }}
            >
              Reviewer, Streetssmart
            </div>
          </div>

          <img
            className="placeholder-logo"
            src={PlaceholderLogo}
            alt="Placeholder Logo"
            style={{
              height: "48px",
              position: "relative",
              width: "120px",
            }}
          />
        </div>
      </div>
    </div>
  );
};