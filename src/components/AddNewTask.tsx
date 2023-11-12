import { useState, FormEvent, ChangeEvent, InvalidEvent} from 'react';
import styles from './AddNewTask.module.css';
import { PlusCircle } from 'phosphor-react';

interface TaksProps {
  comments: {
    id: number;
    content: string;
    status: string;
  }[];
  setComments: (comments: {
    id: number;
    content: string;
    status: string;
  }[]) => void;
}

export function AddNewTask( {comments, setComments}: TaksProps) {
  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
  
    const newTask = {
      id: Date.now(),
      content: newCommentText,
      status: 'notConcluded',
    };
  
    setComments([...comments, newTask]);
    setNewCommentText('');
  }
  

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <form onSubmit={handleCreateNewComment} className={styles.newTaskForm}>
      <input
        name='comment'
        placeholder='Adicione uma nova tarefa'
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
      />

      <button type='submit' disabled={isNewCommentEmpty}>
        Criar
        <PlusCircle size={20} weight='bold' style={{ marginLeft: 8 }} />
      </button>
    </form>
  )
}