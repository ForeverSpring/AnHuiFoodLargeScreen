function display_line_map(param) {
    //获取价格分布
    var lineMap = echarts.init(document.getElementById('price-detail'));
    let xAxisData = ['0-20', '20-40', '40-60', '60-80', '80-100', '100+'];
    let yAxisData = [0, 0, 0, 0, 0, 0];
    if (param !== null) {
        for (var i = 0; i < param.length; i++) {
            var item = param[i];
            if (item.price <= 20)
                yAxisData[0]++;
            else if (item.price <= 40)
                yAxisData[1]++;
            else if (item.price <= 60)
                yAxisData[2]++;
            else if (item.price <= 80)
                yAxisData[3]++;
            else if (item.price <= 100)
                yAxisData[4]++;
            else
                yAxisData[5]++;
        }
    }
    var option = {
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 15,
                },
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 15,
                },
            },
        },
        series: [
            {
                type: 'line',
                data: yAxisData,
                lineStyle: {
                    color: 'red',
                },
                itemStyle: {
                    color: 'red',
                },
                label: {
                    show: true,
                    color: "red",
                    fontSize: 15,
                },
            }
        ]
    };
    lineMap.setOption(option);
}