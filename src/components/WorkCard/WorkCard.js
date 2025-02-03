import React, { useState } from "react";
import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";
import styles from "./WorkCard.module.css";

const ThreeDCard = ({ date, company, description, tools, ...props }) => {
  const [transformStyle, setTransformStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseHoverEnter = () => {
    setIsHovered(true);
  };

  const handleMouseHoverLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const xAxis = (card.width / 2 - e.clientX + card.left) / 12;
    const yAxis = (e.clientY - card.top - card.height / 2) / 12;
    setTransformStyle({
      transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "rotateY(0deg) rotateX(0deg) scale(1)",
      transition: "transform 0.5s ease",
    });
  };

  return (
    <>
      <GlobalStyles
        styles={`         
                @keyframes rotate {
                    from {
                        transform: rotate(0);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
    
            `}
      />
      <Box
        onMouseEnter={handleMouseHoverEnter}
        onMouseLeave={handleMouseHoverLeave}
        sx={{
          perspective: "1000px",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
          color: "black",
          transform: isHovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      >
        <Box
          className={`inner ${styles.workCard}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          sx={{
            width: "100%",
            height: "100%",
            padding: "20px",
            borderRadius: "20px",
            transition:
              "transform 0.3s ease, background 0.3s ease, color 0.3s ease",
            transformStyle: "preserve-3d",
            position: "relative",
            zIndex: 1,
            ...transformStyle,
            "&:hover": {},
          }}
        >
          <div className={`flex`}>
            <div className="flex flex-col gap-2">
              <div>
                <h6 className={styles.date}>{date}</h6>
              </div>
              <h6 className={styles.company}>{company}</h6>
              <h6 className={styles.description}>{description}</h6>
              <div className="flex gap-2 flex-wrap">
                {tools.map((tool, index) => {
                  return (
                    <span key={index} className={styles.tool}>
                      {tool}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ThreeDCard;
