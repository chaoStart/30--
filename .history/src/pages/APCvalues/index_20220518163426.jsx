import React, { memo } from 'react'
import './index.less'
import * as echarts from 'echarts'
import { useAsyncEffect } from 'ahooks'
const APCPerformanceMonitor = memo(() => {
    useAsyncEffect(async () => {

    })
    return (
        <div className="APCcontent">
            <div id="APCImg"></div>
            <div className="indicatorContent"></div>
        </div>
    )
})

export default APCPerformanceMonitor