import React from 'react';
import './DataDisplay.css';

function DataDisplay({ data }) {
  return (
    <div className="data-display">
      {data.pairs.map((pair, index) => (
        <div key={index} className="data-box">
          <h2 className="box-heading">Basic Info</h2>
          <div className="box-item">
            <span className="item-label">Pair Created At:</span> #{pair.pairCreatedAt}
          </div>
          <div className="box-item">
            <span className="item-label">Symbol:</span> {pair.baseToken.symbol}
          </div>
          <div className="box-item">
            <span className="item-label">DEX ID:</span> {pair.dexId}
          </div>
          <div className="box-item">
            <span className="item-label">Pair Address:</span> #{pair.pairAddress}
          </div>
          <div className="box-item">
            <span className="item-label">Base Token:</span>
            <div className="sub-item">
              <span className="sub-item-label">Address:</span> {pair.baseToken.address}
              <span className="sub-item-label">Name:</span> {pair.baseToken.name}
              <span className="sub-item-label">Symbol:</span> {pair.baseToken.symbol}
            </div>
          </div>
          <div className="box-item">
            <span className="item-label">Quote Token:</span>
            <div className="sub-item">
              <span className="sub-item-label">Address:</span> {pair.quoteToken.address}
              <span className="sub-item-label">Name:</span> {pair.quoteToken.name}
              <span className="sub-item-label">Symbol:</span> {pair.quoteToken.symbol}
            </div>
          </div>
          <div className="box-item">
            <span className="item-label">Price Native:</span> {pair.priceNative}
            <span className="item-label">Price USD:</span> {pair.priceUsd}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataDisplay;
