import React from 'react'
import './App.scss'
import './assets/icon/iconfont.css'
import { Header, PrintFooter, GithubFooter } from './components/Basic'
import { Left1 } from './components/Left1'
import { Left2 } from './components/Left2'
import { Left3 } from './components/Left3'
import { Right1 } from './components/Right1'
import { Right2 } from './components/Right2'
import { Right3 } from './components/Right3'

function App() {
  return (
    <div>
      <a className="pdf" href="http://qiniu.ningo.cloud/resume.pdf"><i className="iconfont icon-pdf"></i>PDF 简历</a>
      <p className="last-modified">最后更新时间：2020 年 03 月 12 日</p>
      <div className="content">
        <Header />
        <div className="content-bd">
          <div className="content-left">
            <Left1 />
            <Right1 />
            <Right3 />
          </div>
          <div className="content-right">
            <Left2 />
            <Left3 />
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
