import React, { memo } from 'react'
import './index.less'
const APCPerformanceMonitor = memo(() => {
    return (
        <div className="APCcontent">
            <div id="APCImg"></div>
            <div className="indicatorContent"></div>
        </div>
    )
})

export default APCPerformanceMonitor