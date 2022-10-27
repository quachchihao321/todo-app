import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Home from './components/Home'
import TodoList from './components/TodoList'
import Chart from './components/Chart'
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link to="/"><a className={styles.itemLink}>Home</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/todo" ><a className={styles.itemLink}>Todo App</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/chart"><a className={styles.itemLink}>Chart</a></Link>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todo-app" element={<Home/>}/>
          <Route path="/todo" element={<TodoList/>}/>
          <Route path="/chart" element={<Chart/>}/>
      </Routes>
    </div>
  )
}

export default App;
