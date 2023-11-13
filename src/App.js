import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
 
function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/Company">Empresa</Link>
        <Link to="/NewProject">Home</Link>
      </div>
      <Container customClass="min_height">
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
