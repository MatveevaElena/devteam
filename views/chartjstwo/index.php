<?php
    $this->title = 'My first chart';

$script = <<< JS
 var densityCanvas = document.getElementById("densityChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
  label: 'Причина отчисления',
  data: [5122, 1193, 228, 100, 89],
  backgroundColor: [
    'rgba(0, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
  ],
  borderColor: [
    'rgba(0, 99, 132, 1)',
    'rgba(30, 99, 132, 1)',
    'rgba(60, 99, 132, 1)',
    'rgba(90, 99, 132, 1)',
    'rgba(120, 99, 132, 1)',
  ],
  borderWidth: 2,
  hoverBorderWidth: 0
};

var chartOptions = {
  scales: {
    yAxes: [{
      barPercentage: 0.5
    }]
  },
  elements: {
    rectangle: {
      borderSkipped: 'left',
    }
  }
};

var barChart = new Chart(densityCanvas, {
  type: 'horizontalBar',
  data: {
    labels: ["С окончанием", "С академической неуспеваемостью", "С отчислением по собственному желанию", "Не выполневший обязанностей по добросовестному освоению образовательной программы и выполнению учебного плана", "С переводом в другую образовательную организацию"],
    datasets: [densityData],
  },
  options: chartOptions
});

JS;
$this->registerJs($script, yii\web\View::POS_READY); 
?>
<div id="my-chart">
    <h1><?= $this->title ?></h1>
    <canvas id="densityChart" width="600" height="400"></canvas>
</div>