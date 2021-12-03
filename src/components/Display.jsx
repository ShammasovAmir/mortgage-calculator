import appBg from '../assets/pexels-photo-280222.jpeg'
import Canvas from './Canvas'

const Display = () => {
  return (
    <div className="mg-page__right">
      <img src={appBg} className="image-panel" />
      <div className="mg-results">
        <div className="mg-results__container">
          <div className="mg-results__chart">{/* <Canvas /> */}</div>
          <div className="info">
            <h2 className="info__title">Mortgage Details</h2>
            <div className="info__details">
              <label className="info__label">Principal &amp; Interest</label>
              <span className="info__numbers info__numbers--principal">
                $1,400
              </span>
            </div>
            <div className="info__details">
              <label className="info__label">Property Taxes</label>
              <span className="info__numbers info__numbers--property_taxes">
                $234
              </span>
            </div>
            <div className="info__details">
              <label className="info__label">Home Insurance</label>
              <span className="info__numbers info__numbers--home_insurance">
                $78
              </span>
            </div>
            <div className="info__details">
              <label className="info__label">HOA</label>
              <span className="info__numbers info__numbers--hoa">$78</span>
            </div>
            <div className="info__total">
              <label className="info__label">Total</label>
              <span className="info__numbers info__numbers--total">$2788</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display
