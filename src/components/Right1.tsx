import React from 'react'

export const Right1: React.FC = () => {
  return (
    <section className="project">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">重点项目</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <div className="section-bd">
          <div className="item">
            <header className="item-hd">
              <span className="item-time">2020.06 ~ 至今</span>
              <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
              <h3 className="item-name">BMS (裸金属管控平台)</h3>
            </header>
            <div className="item-bd">
              <p className="section-content">
                围绕<strong>React</strong>技术栈从零搭建了全新的管控平台，重视代码封装与模块复用并编写了大量<strong>React Hooks</strong>风格的函数组件。熟练掌握并实战了<strong>TypeScript</strong>等技术，对前端项目的开发全周期有了更广泛的认知。
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2018.04 ~ 2020.04</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">Eagle (监控平台)</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              围绕<strong>Vue</strong>技术栈进行业务的开发工作。使用<strong>ECharts</strong>类库对多种图表进行了良好的封装和复用。关注前端业务细节，提高了用户体验度，加深了对网络监控运维业务的认知。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
