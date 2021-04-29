import React from 'react';
import GlobalStyle from "./styles/global"
import Navbar from "./components/Navbar"
import Menubar from "./components/Menubar"
import PageBody from "./components/PageBody"


const App:React.FC = ()=> (
  <>
    <GlobalStyle/>
    <Navbar/>
    <Menubar/>
    <PageBody/>
  </>
)

export default App;
