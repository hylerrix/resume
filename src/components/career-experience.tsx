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
            <span className="item-time">2018.04 ~ 至今</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">北京嘀嘀无限科技发展有限公司</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>基础平台部-系统部</strong>
              在平台研发组中，参与 <strong>CMP 云管平台</strong> 和 <strong>CMDB 平台</strong> 两大系统部核心平台体系的前端业务开发和工程实践。
              其中重点负责迁移 <strong>CMP 全栈微服务同构架构</strong>，接入弹性云与诸多滴滴中台，并成功部署到国内和美东闭环环境上；
              以及基于跨部门多成员合作交流结果，独立从零到一架构和设计 <strong>CMDB 微前端架构</strong>。
              此前还独立完成 <strong>BMS 裸金属管控平台</strong> 前端任务，成功推进数千台裸金属物理机的上云改造；
              以及负责<strong>监控平台</strong>部分前端任务，针对网络/机房/硬件/系统部分子功能提供报表维护和图表展示。
              目前也在持续共建 <strong>FETK</strong>/<strong>DNODE</strong> 等内源生态中。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
