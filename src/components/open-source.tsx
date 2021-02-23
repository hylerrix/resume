import React from 'react'

export const OpenSource: React.FC = () => {
  return (
    <section className="project">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">开源玩家</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-sub-title">
        A+, Follower: 340+, Total Commit: 470+, Total PR: 40+, Total Issues: 130+
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
              <strong>650+ Star</strong><strong>技术写作</strong>
              自从 Deno v1 发布之日起，时刻关注 Deno 生态圈的动态，进行了十余篇的<strong>入门级博文</strong>分享，率先翻译了<strong>若干官方博客</strong>。
              目前还在更深入了解的路上，同时逐渐围绕 Deno 生态打造更多的小工具，回馈 Deno 社区的同时跟紧下一代 Web 技术的发展潮流。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
