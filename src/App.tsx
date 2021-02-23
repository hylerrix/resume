import React from 'react'
import './App.scss'
import './assets/icon/iconfont.css'
import { Header, PrintFooter, GithubFooter } from './components/Basic'
import { CareerExperience } from './components/career-experience'
import { UniversityActivity } from './components/university-activity'
import { UniversityAward } from './components/university-award'
import { ImportantProject } from './components/important-project'
import { OpenSource } from './components/open-source'
import { ProfessionalSkill } from './components/professional-skill'

function App() {
  return (
    <div>
      <a className="pdf" href="http://qiniu.ningo.cloud/hylerrix/resume.pdf"><i className="iconfont icon-pdf"></i> PDF 简历</a>
      <p className="last-modified">最后更新时间：2021 年 02 月 23 日 - 版本号：v0.4.0</p>
      <div className="content">
        <Header />
        <div className="content-bd">
          <div className="content-left">
            <CareerExperience />
            <ImportantProject />
            <UniversityAward />
          </div>
          <div className="content-right">
            <ProfessionalSkill />
            <UniversityActivity />
            <OpenSource />
          </div>
        </div>
        <PrintFooter />
      </div>
      <GithubFooter />
    </div>
  )
}

export default App
