import './App.css'
import {  Image } from 'semantic-ui-react'
import logo from '../src/assets/images/logo-github.png';
import SearchBar from './SearchBar';
import Message from './Message';
import RepoResults from './ReposResults';

function App() {

  return (
    <>
      <div className="App">
        <header className="header"></header>
          <Image src={logo} size='small' centered />
          <SearchBar />
          <Message />
          <RepoResults />
      </div>
     </>
  )
}

export default App
