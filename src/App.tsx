import React from 'react'
import './App.scss'
import './assets/icon/iconfont.css'
import { Header, PrintFooter, GithubFooter } from './components/Basic'
import { Left1 } from './components/Left1'
import { Left2 } from './components/Left2'
import { Left3 } from './components/Left3'
import { Left4 } from './components/Left4'
import { Right1 } from './components/Right1'
import { Right2 } from './components/Right2'

function App() {
  return (
    <div>
      <a className="pdf" href="./resume.pdf"><i className="iconfont icon-pdf"></i>PDF简历</a>
      <p className="last-modified">最后更新时间：2020年03月12日</p>
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
