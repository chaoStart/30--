import React, { memo } from 'react'
import * as echarts from 'echarts'
import { useAsyncEffect } from 'ahooks'
const EnergySupply_demand = memo(() => {
    useAsyncEffect(async () => {
        chartInit()
    });
    const chartInit = () => {
        let mychart = echarts.init(document.getElementById('productionSituation'));
        let dataX = ['前7日', '前6日', '前5日', '前4日', '前3日', '前2日', '前1日', '当前日']
        let productionLoad = [45, 14, 50, 39, 42, 45, 38, 41, 40];
        let option;
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none',
                },
                formatter: function (params) {
                    return (
                        dataX[params[0].dataIndex] +
                        '<br> 日计划产量' +
                        productionLoad[params[0].dataIndex] +
                        '' +
                        '<br> 日实时产量' +
                        productionLoad[params[0].dataIndex]
                    );
                },
            },
            grid: {
                top: '22%',
                bottom: '0%',
                left: '1%',
                right: '0%',
                containLabel: true,
                height: '79%',
            },
            legend: {
                data: ['日计划产量', '日实时产量'],
                right: '10',
                top: '10',
                textStyle: {
                    // padding: [4, 0, 0, 0],
                    color: '33FFFF',
                    fontSize: 15
                },
                itemWidth: 15,
                itemHeight: 10,
                itemGap: 25,
            },
            xAxis: {
                type: 'category',
                data: dataX,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(66, 192, 255, .3)',
                    },
                },
                axisLabel: {
                    rotate: 0,
                    textStyle: {
                        color: '#33FFFF',
                        fontSize: 15,
                    },
                },
            },

            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#5FBBEB',
                            fontSize: 15,
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            fontSize: 24,
                            color: 'rgba(66, 192, 255, .3)',
                        },
                    },
                },
            ],
            series: [
                {
                    name: '日计划产量',
                    type: 'bar',
                    barWidth: '12px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    // color: '#29acff',
                                    color: '#006CFF',
                                },
                                {
                                    offset: 1,
                                    // color: '#4bdfff',
                                    color: '#29D5FF',
                                },
                            ]),
                            barBorderRadius: 2,
                        },
                    },
                    data: productionLoad,
                },
                {
                    name: '日实时产量',
                    type: 'bar',
                    barWidth: '12px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    // color: '#29acff',
                                    color: '#00B66F',
                                },
                                {
                                    offset: 1,
                                    // color: '#4bdfff',
                                    color: '#90FFDC',
                                },
                            ]),
                            barBorderRadius: 2,
                        },
                    },
                    data: productionLoad,
                },
            ],
        };
        mychart.setOption(option);
        window.addEventListener('resize', () => {
            mychart.resize();
        })
    }
    return (
        <div id="energySupply_demand" style={{ width: '100%', height: '100%' }}></div>
    )
})

export default EnergySupply_demand