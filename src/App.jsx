import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer,  Stats, Testmonials, Hero,Navbar } from "./components";
import {motion} from "framer-motion"

const variant = {
  hidden: {
    opacity: 0,
    y:100
  },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      type: "spring",
      delay:0.2,
      duration:0.7
    }
  }
}

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing />
        <CardDeal />
        <Testmonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;