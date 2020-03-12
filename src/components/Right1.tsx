import React from 'react'

export const Right1: React.FC = () => {
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