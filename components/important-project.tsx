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
            <span className="item-time">2022.10 ~ 2023.至今</span>
            <a className="btn item-more" href="http://www.gogobyte.com/" target="_blank">犬安科技</a>
            <h3 className="item-name">御织 & Threat Go </h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              御织平台通过 <strong>X6 画布</strong>和基于 <strong>Formily</strong> 中 <strong>JSON Schema</strong> 风格的低代码表单方案
              来将 Tara 分析中的<strong>“系统建模”</strong>、<strong>“攻击树建模”</strong> 等核心阶段组织起来，输出符合法规的安全报告。
              <strong>“阶段底部通用表格”</strong>、<strong>“元素编辑通用面板”</strong>都设计有统一的 <strong>JSON Schema 低代码</strong> 入口方案。
              重点维护核心低代码引擎，解决过为 <strong>@formily/antd</strong> 库中的 Table 组件开发定制化的
              <strong>单元格编辑</strong>、<strong>列宽拖拽</strong>、<strong>排序拖拽</strong>等功能。
              持续升级画布引擎架构，迈向 2024 协同时代。以及解决了更多的基于 <strong>Proxy API</strong> 的 Fomily 双向联动问题。
              <strong>Threat Go</strong> 基于开源项目 <strong>chaiNNer</strong> 搭建，社区中深度交流过给 <strong>EventSource API</strong> 添加自定义头部的问题。
            </p>
          </div>
        </div>
        <div className="item">
          <header className="item-hd">
            <span className="item-time">2020.11 ~ 2022.10</span>
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
            <span className="item-time">2020.06 ~ 2022.10</span>
            <a className="btn item-more" href="https://www.didiglobal.com/" target="_blank">滴滴出行</a>
            <h3 className="item-name">CMDB</h3>
          </header>
          <div className="item-bd">
            <p className="section-content">
              该平台全量支撑滴滴所有业务，建设多地数据中心集群和骨干网络，具备数十万台服务器规模的管理能力。
              新版前端围绕 <strong>Single SPA</strong> 与 <strong>React</strong> 生态从零搭建微前端全链路架构体系，
              拆分出 <strong>服务器控制台</strong> | <strong>负载均衡</strong> | <strong>域名管理</strong>
                | <strong>CMDB</strong> ｜ <strong>IT 资产管理</strong> | <strong>重装报障</strong>
                | <strong>报表</strong> | <strong>工单</strong> 等十余个子应用。
              提供诸多微前端全链路挑战的统一解决方案。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
