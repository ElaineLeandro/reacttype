import styles from './Header.module.css'
import { FlowerLotus } from 'phosphor-react'

export function Header(){
  return(
    <header className={styles.header}>
      <FlowerLotus size={40} color="#7dd3fc" weight="duotone"/>
    </header>
    
  )
}