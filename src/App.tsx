import { Route, Routes } from 'react-router-dom';
import GlobalContext from './context';
import Header from './pages/Header';
import Detail from './pages/Detail';

function App() {
  return (
    <GlobalContext>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/restaurants/:restaurant_id" element={<Detail />} />
      </Routes>
    </GlobalContext>
  );
}

export default App;
