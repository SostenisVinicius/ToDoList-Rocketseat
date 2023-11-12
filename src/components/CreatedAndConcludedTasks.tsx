import styles from './CreatedAndConcludedTasks.module.css'

interface TaksProps {
  comments: {
    id: number;
    content: string;
    status: string;
  }[];
}

export function CreatedAndConcludedTasks({ comments }: TaksProps) {
  return (
    <div className={styles.header}>
      <p className={styles.createdTasks}>
        Tarefas criadas
        <span className={styles.createdTasksSpan}>{comments.length}</span>
      </p>
      <p className={styles.concludedTasks}>
        Tarefas concluídas
        {comments.length === 0 ? (
          <span className={styles.concludedTasksSpan}>0</span>
        ) : (
          <span className={styles.concludedTasksSpan}>
            {comments.filter(comment => comment.status === 'concluded').length} de {comments.length}
          </span>
        )}
      </p>
    </div>
  )
}