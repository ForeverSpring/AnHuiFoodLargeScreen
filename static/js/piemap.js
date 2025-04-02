function display_pie_map(param) {
    //获取总价前八美食
    var myChart = echarts.init(document.getElementById('sort-pie'));
    //默认数据
    let displayData = [
        { value: 100, name: '' },
    ];
    //处理实体数据
    if (param !== null) {
        param.sort(function (a, b) {  //根据总价排序
            return b.price - a.price;
        });
        for (var i = 0; i < 8 && i < param.length; i++) {
            var item = param[i];
            displayData[i] = {
                value: item.price,
                name: item.name
            };
        }
    }
    var option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '90%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 1
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20,
                        fontWeight: 'bold',
                    }
                },
                labelLine: {
                    show: false
                },
                data: displayData,
            }
        ]
    };
    myChart.setOption(option);
}