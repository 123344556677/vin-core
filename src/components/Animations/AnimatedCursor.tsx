import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CursorAnimator: React.FC = () => {
  return (
    <div style={{ position: 'relative', zIndex: 10000 }}>
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="4, 11, 204"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          "select",
          "textarea",
          "button",
          ".link",
          ".custom", // Include the class directly as a clickable
        ]}
      />
    </div>
  );
};

export default CursorAnimator;
