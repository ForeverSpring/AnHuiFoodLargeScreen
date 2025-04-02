function display_percent_map(param) {
    //获取各类菜品占比
    var percentMap = echarts.init(document.getElementById('type-percent'));
    //转换实体数据到echarts数据格式
    //默认数据
    let displayData = [
        { value: 0, name: '' }
    ];
    if (param !== null) {
        let dic = Array();
        totalCnt = param.length;
        for (var i = 0; i < param.length; i++) {
            var item = param[i];
            if (!dic[item.dish])
                dic[item.dish] = 1;
            else
                dic[item.dish]++;
        }
        displayData = [];
        Object.entries(dic).forEach(([key, value]) => {
            displayData.push({
                value: value ,
                name: key
            });
        });
    }
    if (param.length <= 0)
        displayData = [
            { value: 0, name: '' }
        ];
    var option = {
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [25, 120],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8,
                },
                label: {
                    color: 'white',
                    fontSize: 13,
                    formatter:'{b}: {c}',
                },
                data: displayData,
            }
        ]
    };
    percentMap.setOption(option);
}