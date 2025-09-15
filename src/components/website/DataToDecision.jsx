import React from 'react';
import '../../style/DataToDecision.css';

const DataToDecision = () => {
  return (
    <div className="DataToDecision-section__container">
      <div className="DataToDecision-section__content">
        <h2 className="DataToDecision-section__header">
          Designed for accuracy, delivered with speed
        </h2>
        
        <div className="DataToDecision-section__main-box">
          <div className="DataToDecision-section__left-box">
            <div className="DataToDecision-section__left-top-box">
              <h3 className="DataToDecision-section__left-top-box__header">Smarter decisions</h3>
              <p className="DataToDecision-section__left-top-box__text">
                Solar, grid, land, and infrastructure — all in one place.
              </p>
            </div>
            <div className="DataToDecision-section__left-image-box">
              <div className="DataToDecision-section__image-placeholder">
               <img 
              src="src/assets/aga.avif" 
              alt="Binary code with 100% Private badge" 
             
            />
              </div>
            </div>
          </div>

          <div className="DataToDecision-section__right-box">
            <div className="DataToDecision-section__right-top-box">
            
                <div className="DataToDecision-box__text-content">
                  <h3 className="DataToDecision-box__header">Your criteria</h3>
                  <p className="DataToDecision-box__paragraph">
                   Set weights, choose factors, and review results on completion.
                  </p>
                </div>
                
                  <div className="DataToDecision-section__image-placeholder DataToDecision-section__image-placeholder--small">
                    <img src="src/assets/sdffag.avif" alt="File structure diagram"/>
                  </div>
             
              
            </div>

            <div className="DataToDecision-section__right-bottom-box">
              
                <div className="DataToDecision-box__text-content">
                  <h3 className="DataToDecision-box__header">Transparent by default</h3>
                  <p className="DataToDecision-box__paragraph">
                   Every score is backed by trusted data.
                  </p>
                </div>
                  <div className="DataToDecision-section__image-placeholder DataToDecision-section__image-placeholder--medium">
                     <img src="src/assets/sdds.avif" alt="Binary code with 100% Private badge" />
                  </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataToDecision;