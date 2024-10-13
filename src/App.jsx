import { ContactInfo } from "./components/contactInfo/ContactInfo"
import { Header } from "./components/header/Header"
import { Skills } from "./components/skills/Skills"


function App() {
 
  return (
    <>
      <Header/>
      <div className="page">
        <ContactInfo/>
        <Skills/>
      </div>
    </>
  )
}

export default App
