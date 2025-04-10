function display_content(param) {
    fetch('http://127.0.0.1:5000/search/' + param)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // 解析JSON数据
        })
        .then(data => {
            display_pie_map(data);
            display_rect_map(data);
            display_line_map(data);
            display_percent_map(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

fetch('/static/json/340000.geojson')
    .then(response => response.json())
    .then(anhuiJson => {
        echarts.registerMap('安徽', anhuiJson);  // 注册地图
        const mapChart = echarts.init(document.getElementById('anhuiMap'));
        var option = {
            series: [{
                type: 'map',
                map: '安徽',
                data: [],
                zoom: 1.2,
                roam: true,
                label: {
                    normal: {
                        show: true,
                        color: "#000000",
                        fontSize: 12,
                    },
                    emphasis: {
                        show: true,
                        color: "#000000",
                        fontSize: 17,
                    },
                },
                itemStyle: {
                    normal: {
                        areaColor: "#A5D4FF",
                        borderColor: "#ffffff",
                    },
                    emphasis: {
                        areaColor: "#F1EB19",
                        borderColor: "#ffffff",
                        borderWidth: 2,
                    },
                },
                selectMode: "single",
                select: {
                    disabled: false,
                    itemStyle: {
                        areaColor: "#F1EB19",
                    },
                    label: {
                        fontSize: 17,
                    },
                },
            }],
        };
        mapChart.setOption(option);
        mapChart.on('click', function (params) {
            if (params.componentType === 'series') {
                display_content(params.name);
            }
        });
        display_content();
    });

window.addEventListener('resize', function () {
    var map = echarts.init(document.getElementById('anhuiMap'));
    var pie = echarts.init(document.getElementById('sort-pie'));
    var rectChart = echarts.init(document.getElementById('rand-rect'));
    var lineMap = echarts.init(document.getElementById('price-detail'));
    var percentMap = echarts.init(document.getElementById('type-percent'));
    map.resize();
    pie.resize();
    rectChart.resize();
    lineMap.resize();
    percentMap.resize();
});