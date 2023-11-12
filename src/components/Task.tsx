import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';

interface TaksProps {
  comments: {
    id: number;
    content: string;
    status: string;
  };
  onUpdateStatus: (id: number, newStatus: string) => void;
  onDeleteTaks: (id: number) => void;
}

export function Taks({ comments, onUpdateStatus, onDeleteTaks }: TaksProps) {
  const [concluded, setConcluded] = useState(comments.status === 'concluded');

  function handleUpdateStatus() {
    const newStatus = concluded ? 'notConcluded' : 'concluded';
    onUpdateStatus(comments.id, newStatus);
    setConcluded(!concluded);
  }

  function handleDeleteTaks() {
    onDeleteTaks(comments.id);
  }

  return (
    <div className={styles.taskContent}>
      <button
        className={concluded ? styles.concluded : styles.notConcluded}
        onClick={handleUpdateStatus}
        title={concluded ? 'Marcar tarefa como não concluída' : 'Marcar tarefa como concluída'}
      >
        {concluded ? <CheckCircle size={24} weight="fill" /> : <Circle size={24} />}
      </button>
      <p className={concluded ? styles.contentConcluded : '' }>
        {comments.content}
      </p>
      <button className={styles.delete} onClick={handleDeleteTaks} title="Deletar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
}
