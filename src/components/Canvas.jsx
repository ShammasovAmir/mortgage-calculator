import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { useStateContext } from '../AppProvider'

// Chart.register(ArcElement)

const Canvas = () => {
  const {
    monthlyPrincipalInterest,
    monthlyPropertyTaxes,
    monthlyHomeInsurance,
    monthlyHoa,
  } = useStateContext()

  return (
    <Doughnut
      data={{
        labels: [
          'Principal & Interest',
          'Property Tax',
          'Home Insurance',
          'HOA',
        ],
        datasets: [
          {
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
        ],
      }}
      width={400}
      height={400}
      redraw={true}
      options={{
        plugins: {
          animation: {
            duration: 0,
          },
        },
      }}
    />
  )
}

export default Canvas
