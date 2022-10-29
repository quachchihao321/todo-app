import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home'
import TodoList from './components/TodoList'
import Chart from './components/Chart'
import styles from './styles/modules/app.module.scss'

function App() {
  return (
    <div>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <NavLink to="/" end className={styles.itemLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/todo" className={styles.itemLink}>
              Todo App
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/chart" className={styles.itemLink}>
              Timeline
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-app" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </div>
  )
}

export default App
