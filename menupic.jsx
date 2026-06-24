import React, { useState } from "react";

export default function MenuPic() {
  const [flipped, setFlipped] = useState(false);
  const [src, setSrc] = useState("menu.jpg");

  function handleClick() {
    setFlipped(true);
    setSrc("menu-alt.jpg"); // replace with the image to show on flip
    // wait for the flip animation, then go to the new page
    setTimeout(() => {
      window.location.href = "/newpage"; // replace with your target path
    }, 600); // matches the CSS transition duration
  }

  return (
    <div className="menu-pic">
      <style>{`
        .menu-pic img {
          width: 100%;
          max-width: 480px;
          display: block;
          backface-visibility: hidden;
          transition: transform 600ms;
        }
        .menu-pic img.flipped {
          transform: rotateY(180deg);
        }
        .menu-pic button {
          margin-top: 8px;
        }
      `}</style>
       <img src={src} alt="Menu" className={flipped ? "flipped" : ""} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}