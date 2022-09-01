import React from 'react'

export const ImportantProject: React.FC = () => {
  return (
    <section className="project">
      <header className="section-hd">
        <span className="section-title-l"></span>
        <h2 className="section-title">重点项目</h2>
        <span className="section-title-r"></span>
      </header>
      <div className="section-bd">
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2020.11 ~ 至今</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">CMP (云管平台)</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              该平台覆盖公司内部 90% 的中后台服务资料，提供一站式成本/收入账单查看、年度预算报表等功能。
              其中主动承担 <strong>前端基础设施</strong> 的线上线下维护，
                以及 <strong>定价/分摊账单</strong>、<strong>用量明细</strong>、<strong>产品市场</strong>、<strong>产品视角</strong>
                等关键模块的架构设计与需求开发任务。
              技术栈基于公司内源的 <strong>Web 全栈一体化框架</strong> 和前端组件库构建，
              Vue 生态的类 <strong>iView</strong> 层构建 UI 逻辑；
              Node 生态的类 <strong>Koa</strong> 层构建后端逻辑来直连数据库或透传 API 给其它微服务。
              同时基于公司内部一站式 CI/CD 平台来打通 <strong>测试环境物理机</strong> 和 <strong>线上环境弹性云</strong> 的项目全流程方案。
                调试对接 <strong>主数据</strong> | <strong>RDS</strong> | <strong>Redis</strong>
                | <strong>GUID</strong> | <strong>S3</strong> | <strong>Nginx</strong>
                等诸多中台接口服务。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2020.06 ~ 至今</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">CMDB</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              该平台全量支撑滴滴所有业务，建设多地数据中心集群和骨干网络，具备数十万台服务器规模的管理能力。
              新版前端围绕 <strong>Single SPA</strong> 与 <strong>React</strong> 生态从零搭建微前端架构体系，
              拆分出 <strong>服务器控制台</strong> | <strong>负载均衡</strong> | <strong>域名管理</strong>
                | <strong>CMDB</strong> ｜ <strong>IT 资产管理</strong> | <strong>重装报障</strong>
                | <strong>报表</strong> | <strong>工单</strong> 等十余个子应用。
              独立设计从开发到部署的全链路规范，提供 <strong>沙箱隔离</strong>、<strong>权限设计</strong>、
                <strong>通信机制</strong>、<strong>路由系统</strong>、<strong>资源共享</strong>
                等微前端挑战的统一解决方案，对前端架构有了更广泛的实践。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2018.04 ~ 2021.08</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">BMS & Monitor & ... </h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              <strong>BMS</strong> 为实现公司底层网络的云化、将自有业务和滴滴云之间的网络物理隔离转变为逻辑隔离，以灵活分配内外部业务、节省总体成本而建。
              <strong>Monitor</strong> 涵盖网络基础设施、机房动环、服务器硬件以及系统与服务四大维度的全链路监控。
              前端重点围绕 <strong>React</strong> 和<strong>Vue</strong> 生态建设，重视封装与复用并编写了大量<strong>React Hooks</strong> 风格的函数组件。
              熟练掌握了<strong>TypeScript</strong>、<strong>React Router</strong>、<strong>Redux</strong>、<strong>Axios</strong>、<strong>Sass</strong>、<strong>ECharts</strong> 等技术。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
