import Nav from './nav'
import Hero from './hero'
import { Project } from './project'
import { Skills } from './skills'
import  Footer  from './footer'
import  Contactus  from './contactus'
import  Education  from './education'
import  Experience  from './experience'
import  About  from './about'
import  Photos  from './photos'


const main = () => {
  return (
    <div style={{backgroundColor: "#2F3C7E"}}>
        <Nav />
        <Hero />
        <About />
        <Project />
        <Skills />
        <Education />
        <Experience />
        <Photos />
        <Contactus />
        <Footer />
    </div>
  )
}

export default main