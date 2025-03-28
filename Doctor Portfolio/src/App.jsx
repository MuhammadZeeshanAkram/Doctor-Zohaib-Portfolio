import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './App.module.css';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import WhatsAppFAB from './components/Whatsapp/WhatsAppFAB';


function App() {
 

  return (
    <div className={styles.App}> 
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      
      <WhatsAppFAB/>
    </div>
  )
}

export default App;
