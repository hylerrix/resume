import React from 'react'

export const ProfessionalSkill: React.FC = () => {
  return (
    <section className="skill">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">专业技能</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-sub-title">
        Github: A+, Follower: 410+, Total Commit: 500+, Total PR: 40+, Total Issues: 140+
      </div>
      <div className="section-bd">
        <ul className="section-list">
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              掌握 Web 前端开发基本技能，熟悉<strong>ECMAScript 基本特性</strong>、<strong>CSS 主流布局模型</strong>、
              <strong>HTML 标准规范</strong>、<strong>浏览器工作原理</strong>和<strong>浏览器兼容性处理</strong>等，
              注重<strong>代码可维护性</strong>，有近<strong>4 年</strong>的大前端开发经验。
              掌握简单的<strong>产品原型设计</strong>技巧，并驱重视<strong>开发者体验</strong>和<strong>用户体验</strong>。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              对前端
              <strong>设计模式</strong>、<strong>模块加载</strong>、<strong>组件发包</strong>、<strong>接口联调</strong>、
              <strong>性能优化</strong>、<strong>线上部署</strong>、<strong>异常监控</strong>、<strong>持续交付</strong>、
              <strong>脚手架搭建</strong>
              等前端工程基础能力有一定的实践和感悟。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              了解<strong>Node.js</strong>为主的后端开发基础技能，围绕 <strong>Koa</strong>、<strong>Nest.js</strong> 等生态写过简单的接口。
              目前关注以 <strong>Next.js</strong> 为代表的 <strong>SSR</strong> 及 <strong>服务端组件</strong>框架，
              并能搭配 <strong>PostgreSQL</strong>、<strong>Prisma</strong> 来快速从后端到前端输出一个特定业务下的 TypeScript 全链路同构单体项目。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              熟练使用<strong>Git</strong>进行版本控制和代码托管、<strong>Markdown</strong>进行文档编写，
              并以<strong>Mac OS</strong>、<strong>Linux</strong>、<strong>VS Code</strong>、
              <strong>Postman</strong>、<strong>Burp Suit</strong>、<strong>Draw IO</strong> 等作为日常开发环境进行工作，熟悉开发调试工具的使用。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              坚持写作，热爱分享，曾有 80+ 篇<strong>原创技术博文</strong>，10+ 篇<strong>英文技术文章翻译</strong>，
              有良好的<strong>知识管理能力</strong>。目前重度使用 <strong>AirTable</strong> 和 <strong>Notion</strong> 沉淀了大量的结构化知识。逐步迈向更自动化、更开放共建的低代码数据管理范式中。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              开源社区中从痛点出发共建过 <strong>chaiNner (react-nano)</strong>、<strong>Formily</strong>、<strong>Chathub</strong> 等知名项目。
              对<strong>开源社区</strong>充满热情，在<strong>Github</strong>中产出更有价值的开源代码的道路上持续前行。
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
