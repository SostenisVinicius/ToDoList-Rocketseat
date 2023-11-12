import styles from './EmptyTasks.module.css';

import clipboard from '../assets/Clipboard.svg';
export function EmptyTasks() {

  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="" />
      <p className={styles.emptyDescription}>
        <strong className={styles.emptyText}>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}