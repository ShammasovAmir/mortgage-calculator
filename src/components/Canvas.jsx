import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useStateContext } from '../AppProvider'

Chart.register(ArcElement)

const Canvas = () => {
  const { chartData } = useStateContext()

  return (
    <Doughnut
      data={chartData}
      width={400}
      height={400}
      options={{ animation: { duration: 0 } }}
    />
  )
}

export default Canvas
