import React from "react";
import { Hero, Sales , FlexContent, Stories, Footer, Navbar} from "./components";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from "./data/Data";

const App = () => {
  return (
    <>
     <Navbar/>
      <main className="flex flex-col gap-16 ">
        <Hero  heroapi={heroapi}/>
        <Sales endpoint={popularsales}  ifExists/>
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes}/>
         <FlexContent endpoint={sneaker} />
         <Stories story={story}/>
         <Footer footerAPI={footerAPI}/>
      </main>
    </>
  );
};

export default App;
