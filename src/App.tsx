import React from 'react'
import './App.scss'
import './icon/iconfont.css'

const Header: React.FC = () => {
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
          <li><a href="mailto:hylerrix@foxmail.com" target="_blank"><span className="contact-link">hylerrix@foxmail.com</span><i className="iconfont icon-email"></i></a></li>
          <li><a href="tel:18829533255" target="_blank"><span className="contact-link">+86 18829533255</span><i className="iconfont icon-phone"></i></a></li>
        </ul>
      </section>
    </header>
  )
}

const Left1: React.FC = () => {
  return (
    <section className="practice">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">企业实习</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2018.04 ~ 至今</span>
            <a className="btn item-more" href="http://didichuxing.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">北京嘀嘀无限科技发展有限公司</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>基础平台部-系统部-系统平台</strong>
              负责滴滴监控平台的前端项目工程实践，技术栈涵盖但不止于 Vue.js、ElementUI、Webpack 等。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Left2: React.FC = () => {
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
            <a className="btn item-more" href="http://www.creatshare.com/" target="_blank">校实验室</a>
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
            <span className="item-time">2016.06 ~ 至今</span>
            <a className="btn item-more" href="https://www.freecodecamp.cn/" target="_blank">开源社区</a>
            <h3 className="item-name">freeCodeCamp 西安</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>城市组织者</strong>
              负责社区的活动策划、日常运营、技术分享以及项目开发，助力西安技术社区的发展。从官网制作的设计与开发开始，逐步提高社区硬实力、扩大社区影响力。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2016.06 ~ 2017.06</span>
            <a className="btn item-more" href="https://school.thoughtworks.cn/bbs/" target="_blank">校实验室</a>
            <h3 className="item-name">ThoughtWorks 联合创新实验室</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>前端组成员</strong>
              全程参与思沃学院的暑期特训营。对<strong>敏捷开发</strong>、<strong>编程教育</strong>、<strong>技术公益</strong>等有较深的感悟，极大地影响了自身的发展方向。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Left3: React.FC = () => {
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

const Left4: React.FC = () => {
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

const Right1: React.FC = () => {
  return (
    <section className="project">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">项目经验</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2017.10</span>
            <a className="btn item-more" href="http://xupt-fe.top/" target="_blank">访问外链</a>
            <h3 className="item-name">西邮前端圈</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>提出想法</strong><strong>校内宣传</strong><strong>项目牵头</strong><strong>界面设计</strong><strong>前端开发</strong><strong>多人协作</strong>
              结合自身社区优势，为西邮人量身搭建了这一前端圈社群。开发成员横跨多个专业，使用<strong>Git Flow</strong>工作流程进行协作开发，并通过<strong>Git Hooks</strong>脚本自动触发服务器更新。使用少量的<strong>Express</strong>框架，通过<strong>pm2</strong>进程管理工具，将应用部署到了线上<strong>CentOS</strong>系统的<strong>Nginx</strong>服务器上，并采取了<strong>反向代理</strong>策略。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2017.10</span>
            <a className="btn item-more" href="http://www.creatshare.com" target="_blank">访问外链</a>
            <h3 className="item-name">CreatShare 互联网实验室主页</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>界面实现</strong><strong>前端开发</strong>
              适配各大主流浏览器，采用<strong>Floxbox</strong>布局，完整实现了移动端和桌面端两套高保真方案。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2017.06</span>
            <a className="btn item-more" href="javascript:;" target="_blank">暂无外链</a>
            <h3 className="item-name">中国软件杯 - “无微不至”的借阅伴侣</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>参赛作品</strong><strong>界面设计</strong><strong>前端开发</strong>
              该项目完成了基本的软件工程要求，包括<strong>概要设计说明书</strong>到<strong>需求规格说明书</strong>。使用<strong>JS-SDK</strong>接口，完整实现了<strong>前后端分离</strong>的数据交互流程。上线后不断的维护与重构代码，Git 仓库中已有上百次提交记录。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Right2: React.FC = () => {
  return (
    <section className="skill">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">专业技能</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <ul className="section-list">
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              掌握 Web 前端开发基本技能，熟悉<strong>W3C 标准</strong>、<strong>页面布局架构</strong>、<strong>前端语义化</strong>、浏览器<strong>兼容性</strong>等，注重<strong>代码可维护性</strong>，有<strong>近 2 年</strong>的前端开发经验。掌握基础的<strong>产品原型设计</strong>技巧，懂些<strong>设计</strong>，重视<strong>用户体验</strong>。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              对UI框架<strong>Bootstrap</strong>、类库<strong>jQuery</strong>、<strong>MV*框架</strong>、<strong>HTML5</strong>、<strong>CSS3</strong>、<strong>响应式布局</strong>等有着较熟练的实践和较深刻的感悟。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              对<strong>模块加载</strong>、<strong>前端工程化</strong>、<strong>前端测试</strong>、<strong>接口联调</strong>、<strong>性能优化</strong>、<strong>ECMAScript5+</strong>、<strong>NodeJS</strong>等有一定的了解和思考。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              熟练使用<strong>Git</strong>进行版本控制和代码托管、<strong>Markdown</strong>进行文档编写，并以<strong>Mac OS X</strong>、<strong>Linux</strong>、<strong>VS Code</strong>作为日常开发环境进行工作，了解项目开发流程及开发调试工具的使用。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              坚持写作，热爱分享，两年有 60+ 中短篇<strong>原创技术博文</strong>。有良好的<strong>知识管理能力</strong>，所有成果均托管在 <strong>Github</strong> 中。对<strong>开源活动</strong>充满热情，线上线下结识了很多技术朋友。
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

const PrintFooter = () => {
  return (
    <footer className="print-footer">
      <a className="footer-link" href="http://resume.ningowood.ink/hylerrix" target="_blank"><i className="iconfont icon-link"></i> 网页版简历：开发中</a>
    </footer>
  )
}

const GithubFooter: React.FC = () => {
  return (
    <footer className="github-footer">
      <a className="footer-link" href="https://github.com/hylerrix/resume" target="_blank"><i className="iconfont icon-link"></i> github.com/hylerrix/resume</a>
    </footer>
  )
}

function App() {
  return (
    <div>
      <a className="pdf" href="./resume.pdf"><i className="iconfont icon-pdf"></i>PDF简历</a>
      <p className="last-modified">最后更新时间：2020年03月11日</p>
      <div className="content">
        <Header />
        <div className="content-bd">
          <div className="content-left">
            <Left1 />
            <Left2 />
            <Left3 />
            <Left4 />
          </div>
          <div className="content-right">
            <Right1 />
            <Right2 />
          </div>
        </div>
        <PrintFooter />
      </div>
      <GithubFooter />
    </div>
  )
}

export default App
