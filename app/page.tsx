import { GithubFooter, Header } from '@/components/Basic'
import { CareerExperience } from '@/components/career-experience'
import { ImportantProject } from '@/components/important-project'
import { ProfessionalSkill } from '@/components/professional-skill'
import { UniversityActivity } from '@/components/university-activity'
import { UniversityAward } from '@/components/university-award'

import 'styles/globals.css'
import 'public/assets/icon/iconfont.css'

export default function Home() {
  return (
    <div>
      {/* <a className="pdf" href="http://qiniu.ningo.cloud/hylerrix/resume.pdf"><i className="iconfont icon-pdf"></i> PDF 简历</a> */}
      {/* <p className="last-modified">最后更新时间：2023 年 06 月 25 日 - 版本号：v0.6.0</p> */}
      <div className="content">
        <Header />
        <div className="content-bd">
          <div className="content-left">
            <CareerExperience />
            <ImportantProject />
          </div>
          <div className="content-right">
            <ProfessionalSkill />
            <UniversityActivity />
            <UniversityAward />
            {/*<OpenSource />*/}
          </div>
        </div>
        {/* <PrintFooter /> */}
      </div>
      <GithubFooter />
    </div>
  )
}
