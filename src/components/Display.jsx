import { useStateContext } from '../AppProvider'
import appBg from '../assets/pexels-photo-280222.jpeg'
import Canvas from './Canvas'

const Display = () => {
  const {
    chartActive,
    monthlyPrincipalInterest,
    monthlyPropertyTaxes,
    monthlyHomeInsurance,
    monthlyHoa,
    monthlyTotal,
  } = useStateContext()

  return (
    <div
      className={`mg-page__right ${
        chartActive ? 'mg-page__right--animate' : ''
      }`}
    >
      <img src={appBg} className="image-panel" />
      <div className="mg-results">
        <div className="mg-results__container">
          <div className="mg-results__chart">
            <Canvas />
          </div>
          <div className="info">
            <h2 className="info__title">Mortgage Details</h2>
            <div className="info__details">
              <label className="info__label">Principal &amp; Interest</label>
              <span className="info__numbers info__numbers--principal">
                {`$${monthlyPrincipalInterest}`}
              </span>
            </div>
            <div className="info__details">
              <label className="info__label">Property Taxes</label>
              <span className="info__numbers info__numbers--property_taxes">
                {`$${monthlyPropertyTaxes}`}
              </span>
            </div>
            <div className="info__details">
              <label className="info__label">Home Insurance</label>
              <span className="info__numbers info__numbers--home_insurance">
                {`$${monthlyHomeInsurance}`}
              </span>
            </div>
            <div className="info__details">
              <label className="info__label">HOA</label>
              <span className="info__numbers info__numbers--hoa">{`$${monthlyHoa}`}</span>
            </div>
            <div className="info__total">
              <label className="info__label">Total</label>
              <span className="info__numbers info__numbers--total">{`$${monthlyTotal}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display
