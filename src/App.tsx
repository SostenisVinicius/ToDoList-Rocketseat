import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { EmptyTasks } from './components/EmptyTasks';
import { AddNewTask } from './components/AddNewTask';
import { Taks } from './components/Task';
import { useState } from 'react';
import { CreatedAndConcludedTasks } from './components/CreatedAndConcludedTasks';

export interface Comment {
  id: number;
  content: string;
  status: string;
}

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  function onDeleteTask(id: number) {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
  }

  function onUpdateStatus(id: number, newStatus: string) {
    const updatedComments = comments.map(comment => {
      if (comment.id === id) {
        return { ...comment, status: newStatus };
      }
      return comment;
    });
    setComments(updatedComments);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <AddNewTask comments={comments} setComments={setComments} />
          <CreatedAndConcludedTasks comments={comments} />
          {comments.length === 0 ? (
            <EmptyTasks />
          ) : (
            <div>
              {comments.map(comment => (
                <Taks key={comment.id} comments={comment} onUpdateStatus={onUpdateStatus} onDeleteTaks={onDeleteTask} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
