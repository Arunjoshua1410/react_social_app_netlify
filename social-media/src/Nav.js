import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './context.js/DataContext';
const Nav = () => {
  const {search,setSearch}=useContext(DataContext)
  return (
    <nav className="Nav">
       <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
           <label htmlFor="search">Search Posts</label>
           <input
           id="search"
           type="text"
           placeholder="search post"
           value={search}
           onChange={(e)=>setSearch(e.target.value)}
           />
       </form>
       <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="post">Post</Link></li>
       </ul>
    </nav>
  )
}

export default Nav