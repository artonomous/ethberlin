import React from "react";
import RenderArtModal from "./RenderArtModal";

class HistoricalPieces extends React.Component {
  render() {
    return (
      <div className="historical-pieces">
        <div className="box1">
          <RenderArtModal url="QmX3jVktEkivu43kod5pGib3BL7ZBcCSL2CwrgN3JNnrfV/upload.p5js" />
          <div className="historical-info-wrapper">
            <div className="historical-info">
              <p className="sold-for">10 ETH</p>
              <p className="generator">a s t h e t i c</p>
            </div>
            <div className="button no-border-button">[details]</div>
          </div>
        </div>

        <div className="box2">
          <RenderArtModal url="QmPUZcu9KzdSmew2hmBKwxDj7B1HbkWGUyoDYCy4PpxkKy/upload.p5js" />
          <div className="historical-info-wrapper">
            <div className="historical-info">
              <p className="sold-for">20 ETH</p>
              <p className="generator">a/w/e/s/o/m/e</p>
            </div>
            <div className="button no-border-button">[details]</div>
          </div>
        </div>

        <div className="box3">
          <RenderArtModal url="QmSJHBgXiEqCndjfkeJCY2EhuTsLG1T9Ai88ReB8dXQavx/upload.p5js" />
          <div className="historical-info-wrapper">
            <div className="historical-info">
              <p className="sold-for">2 ETH</p>
              <p className="generator">///gen\\\</p>
            </div>
            <div className="button no-border-button">[details]</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HistoricalPieces;
