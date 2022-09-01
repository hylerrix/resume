import React from 'react'

export const UniversityActivity: React.FC = () => {
  return (
    <section className="practice">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">校内实践</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
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
              大一暑假参与的 <strong>ThoughtWorks 暑期特训营</strong>，坚定了在 JavaScript 大前端领域的发展方向。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2016.06 ~ 2018.12</span>
            <a className="btn item-more" href="https://chinese.freecodecamp.org/news/" target="_blank">开源社区</a>
            <h3 className="item-name">freeCodeCamp 西安</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>城市组织者</strong>
              负责社区的活动策划、日常运营、技术分享以及项目开发，助力西安技术社区的发展。打造了数个技术活动品牌，邀请了诸多本地知名讲师分享，扩大了社区影响力。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
