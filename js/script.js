const graficoLinha = document.getElementById('GraficoLinha');
const graficoBarra = document.getElementById('graficoBarra');

new Chart(graficoLinha, {
  type: 'line',
  data: {
    labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    datasets: [{
      label: 'Temperatura',
      data: [30, 29, 28, 25, 22, 23],
      borderWidth: 1,
      borderColor: '#FF6384',
      backgroundColor:'#FF6384'

    },
  {
    label: 'Umidade',
      data: [80, 82, 80, 85, 80, 83],
      borderWidth: 1,
      borderColor: '#36A2EB',
      backgroundColor:'#36A2EB'
  }
  ]

  },
  
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
new Chart(graficoBarra, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Temperatura Média',
      data: [22, 24, 27, 23, 20, 19],
      borderWidth: 1,
      borderColor: '#FF6384',
      backgroundColor:'#FF6384'
    },
    {
      label: 'Umidade Média',
      data: [90, 89, 93, 87, 88, 82],
      borderWidth: 1,
      borderColor: '#36A2EB',
      backgroundColor:'#36A2EB'
    }
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});