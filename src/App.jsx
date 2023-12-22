import './App.css'
import {  Image } from 'semantic-ui-react'
import logo from '../src/assets/images/logo-github.png';
import SearchBar from './SearchBar';
import Message from './Message';
import RepoResults from './ReposResults';
import repos from '../src/data/repos';

function App() {
  console.log(repos.total_count)

  return (
    <>
      <div className="App">
        <header className="header"></header>
          <Image src={logo} size='small' centered />
          <SearchBar />
          <Message total={repos.total_count} />
          <RepoResults list={repos.items}/>
      </div>
     </>
  )
}
// console.log(data.total);
export default App
