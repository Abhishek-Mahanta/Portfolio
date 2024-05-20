import Nav from './Nav'
import Hero from './Hero'
import { Project } from './Project'
import { Skills } from './Skills'
import  Footer  from './footer'
import  Contactus  from './Contactus'
import  Education  from './Education'
import  Experience  from './Experience'
import  About  from './About'
import  Photos  from './Photos'


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