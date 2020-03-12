import React from 'react'

export const Right2: React.FC = () => {
  return (
    <section className="project">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">开源项目</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-sub-title">
        注：仅节选代表技术关键性成长的项目
      </div>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2019.03 ~ 2019.06</span>
            <a className="btn item-more" href="http://github.com/ningowood/open-source-community" target="_blank">毕业设计</a>
            <h3 className="item-name">城市型线下开源社区管理系统</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>毕业设计</strong><strong>全栈开发</strong>该项目为开源爱好者们解放繁重的运营任务而设计。前端基于<strong>Vue.js</strong>等技术，后端基于<strong>Nest.js</strong>、<strong>TypeORM</strong>、<strong>Swagger</strong>等技术实现，取得了不错的答辩成绩。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2017.05 ~ 2017.06</span>
            <a className="btn item-more" href="https://github.com/hylerrix-archive/borrow-book" target="_blank">竞赛项目</a>
            <h3 className="item-name">中国软件杯 - 借阅伴侣</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>参赛作品</strong><strong>界面设计</strong><strong>前端开发</strong>
              该项目完成了基本的软件工程要求，包括从<strong>概要设计说明书</strong>到<strong>需求规格说明书</strong>。遵循良好的开发规范，完整实现了<strong>前后端分离</strong>的数据交互流程，Git 仓库中已有上百次提交记录。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}