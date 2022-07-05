import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){

  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=260&q=20"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/ElaineLeandro.png"/>      
         <strong>Elaine Leandro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>

  );
}