import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [repo, setRepo] = useState([]);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState('zeddinfo');
  const [isSearch, setSearch] = useState(false);
  const [loading, isLoading] = useState(false);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
