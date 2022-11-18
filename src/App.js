import './App.scss';
import Content from './components/Content';
import Feature from './components/Feature';
import Header from './components/Header';
import Logo from './components/Logo';
import Nav from './components/Nav';
import WhatIsGtp from './components/WhatIsGtp';

function App() {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Logo />
      <WhatIsGtp />
      <Feature />
      <Content/>
    </div>
  );
}

export default App;

