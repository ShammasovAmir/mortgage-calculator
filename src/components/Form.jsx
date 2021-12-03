import { useStateContext } from '../AppProvider'

const Form = () => {
  const {
    price,
    loanYears,
    downPayment,
    interestRate,
    propertyTax,
    homeInsurance,
    hoa,
    handlePriceInput,
    handleLoanYearsInput,
    handleDownPaymentsInput,
    handleInterestRateInput,
    handlePropertyTaxInput,
    handleHomeInsuranceInput,
    handleHoaInput,
    handleFormSubmission,
  } = useStateContext()

  return (
    <div className="mg-page__left">
      <form onSubmit={handleFormSubmission}>
        <div className="forms-two-col">
          <div className="form-group">
            <label className="form-group__label">Price(USD)</label>
            <input
              type="text"
              name="price"
              className="form-group__textInput"
              value={price}
              onChange={handlePriceInput}
            />
          </div>
          <div className="form-group">
            <label className="form-group__label">Loan years</label>
            <input
              type="text"
              name="loan_years"
              className="form-group__textInput"
              value={loanYears}
              onChange={handleLoanYearsInput}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-group__label">Down payment</label>
          <div className="form-group__range-group">
            <div className="form-group__range-slide-container">
              <input
                name="down_payment"
                className="form-group__range-slide"
                type="range"
                value={downPayment}
                min={0}
                max={90}
                step={1}
                onChange={handleDownPaymentsInput}
              />
              <div className="form-group__range-values">
                <span className="form-group__range-start">0%</span>
                <span className="form-group__range-end">90%</span>
              </div>
            </div>
            <span className="form-group__range-total total__down_payment">
              {downPayment}%
            </span>
          </div>
        </div>
        <div className="form-group">
          <label className="form-group__label">Interest rate</label>
          <div className="form-group__range-group">
            <div className="form-group__range-slide-container">
              <input
                name="interest_rate"
                className="form-group__range-slide"
                type="range"
                value={interestRate}
                min={0}
                max={8}
                step={0.01}
                onChange={handleInterestRateInput}
              />
              <div className="form-group__range-values">
                <span className="form-group__range-start">0%</span>
                <span className="form-group__range-end">8%</span>
              </div>
            </div>
            <span className="form-group__range-total total__interest_rate">
              {interestRate}%
            </span>
          </div>
        </div>
        <div className="form-group">
          <label className="form-group__label">Property taxes/yr</label>
          <div className="form-group__range-group">
            <div className="form-group__range-slide-container">
              <input
                name="property_tax"
                className="form-group__range-slide"
                type="range"
                value={propertyTax}
                min={0}
                max={8}
                step={0.01}
                onChange={handlePropertyTaxInput}
              />
              <div className="form-group__range-values">
                <span className="form-group__range-start">0</span>
                <span className="form-group__range-end">3%</span>
              </div>
            </div>
            <span className="form-group__range-total total__property_tax">
              {propertyTax}%
            </span>
          </div>
        </div>
        <div className="form-group">
          <label className="form-group__label">Home Insurance/yr</label>
          <div className="form-group__range-group">
            <div className="form-group__range-slide-container">
              <input
                name="home_insurance"
                className="form-group__range-slide"
                type="range"
                value={homeInsurance}
                min={0}
                max={5000}
                step={10}
                onChange={handleHomeInsuranceInput}
              />
              <div className="form-group__range-values">
                <span className="form-group__range-start">0</span>
                <span className="form-group__range-end">5000</span>
              </div>
            </div>
            <span className="form-group__range-total total__home_insurance">
              {homeInsurance}
            </span>
          </div>
        </div>
        <div className="form-group">
          <label className="form-group__label">HOA/yr</label>
          <div className="form-group__range-group">
            <div className="form-group__range-slide-container">
              <input
                name="hoa"
                className="form-group__range-slide"
                type="range"
                value={hoa}
                min={0}
                max={5000}
                step={10}
                onChange={handleHoaInput}
              />
              <div className="form-group__range-values">
                <span className="form-group__range-start">0</span>
                <span className="form-group__range-end">5000</span>
              </div>
            </div>
            <span className="form-group__range-total total__hoa">{hoa}</span>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="form-group__button">
            Get Results
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
