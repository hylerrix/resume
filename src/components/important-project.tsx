import React from 'react'

export const ImportantProject: React.FC = () => {
  return (
    <section className="project">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">重点项目</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <div className="section-bd">
          {/* 未来：Star 平台改造，可以和 BMS 合并 */}
          <div className="item">
            <header className="item-hd">
              <span className="item-time">2020.06 ~ 至今</span>
              <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
              <h3 className="item-name">BMS (裸金属管控平台 - 内部上云)</h3>
            </header>
            <div className="item-bd">
              <p className="section-content">
                该平台为实现公司底层网络的云化、将自有业务和滴滴云之间的网络物理隔离转变为逻辑隔离，以灵活分配内外部业务、节省总体成本而建。
                前端围绕<strong>React</strong>生态从零搭建，重视代码封装与模块复用并编写了大量<strong>React Hooks</strong>风格的函数组件。
                熟练掌握了<strong>TypeScript</strong>、<strong>React Router</strong>、<strong>Axios</strong>等技术，对前端项目的开发有了更广泛的实践。
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2020.11 ~ 至今</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">Base (内云平台)</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              该平台覆盖公司内部 90% 的中后台服务资料和开发工具，提供一站式成本/收入账单查看、年度预算报表等功能。其中主要负责了若干子控制台项目的前端需求开发。
              使用公司自研 Web 框架和前端组件库构建<strong>Web 应用</strong>：
              类<strong>iView</strong>层负责构建前端布局系统并处理用户端交互逻辑；
              类<strong>Express</strong>层负责跟踪用户请求、监控用户行为并透传<strong>RPC</strong>服务接口请求。
              同时基于公司内部一站式研发效能平台 OE 和一站式运维平台 Odin 来打通从<strong>自动化构建</strong>再到<strong>弹性云容器部署</strong>的上线全流程。
            </p>
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
              该平台涵盖网络基础设施、机房动环、服务器硬件以及系统与服务四大维度的全链路监控。
              围绕<strong>Vue</strong>技术栈进行业务的开发工作。使用<strong>ECharts</strong>类库对多种图表进行了良好的封装和复用。
              关注前端业务细节，提高了用户体验度，对网络监控运维业务有了一定的理解。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
