import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [repo, setRepo] = useState([]);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState('zeddinfo');
  const [isSearch, setSearch] = useState(false);
  const [loading, isLoading] = useState(false);

  const _initApi = async (name) => {
    isLoading(true);
    await axios.get(`https://api.github.com/users/${name}/repos?per_page=10&page=${page}`)
    .then(res => {
      const data = res.data;
      console.log('data', data);
      setRepo(data);
      isLoading(false);
    })
    .catch((error) => {
      console.log('error call api', error);
      setRepo([]);
      isLoading(false);
    })
  }

  const handleSearch = () => {
    _initApi(user);
  }


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
