import React, { memo } from 'react'
import './index.less'
import img1 from '../../assets/img/AppIcon/优化控制/新建文件夹/协同操作优化.png'
import img2 from '../../assets/img/AppIcon/优化控制/新建文件夹/模型预测控制.png'
import img3 from '../../assets/img/AppIcon/优化控制/新建文件夹/APC性能监控.png'
import img4 from '../../assets/img/AppIcon/优化控制/新建文件夹/PID性能评估.png'
import img5 from '../../assets/img/AppIcon/生产管控/新建文件夹/装置收率模型.png'
import img6 from '../../assets/img/AppIcon/生产管控/新建文件夹/生产统计模型.png'
import img7 from '../../assets/img/AppIcon/设备运维/新建文件夹/故障定位分析.png'
import img8 from '../../assets/img/AppIcon/能源管控/新建文件夹/能效指标管理.png'
const ExtraApp = memo(() => {
    return (
        <div id="mainbox">
            <div className="topApp">
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img1} alt="1" onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", ""); }} />
                    <div className="apptitle">
                        协同操作优化
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img2} alt="1" onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", ""); }} />
                    <div className="apptitle">
                        模型预测控制
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img3} alt="1" onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", ""); }} />
                    <div className="apptitle">
                        APC性能监控
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img4} alt="1" onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", ""); }} />
                    <div className="apptitle">
                        PID性能评估
                    </div>
                </div>
            </div>
            <div className="bottomApp">
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img5} alt="1" onClick={() => { window.open('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_d7c0fc431d59499386719bc34f1a43b5', "target", ""); }} />
                    <div className="apptitle">
                        装置收率模型
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img6} alt="1" onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", ""); }} />
                    <div className="apptitle">
                        生产统计模型
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img7} alt="1" onClick={() => { window.open('https://www.baidu.com/?tn=40020637_27_oem_dg', "target", ""); }} />
                    <div className="apptitle">
                        故障定位分析
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img8} alt="1" onClick={() => { window.open('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_f7854ba61ddc48de824e21c552474da8', "target", ""); }} />
                    <div className="apptitle">
                        能效指标管理
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ExtraApp