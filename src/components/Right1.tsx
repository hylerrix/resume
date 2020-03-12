import React from 'react'

export const Right1: React.FC = () => {
  return (
    <section className="project">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">企业项目</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2018.04 ~ 现在</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">监控平台</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>前端开发</strong>围绕<strong>Vue.js</strong>技术栈进行业务的开发工作。使用<strong>ECharts</strong>类库对多种图表进行了良好的封装和复用。关注前端业务细节，提高了用户体验度，加深了对网络监控运维业务的认知。
            </p>
          </div>
        </div>
        <div className="section-bd">
          <div className="item">
            <header className="item-hd">
              <span className="item-time">2019.04 ~ 2019.09</span>
              <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
              <h3 className="item-name">Star 平台</h3>
            </header>
            <div className="item-bd">
              <p className="section-content">
                <strong>前端开发</strong>围绕<strong>React.js</strong>技术栈进行业务的开发和迁移工作，重视代码封装与模块复用。初步掌握了<strong>TypeScript</strong>技术，通过大量的业务编码对各类 UI 组件有了更广泛的认知。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}