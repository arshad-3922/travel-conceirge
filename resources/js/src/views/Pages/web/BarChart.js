import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#2DCEE3',
          data: [3,5,7,9,14,40,50,60,35,25,17,14,10,5],
        },
		{
			label: 'Data Two',
			backgroundColor: '#6f42c1',
			data: [3,5,7,9,14,55,65,70,50,30,18,14,10,2],	
		}
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}