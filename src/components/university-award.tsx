import React from 'react'

export const UniversityAward: React.FC = () => {
  return (
    <section className="prize">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">大学荣誉</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-sub-title">
        从零建设过 freeCodeCamp 西安前端社区，运营了诸多次技术分享活动
      </div>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2018.09</span>
            <span className="item-more">社区运营</span>
            <h3 className="item-name">2018 西安 Web 前端交流大会 & Java 大会</h3>
          </header>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2017.06</span>
            <span className="item-more">重在参与</span>
            <h3 className="item-name">中国软件杯 - 借阅伴侣</h3>
          </header>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2016.10</span>
            <span className="item-more">技术分享</span>
            <h3 className="item-name">西安邮电大学 - 腾讯云校园工作坊</h3>
          </header>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2016.03</span>
            <span className="item-more">校级银奖</span>
            <h3 className="item-name">XUPT - 首届ACM-ICPC程序设计竞赛</h3>
          </header>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2015.12</span>
            <span className="item-more">校一等奖</span>
            <h3 className="item-name">XUPT - 第六届多媒体技术设计大赛</h3>
          </header>
        </div>
      </div>
    </section>
  )
}
