import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import ListCard from './components/listCard';

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
      <div className="App">
      <div style={{padding: 20, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <h2 style={{textAlign: 'center'}}>Repo App</h2>
      </div>
      <div style={{padding: 20, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <input type="text" style={{height: 30, borderRadius: 5, backgroundColor: '#f5f5f5', padding: 8}} placeholder="Cari User" value={user} onChange={(e) => setUser(e.target.value)}/>
        <button style={{height: 30, borderRadius: 5, padding: 5, marginLeft: 10}} onClick={() => handleSearch()}>
          Search User
        </button>
      </div>
      {repo.length > 0 ? repo.map((item, index) => {
         return <ListCard item={item}/>
       }) : <div style={{alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}><p>Data tidak ditemukan</p></div>}

<div style={{padding: 30, alignContent: 'center', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}} onClick={() => setPage((c) => c+1)}>
         <p>Load More</p>
       </div>
    </div>
    </div>
  );
}

export default App;
