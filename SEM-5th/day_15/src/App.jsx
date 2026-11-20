import Login from './component/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';

const App = () => {
  const user = {
    name: "Gaurav Singh",
    Email: "gsinghgv722@gmail.com",
    password: "1234"
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login user={user} />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;