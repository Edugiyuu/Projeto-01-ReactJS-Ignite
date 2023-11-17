import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
      onDeleteComment(content);
    }
  return (
    <div className={styles.comment}>

        <Avatar hasBorder={false} src="https://th.bing.com/th/id/OIG.GbQXgXfpk.4bZuIHZAH3?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Santos</strong>
              <time title="11 de Maio às 08:13h" dateTime="2023-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}