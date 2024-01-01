import React from 'react'

export const UniversityActivity: React.FC = () => {
  return (
    <section className="practice">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">社会实践</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2016.06 ~ 2018.12</span>
            <a className="btn item-more" href="https://chinese.freecodecamp.org/news/" target="_blank">开源社区</a>
            <h3 className="item-name">freeCodeCamp 西安</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>城市组织者</strong>
              负责社区的活动策划、日常运营、技术分享，助力西安技术社区的发展。打造了数个技术活动品牌，邀请了诸多本地知名讲师分享，扩大了社区影响力。
              同期受邀参加过成都黑客松、杭州 2050、苏州跨年演讲以及 2023 广州全国贡献者聚会等活动。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2015.10 ~ 2018.06</span>
            <a className="btn item-more" href="https://www.github.com/creatshare" target="_blank">校实验室</a>
            <h3 className="item-name">CreatShare 互联网实验室</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>前端组组长</strong>
              负责实验室前端项目的研发、维护及性能优化。还负责了实验室内部的人事调剂与项目分配，并参与了实验室日常技术分享、周年纳新筛选与不定期交流培训。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2017.01 ~ 2017.12</span>
            <a className="btn item-more" href="https://www.github.com/creatshare" target="_blank">校实验室</a>
            <h3 className="item-name">ThoughtWorks 实验室</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              大一暑假参与的 <strong>ThoughtWorks 暑期 JavaScript 全栈特训营</strong>，坚定了在大前端领域的发展方向。学习内容涵盖当时流行的 MEAN 架构，可以从后端到前端都用 JavaScript 编写代码，并搭配敏捷开发思想小步迭代快速上线。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
