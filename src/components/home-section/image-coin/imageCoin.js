import { React, useState } from "react";
import { CoinStyled } from "./coin.style";

const Coin = () => {
  const [image, setImage] = useState(
    "gs://finstagram-3585f.appspot.com/FirebasePixelFace.png"
  );

  return (
    <>
      <CoinStyled>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://i.ibb.co/zsCKb6K/pixelface2.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <img src="https://i.ibb.co/3kN8Zxr/Screenshot-79.png" alt="" />
            </div>
          </div>
        </div>
      </CoinStyled>
    </>
  );
};

export default Coin;
