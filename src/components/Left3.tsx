import React from 'react'

export const Left3: React.FC = () => {
  return (
    <section className="prize">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">开源动向</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2018.09</span>
            <span className="item-more">技术分享</span>
            <h3 className="item-name">2018 西安 Web 前端交流大会</h3>
          </header>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2017.12</span>
            <span className="item-more">社区运营</span>
            <h3 className="item-name">freeCodeCamp 西安前端社区线下活动</h3>
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
            <span className="item-time">2016.10</span>
            <span className="item-more">技术分享</span>
            <h3 className="item-name">猿生态十城巡回沙龙 - 西安站</h3>
          </header>
        </div>
      </div>
    </section>
  )
}