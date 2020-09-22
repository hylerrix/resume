import React from 'react'

export const Left1: React.FC = () => {
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
              在平台开发组中，参与过多个内部平台的前端工程实践；包括独立完成裸金属管控平台的前端开发和部署，成功推进数千台裸金属物理机的上云改造任务。技术栈涵盖但不止于
              <strong>React</strong>、<strong>Vue</strong>、<strong>TS</strong>、<strong>AntD</strong>、<strong>Vuetify</strong>、
              <strong>Node.js</strong> 等。前十四个月是实习期。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
