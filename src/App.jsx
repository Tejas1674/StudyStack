
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import CPP from './pages/CPP.jsx';
import Java from './pages/Java.jsx';
import WPT from './pages/WPT.jsx'
import Database from './pages/Database.jsx'
import AdvanceJava from './pages/AdvanceJava.jsx'
import DSA from './pages/DSA.jsx'
import SDM from './pages/SDM.jsx'
import Dotnet from './pages/Dotnet.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/cpp" element={<CPP/>} />
          <Route path="/java" element={<Java/>} />
          <Route path="/wpt" element={<WPT/>} />
          <Route path="/database" element={<Database/>} />
          <Route path="/advjava" element={<AdvanceJava />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/sda" element={<SDM />} />
          <Route path="/dotnet" element={<Dotnet />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;