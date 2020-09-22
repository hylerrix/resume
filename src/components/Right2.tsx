import React from 'react'

export const Right2: React.FC = () => {
  return (
    <section className="project">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">开源玩家</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-sub-title">
        A+, Follower: 280+, Total Commit: 420+, Total PR: 40+, Total Issues: 130+
      </div>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2020.05 ~ 至今</span>
            <a className="btn item-more" href="http://deno-tutorial.js.org/" target="_blank">电子书籍</a>
            <h3 className="item-name">Deno 钻研之术</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>500+ Star</strong><strong>技术写作</strong>
              自从 Deno v1 发布之日起，时刻关注 Deno 生态圈的动态，进行了十余篇的入门级博文输出，目前还在更深入了解的路上。梦想是在国内出版一本 Deno 书！
            </p>
          </div>
        </div>

        <div className="item">
          <header className="item-hd">
            <span className="item-time">2019.03 ~ 2019.06</span>
            <a className="btn item-more" href="https://github.com/ningowood" target="_blank">毕业设计</a>
            <h3 className="item-name">城市型线下开源社区管理系统</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>毕业设计</strong><strong>界面设计</strong><strong>全栈开发</strong>该项目为开源爱好者们解放繁重的运营任务而设计。基于大前端生态，使用<strong>Vue.js</strong>、<strong>Nest.js</strong>、<strong>TypeORM</strong>、<strong>Swagger</strong>等技术实现，取得了不错的答辩成绩。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
