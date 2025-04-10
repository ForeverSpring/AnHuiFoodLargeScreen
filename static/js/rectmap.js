function display_rect_map(param) {
    //获取好评数前五美食
    var rectChart = echarts.init(document.getElementById('rand-rect'));
    let xAxisData = ['', '', '', '', ''];
    let yAxisData = [0, 0, 0, 0, 0];
    if (param !== null) {
        param.sort(function (a, b) {  //根据好评数排序
            return b.goodview-a.goodview;
        });
        for (var i = 0; i < 5 && i < param.length; i++) {
            var item = param[i];
            xAxisData[i] = item.name;
            yAxisData[i] = item.goodview;
        }
    }
    option = {
        grid: {
            top: '15%',
            left: '3%',
            right: '15%',
            bottom: '3%',
            containLabel: true  
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12,
                },
                rotate: -45 // 旋转45度
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 10,
                },
            },
        },
        series: [{
            data: yAxisData,
            type: 'bar',
            itemStyle: {
                color: "#3FC7FF",
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                    position: 'top',
                }
            },
        }]
    };
    rectChart.setOption(option);
}