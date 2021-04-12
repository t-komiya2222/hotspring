$(document).ready(function(){
    hotspringriyoushachart()
});

function hotspringriyoushachart(){
let ctx = document.getElementById("hotspringchart");
    let myChart = new Chart(ctx, {
      type: 'horizontalBar',
	  data: {
		  		labels: [ "北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井",
	  					"山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島",
	  					"香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"],
   				datasets: [
					   {
						label: "人",
						data:[12969276,1458816,2193907,2448890,1431160,2173616,4096248,759361,4559698,5713802,456374,3161028,358822,5672933,3645020,1230382,
						3650372,1394812,3991221,7457005,2535493,11045967,1809948,2649557,774984,1578655,2330442,4872761,587211,3868593,1170853,1185107,782807,
						1127903,1456017,406557,1313072,1375156,558263,1321550,771304,1403171,2787774,5753400,876990,2032114,1330690],
						backgroundColor: "rgba(219,39,91,0.5)"
						}
				]
	},
	options: {
        title: {
            display: true,
            fontsize:12,
            fontColor: "white",
            text:"令和元年温泉利用者数"
        },
        legend: {
            labels:{
            fontColor: "white"
            }
        },
		scales: {
            yAxes: [{
                scaleLabel: {
                    fontSize: 15,
                    fontColor: "white"
                },
                ticks: {
                    fontSize: 10,
                    fontColor: "white"
                },
                gridLines: {
                        color: "white"
                    }
            }],
			xAxes: [{
			  ticks: {
				suggestedMax: 15000000,
				suggestedMin: 0,
				stepSize: 5000000,
                fontSize: 8,
                fontColor: "white",
				callback: function(value, index, values){
				  return  value
				}
			  },
              gridLines: {
                        color: "white"
                    }
			}]
		  }
	}
})
};