//ボタンが押下されたら表示、非表示を切り替える
function switching(getid){
    
    let setid = document.getElementById(getid).id;

    switch(setid){
        case"usrbtn":
        $('#usersmap').show();
        $('#hotspringriyoushachart').show();
        $('#hotspringsmap').hide();
        $('#hotspringgensenchart').hide();
            break;

        case"htsprngbtn":
        $('#hotspringsmap').show();
        $('#hotspringgensenchart').show();
        $('#usersmap').hide();
        $('#hotspringriyoushachart').hide();
            break;

    }
};

//読み込み時処理
$(document).ready(function defaultpage(){
    hotspringriyousha();
    hotspringgensen();
    hotspringriyoushachart();
    hotspringgensenchart();
    $('#hotspringsmap').hide();
    $('#hotspringgensenchart').hide();
});

//利用者数のヒートマップ表示
function hotspringriyousha(){
    $('#usersmap').jmap({
    skew: '10',
    showHeatmap: true,
    heatmapLabelUnit: '人',
    heatmapType: 'OrRd',
    showHeatlabel: true,
    backgroundColor: '#B5B5B3',
    prefectureLineGap: '1px',
    prefectureLineWidth: '0px',
    onSelect: function(e, data) {
        alert('令和元年の利用者は：%d 人です。'.replace('%d', (data.option.number).toLocaleString()));
    },
    areas: [
    {code: 1,name: "北海道",number: 12969276},
    {code: 2,name: "青森",number: 1458816},
    {code: 3,name: "岩手",number: 2193907},
    {code: 4,name: "宮城",number: 2448890},
    {code: 5,name: "秋田",number: 1431160},
    {code: 6,name: "山形",number: 2173616},
    {code: 7,name: "福島",number: 4096248},
    {code: 8,name: "茨城",number: 759361},
    {code: 9,name: "栃木",number: 4559698},
    {code: 10,name: "群馬",number: 5713802},
    {code: 11,name: "埼玉",number: 456374},
    {code: 12,name: "千葉",number: 3161028},
    {code: 13,name: "東京",number: 358822},
    {code: 14,name: "神奈川",number: 5672933},
    {code: 15,name: "新潟",number: 3645020},
    {code: 16,name: "富山",number: 1230382},
    {code: 17,name: "石川",number: 3650372},
    {code: 18,name: "福井",number: 1394812},
    {code: 19,name: "山梨",number: 3991221},
    {code: 20,name: "長野",number: 7457005},
    {code: 21,name: "岐阜",number: 2535493},
    {code: 22,name: "静岡",number: 11045967},
    {code: 23,name: "愛知",number: 1809948},
    {code: 24,name: "三重",number: 2649557},
    {code: 25,name: "滋賀",number: 774984},
    {code: 26,name: "京都",number: 1578655},
    {code: 27,name: "大阪",number: 2330442},
    {code: 28,name: "兵庫",number: 4872761},
    {code: 29,name: "奈良",number: 587211},
    {code: 30,name: "和歌山",number: 3868593},
    {code: 31,name: "鳥取",number: 1170853},
    {code: 32,name: "島根",number: 1185107},
    {code: 33,name: "岡山",number: 782807},
    {code: 34,name: "広島",number: 1127903},
    {code: 35,name: "山口",number: 1456017},
    {code: 36,name: "徳島",number: 406557},
    {code: 37,name: "香川",number: 1313072},
    {code: 38,name: "愛媛",number: 1375156},
    {code: 39,name: "高知",number: 558263},
    {code: 40,name: "福岡",number: 1321550},
    {code: 41,name: "佐賀",number: 771304},
    {code: 42,name: "長崎",number: 1403171},
    {code: 43,name: "熊本",number: 2787774},
    {code: 44,name: "大分",number: 5753400},
    {code: 45,name: "宮崎",number: 876990},
    {code: 46,name: "鹿児島",number: 2032114},
    {code: 47,name: "沖縄",number: 1330690}
    ]
});
};

