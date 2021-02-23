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
            <span className="item-time">2019.07 ~ 至今</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">北京嘀嘀无限科技发展有限公司</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>基础平台部-系统部</strong>
              在平台开发组中，参与过 7+ 个内部平台的前端工程实践。
              包括独立完成裸金属管控平台的前端开发和部署，成功推进了数千台裸金属物理机的上云改造任务；
              参与滴滴内云平台若干子控制台的需求开发等。
              技术栈不止于
              <strong>React</strong>、<strong>Vue</strong>、<strong>TypeScript</strong>、
              <strong>AntD</strong>、<strong>Vuetify</strong>、<strong>iView</strong>、
              <strong>Webpack</strong>、<strong>ExpressJS</strong>、<strong>NodeJS</strong>
              等。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
