import { React } from "react";
import { CoinStyled } from "./coin.style";

const Coin = () => {
  return (
    <>
      <CoinStyled>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-3ad1f.appspot.com/o/pixelface2.png?alt=media&token=7a494d06-b53b-4689-bb41-683c5041abf8"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-3ad1f.appspot.com/o/Screenshot-79.png?alt=media&token=a8b1d2ea-f424-43db-b3ca-ac4bd5a81bf6"
                alt=""
              />
            </div>
          </div>
        </div>
      </CoinStyled>
    </>
  );
};

export default Coin;
