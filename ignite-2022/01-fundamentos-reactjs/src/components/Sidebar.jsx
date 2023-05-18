import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/17733564?v=4"
        />

        <strong>Jonathan dos Santos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <PencilLine size={20} />
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}