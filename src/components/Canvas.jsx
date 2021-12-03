import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { useEffect } from 'react'
import { useStateContext } from '../AppProvider'

const Canvas = () => {
  const { chartData, setChartData } = useStateContext()

  return (
    <Doughnut
      data={chartData}
      width={400}
      height={40}
      options={{ animation: { duration: 0 } }}
    />
  )
}

export default Canvas
