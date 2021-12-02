import { useContext, useState, createContext } from 'react'

export const StateContext = createContext()

export const useStateContext = () => useContext(StateContext)

const AppProvider = ({ children }) => {
  /**Input State */
  const [price, setPrice] = useState(300000)
  const [loanYears, setLoanYears] = useState(30)
  const [downPayment, setDownPayment] = useState(10)
  const [interestRate, setInterestRate] = useState(2.99)
  const [propertyTax, setPropertyTax] = useState(1.2)
  const [homeInsurance, setHomeInsurance] = useState(1200)
  const [hoa, setHoa] = useState(1200)

  /**Output State */
  const [totalLoan, setTotalLoan] = useState(0)
  const [totalMonths, setTotalMonths] = useState(0)
  const [monthlyInterest, setMonthlyInterest] = useState(0)
  const [monthlyPrincipalInterest, setMonthlyPrincipalInterest] = useState(0)
  const [monthlyPropertyTaxes, setMonthlyPropertyTaxes] = useState(0)
  const [monthlyHomeInsurance, setMonthlyHomeInsurance] = useState(0)
  const [monthlyHoa, setMonthlyHoa] = useState(0)
  const [monthlyTotal, setMonthlyTotal] = useState(0)

  const getNumber = (str) => Number(str.replace(/[^0-9\.-]+/g, ''))

  /* Handle Inputs Start */
  const handlePriceInput = (e) => setPrice(getNumber(e.target.value))

  const handleLoanYearsInput = (e) => setLoanYears(getNumber(e.target.value))

  const handleDownPaymentsInput = (e) => setDownPayment(e.target.value)

  const handleInterestRateInput = (e) => setInterestRate(e.target.value)

  const handlePropertyTaxInput = (e) => setPropertyTax(e.target.value)

  const handleHomeInsuranceInput = (e) => setHomeInsurance(e.target.value)

  const handleHoaInput = (e) => setHoa(e.target.value)
  /* Handle Inputs End */

  return (
    <StateContext.Provider
      value={{
        price,
        setPrice,
        loanYears,
        setLoanYears,
        downPayment,
        setDownPayment,
        interestRate,
        setInterestRate,
        propertyTax,
        setPropertyTax,
        homeInsurance,
        setHomeInsurance,
        hoa,
        setHoa,
        totalLoan,
        setTotalLoan,
        totalMonths,
        setTotalMonths,
        monthlyInterest,
        setMonthlyInterest,
        monthlyPrincipalInterest,
        setMonthlyPrincipalInterest,
        monthlyPropertyTaxes,
        setMonthlyPropertyTaxes,
        monthlyHomeInsurance,
        setMonthlyHomeInsurance,
        monthlyHoa,
        setMonthlyHoa,
        monthlyTotal,
        setMonthlyTotal,
        handlePriceInput,
        handleLoanYearsInput,
        handleDownPaymentsInput,
        handleInterestRateInput,
        handlePropertyTaxInput,
        handleHomeInsuranceInput,
        handleHoaInput,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default AppProvider
