import React from 'react';

class HistoricalPieces extends React.Component {
  render() {
    return (
      <div className="historical-pieces">
        <div className="box1">
          <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          <div className="historical-info-wrapper">
            <div className="historical-info">
              <p className="sold-for">30 ETH</p> 
              <p className="generator">Awesome Generator</p> 
            </div>
            <div className="button no-border-button">See details</div>
          </div>
        </div>
        <div className="box2">
          <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          <div className="historical-info-wrapper">
            <div className="historical-info">
              <p className="sold-for">30 ETH</p> 
              <p className="generator">Awesome Generator</p> 
            </div>
            <div className="button no-border-button">See details</div>
          </div>
        </div>
        <div className="box3">
          <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          <div className="historical-info-wrapper">
            <div className="historical-info">
              <p className="sold-for">30 ETH</p> 
              <p className="generator">Awesome Generator</p> 
            </div>
            <div className="button no-border-button">See details</div>
          </div>
        </div>
      </div>
    );
  }
}


export default HistoricalPieces;