//源泉数のヒートマップ表示
function hotspringgensen(){
    $('#hotspringsmap').jmap({
        skew: '10',
        showHeatmap: true,
        heatmapLabelUnit: '湯',
        heatmapType: 'OrRd',
        showHeatlabel: true,
        backgroundColor: '#B5B5B3',
        prefectureLineGap: '1px',
        prefectureLineWidth: '0px',
        onSelect: function(e, data) {
            alert('源泉の数は：%d 湯です。'.replace('%d', (data.option.number).toLocaleString()));
        },
        areas: [
        {code: 1,name: "北海道",number: 2172},
        {code: 2,name: "青森",number: 1075},
        {code: 3,name: "岩手",number: 397},
        {code: 4,name: "宮城",number: 746},
        {code: 5,name: "秋田",number: 625},
        {code: 6,name: "山形",number: 420},
        {code: 7,name: "福島",number: 800},
        {code: 8,name: "茨城",number: 154},
        {code: 9,name: "栃木",number: 629},
        {code: 10,name: "群馬",number: 452},
        {code: 11,name: "埼玉",number: 112},
        {code: 12,name: "千葉",number: 155},
        {code: 13,name: "東京",number: 166},
        {code: 14,name: "神奈川",number: 608},
        {code: 15,name: "新潟",number: 540},
        {code: 16,name: "富山",number: 178},
        {code: 17,name: "石川",number: 336},
        {code: 18,name: "福井",number: 158},
        {code: 19,name: "山梨",number: 360},
        {code: 20,name: "長野",number: 966},
        {code: 21,name: "岐阜",number: 510},
        {code: 22,name: "静岡",number: 2244},
        {code: 23,name: "愛知",number: 134},
        {code: 24,name: "三重",number: 208},
        {code: 25,name: "滋賀",number: 86},
        {code: 26,name: "京都",number: 148},
        {code: 27,name: "大阪",number: 153},
        {code: 28,name: "兵庫",number: 443},
        {code: 29,name: "奈良",number: 75},
        {code: 30,name: "和歌山",number: 508},
        {code: 31,name: "鳥取",number: 364},
        {code: 32,name: "島根",number: 254},
        {code: 33,name: "岡山",number: 223},
        {code: 34,name: "広島",number: 363},
        {code: 35,name: "山口",number: 408},
        {code: 36,name: "徳島",number: 80},
        {code: 37,name: "香川",number: 200},
        {code: 38,name: "愛媛",number: 198},
        {code: 39,name: "高知",number: 94},
        {code: 40,name: "福岡",number: 421},
        {code: 41,name: "佐賀",number: 185},
        {code: 42,name: "長崎",number: 202},
        {code: 43,name: "熊本",number: 1360},
        {code: 44,name: "大分",number: 5088},
        {code: 45,name: "宮崎",number: 203},
        {code: 46,name: "鹿児島",number: 2749},
        {code: 47,name: "沖縄",number: 19}
        ]
    });
};

//利用者数のチャート表示
function hotspringriyoushachart(){
    let ctx = document.getElementById("hotspringriyoushachart");
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

    //利用者数のチャート表示
function hotspringgensenchart(){
    let ctx = document.getElementById("hotspringgensenchart");
        let myChart = new Chart(ctx, {
          type: 'horizontalBar',
          data: {
                      labels: [ "北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井",
                              "山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島",
                              "香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"],
                       datasets: [
                           {
                            label: "湯",
                            data:[2172,1075,397,746,625,420,800,154,629,452,112,155,166,608,540,178,336,158,360,966,510,2244,134,208,86,148,153,443,75,508,364,
                                254,223,363,408,80,200,198,94,421,185,202,1360,5088,203,2749,19],
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
                    suggestedMax: 6000,
                    suggestedMin: 0,
                    stepSize: 1000,
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