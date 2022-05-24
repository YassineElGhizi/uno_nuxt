<template>
  <div class="col-11">
    <div class="card">
      <div class="card-body">
        <div class="card-title">représentation graphique de l'evolution de prix</div>
        <div id="Price-tracking-chart">

          <highchart :options="chartOptions"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceHistory",
  props : ['id_product', 'product_name','best_price_history','average_price_history'],
  watch:{
    product_name : function (){
      this.chartOptions.title.text = this.$props.product_name
    },
    best_price_history: function (){
      this.chartOptions.series[0].data = this.$props.best_price_history
    },
    average_price_history : function (){
      this.chartOptions.series[1].data = this.$props.average_price_history
    }
  },
  data: function (){
    return{
      chartOptions: {
        credits: {
          enabled: false
        },
        chart: {
          scrollablePlotArea: {
            minWidth: 700
          }
        },
        title: {
          text: this.$props.product_name
        },
        yAxis: {
          title: {text: 'Prix en Dirhame'},
          labels:{
            formatter:function() {
              return this.value.toString() + ' DH';
            },
          },
          gridLineColor: '#f8daf2'
        },
        xAxis:{
          labels: {
            staggerLines: 1,
            formatter: function () {
              switch (this.value){
                case 0:
                  return 'Jan'
                case 1:
                  return 'Feb'
                case 2:
                  return 'Mar'
                case 3:
                  return 'Apr'
                case 4:
                  return 'May'
                case 5:
                  return 'Jun'
                case 6:
                  return 'Jul'
                case 7:
                  return 'Aug'
                case 8:
                  return 'Sep'
                case 9:
                  return 'Oct'
                case 10:
                  return 'Nov'
                case 11:
                  return 'Dec'
              }
            }
          }},
        series: [
          {
            name:"Meilleur Prix de produit",
            data: this.$props.best_price_history,
            color: '#17B960',
            lineWidth:4,
            marker:{
              radius: 4
            }
          },
          {
            name:"Prix moyenne de produit",
            data: this.$props.average_price_history,
            color: '#C733A6',
            lineWidth:4,
            marker:{
              radius: 4
            }
          }],
        plotOptions: {
          series: {
            cursor: 'pointer',
          }
        },
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      }
    }
  },
}
</script>

<style scoped>
</style>
