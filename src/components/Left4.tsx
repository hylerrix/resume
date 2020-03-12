import React from 'react'

export const Left4: React.FC = () => {
  return (
    <section className="prize">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">奖项证书</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2017.05</span>
            <span className="item-more">志愿者</span>
            <h3 className="item-name">DevRelCon - 中国首届开发者关系大会 - 荣誉证书</h3>
          </header>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2016.03</span>
            <span className="item-more">院校级</span>
            <h3 className="item-name">XUPT - 首届ACM-ICPC程序设计竞赛 - 银奖</h3>
          </header>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2015.12</span>
            <span className="item-more">院校级</span>
            <h3 className="item-name">XUPT - 第六届多媒体技术设计大赛 - 一等奖</h3>
          </header>
        </div>
      </div>
    </section>
  )
}