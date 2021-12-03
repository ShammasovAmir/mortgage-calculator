import { useContext, useState, createContext, useEffect } from 'react'

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

  /**Chart State*/
  const [chartData, setChartData] = useState({
    labels: ['Principal & Interest', 'Property Tax', 'Home Insurance', 'HOA'],
    datasets: {
      label: '# of Votes',
      data: [
        monthlyPrincipalInterest,
        monthlyPropertyTaxes,
        monthlyHomeInsurance,
        monthlyHoa,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  })

  useEffect(() => {
    // Calculate data
    calculateData()
  }, [
    price,
    loanYears,
    downPayment,
    interestRate,
    propertyTax,
    homeInsurance,
    hoa,
  ])

  const getNumber = (str) => Number(str.replace(/[^0-9\.-]+/g, ''))

  /* Handle Inputs Start */
  const handlePriceInput = (e) => setPrice(getNumber(e.target.value))

  const handleLoanYearsInput = (e) => setLoanYears(getNumber(e.target.value))

  const handleDownPaymentsInput = (e) =>
    setDownPayment(getNumber(e.target.value))

  const handleInterestRateInput = (e) =>
    setInterestRate(getNumber(e.target.value))

  const handlePropertyTaxInput = (e) =>
    setPropertyTax(getNumber(e.target.value))

  const handleHomeInsuranceInput = (e) =>
    setHomeInsurance(getNumber(e.target.value))

  const handleHoaInput = (e) => setHoa(getNumber(e.target.value))
  /* Handle Inputs End */

  const calculateData = () => {
    setTotalLoan(parseFloat((price - price * (downPayment / 100)).toFixed(2)))
    setTotalMonths(parseFloat((loanYears * 12).toFixed(2)))
    setMonthlyInterest(parseFloat((interestRate / 100 / 12).toFixed(2)))
    setMonthlyPrincipalInterest(
      parseFloat(
        (
          (price - price * (downPayment / 100)) *
          (((interestRate / 100 / 12) *
            (1 + interestRate / 100 / 12) ** (loanYears * 12)) /
            ((1 + interestRate / 100 / 12) ** (loanYears * 12) - 1))
        ).toFixed(2)
      )
    )
    setMonthlyPropertyTaxes(
      parseFloat(((price * (propertyTax / 100)) / 12).toFixed(2))
    )
    setMonthlyHomeInsurance(parseFloat((homeInsurance / 12).toFixed(2)))
    setMonthlyHoa(parseFloat((hoa / 12).toFixed()))
    setMonthlyTotal(
      parseFloat(
        (
          parseFloat(
            (
              (price - price * (downPayment / 100)) *
              (((interestRate / 100 / 12) *
                (1 + interestRate / 100 / 12) ** (loanYears * 12)) /
                ((1 + interestRate / 100 / 12) ** (loanYears * 12) - 1))
            ).toFixed(2)
          ) +
          parseFloat(((price * (propertyTax / 100)) / 12).toFixed(2)) +
          parseFloat(homeInsurance / 12) +
          parseFloat(hoa / 12)
        ).toFixed(2)
      )
    )
  }

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
        chartData,
        setChartData,
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
