import Header from "./Components/Header";
import HEROSECTION from "./Components/HeroSection";
import CARDS from "./Components/Cards";
import NAVIMAGE from "./Components/navimage";
import CONTENTCARDS from "./Components/ContentCards";
import CONTENT from "./Components/content";
import Professional from "./Components/Professional";
import WorkFlow from "./Components/Workflow";
import Footer from "./Components/footer";
import ContactFooter from "./Components/ContactFooter";
function App() {
  return (
    <>
      <Header></Header>
      <HEROSECTION></HEROSECTION>
      <CARDS></CARDS>
      <CONTENT></CONTENT>
      <NAVIMAGE></NAVIMAGE>
      <CONTENTCARDS></CONTENTCARDS>
      <Professional></Professional>
      <ContactFooter></ContactFooter>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  );
}

export default App;
