import React from 'react'

export const CareerExperience: React.FC = () => {
  return (
    <section className="practice">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">职场经历</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
      <div className="item">
          <header className="item-hd">
            <span className="item-time">2018.04 ~ 2022.10</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">北京嘀嘀无限科技发展有限公司</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>云原生服务器资源</strong> | <strong>中后台管理系统</strong> | <strong>Node.js 全链路上云</strong> | <strong>微前端与组件化</strong>
              在基础平台部中，参与 <strong>CMP 云管平台</strong> 和 <strong>CMDB 平台</strong> 两大系统部核心平台体系的前端业务开发和工程实践任务。
              其中重点负责迁移 <strong>CMP 全栈微服务同构架构</strong> 项目集，接入弹性云与诸多滴滴中台，并成功部署到国内和美东闭环环境上；
              以及基于跨部门多成员合作交流结果，独立从零到一架构和设计 <strong>CMDB 微前端架构</strong>。
              此前还独立完成 <strong>BMS 裸金属管控平台</strong> 前端任务，成功推进数千台裸金属物理机的上云改造；
              以及负责<strong>监控平台</strong>部分前端任务，针对网络/机房/硬件/系统部分子功能提供报表维护和图表展示。
              对 <strong>FETK</strong>/<strong>DNODE</strong> 等滴滴内源生态项目有所贡献。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2022.10 ~ 至今</span>
            <a className="btn item-more" href="http://www.gogobyte.com/" target="_blank">犬安科技</a>
            <h3 className="item-name">北京犬安科技有限公司</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>车联网安全</strong> | <strong>系统建模软件</strong> | <strong>国际黑客社区</strong> | <strong>初创期权</strong>
              在<strong>从硅到云守护网联汽车安全</strong>的全生命周期创业理念中，重点开发和维护第一个核心 Sass 版安全建模产品——<strong>御织</strong>。
              该产品基于最新的国内外车联网安全法规如 <strong>R155</strong>等强标所代表的最新理念，在一众 <strong>Tara 分析工具</strong>创业竞品中脱颖而出。
              技术栈包括但不限于 <strong>Formily</strong>、<strong>X6</strong>、<strong>React Flow</strong>、<strong>EventEmitter</strong> 等。
              目前早期核心客户已洽谈锁定，紧张地筹备下一轮融资中。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
