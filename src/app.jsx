import './app.css'
import Header from './components/header/header'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Projects from './components/projects/projects'
import References from './components/references/references'
import Footer from './components/footer/footer'
import Skills from './components/skills/skills'
function App() {
  return (
    <div className="container">
     <Header/>


      <main>
        <About/>

       <Experience/>

       <Projects/>
        <Skills/>
       <References/>
      </main>

      <Footer/>

    </div>
  )
}

export default App