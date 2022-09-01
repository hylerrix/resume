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
        Github: A+, Follower: 410+, Total Commit: 470+, Total PR: 40+, Total Issues: 130+
      </div>
      <div className="section-bd">
        <ul className="section-list">
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              掌握 Web 前端开发基本技能，熟悉<strong>ECMAScript 基本特性</strong>、<strong>CSS 主流布局模型</strong>、
              <strong>HTML 标准规范</strong>、<strong>浏览器工作原理</strong>和<strong>浏览器兼容性处理</strong>等，
              注重<strong>代码可维护性</strong>，有<strong>3 年</strong>的大前端开发经验。
              掌握简单的<strong>产品原型设计</strong>技巧，懂些<strong>设计</strong>，重视<strong>用户体验</strong>。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              对前端<strong>MV*设计模式</strong>、
              <strong>模块加载</strong>、<strong>组件管理</strong>、<strong>接口联调</strong>、
              <strong>性能优化</strong>、<strong>异常监控</strong>、<strong>持续交付</strong>
              等有一定的实践和感悟。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              了解<strong>Node.js</strong>为主的后端开发基础技能，围绕公司 <strong>Koa</strong> 生态写过简单的接口，目前参与集团 <strong>DNode</strong> 生态的共建。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              熟练使用<strong>Git</strong>进行版本控制和代码托管、<strong>Markdown</strong>进行文档编写，并以<strong>Mac OS</strong>、<strong>Linux</strong>、<strong>VS Code</strong>、<strong>Postman</strong>、<strong>Burp Suit</strong> 等作为日常开发环境进行工作，熟悉开发调试工具的使用。
            </p>
          </li>
          <li>
            <p className="section-content">
              <i className="iconfont icon-dot"></i>
              坚持写作，热爱分享，共有 80+ 篇<strong>原创技术博文</strong>，10+ 篇<strong>英文技术文章翻译</strong>，有良好的<strong>知识管理能力</strong>。对<strong>开源社区</strong>充满热情，在<strong>Github</strong>中产出更有价值的开源代码的道路上持续前行。
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
