import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="content-hd">
      <section className="title">
        <div className="name">
          <h1>韩亦乐<small>hylerrix</small></h1>
        </div>
        <div className="job">
          <h2>Web 前端开发工程师</h2>
        </div>
      </section>
      <section className="info">
        <h2>男 / 1997.10</h2>
        <h3>西安邮电大学 · 软件工程</h3>
        <h3>本科 / 2019 年毕业</h3>
      </section>
      <section className="contact">
        <ul>
          <li><a href="https://www.jianshu.com/u/ecbf49bf207b" target="_blank"><span className="contact-link">jianshu.com/u/ecbf49bf207b</span><i className="iconfont icon-homepage"></i></a></li>
          <li><a href="https://github.com/hylerrix" target="_blank"><span className="contact-link">github.com/hylerrix</span><i className="iconfont icon-github"></i></a></li>
          <li><a href="mailto:hylerrix@gmail.com" target="_blank"><span className="contact-link">hylerrix@gmail.com</span><i className="iconfont icon-email"></i></a></li>
          <li><a href="tel:18829533255" target="_blank"><span className="contact-link">+86 18829533255</span><i className="iconfont icon-phone"></i></a></li>
        </ul>
      </section>
    </header>
  )
}

export const PrintFooter = () => {
  return (
    <footer className="print-footer">
      <a className="footer-link" href="http://resume.ningowood.ink/hylerrix" target="_blank"><i className="iconfont icon-link"></i> 网页版简历：开发中</a>
    </footer>
  )
}

export const GithubFooter: React.FC = () => {
  return (
    <footer className="github-footer">
      <a className="footer-link" href="http://resume.ningowood.ink/hylerrix" target="_blank"><i className="iconfont icon-link"></i> http://resume.ningowood.ink/hylerrix</a>
    </footer>
  )
}