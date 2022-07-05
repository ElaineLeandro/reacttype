import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash} from 'phosphor-react'
import { useState } from 'react';

interface CommentProps{
  content: string;
  onDeleteCommment: (comment: string) => void;

}

export function Comment({content, onDeleteCommment} : CommentProps){

  const [likeCount, setLikeCount] = useState(0);


  function handleDeleteComment() {
    console.log("delete");
    onDeleteCommment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) =>{
      return state + 1
    });
  }
  
  return(
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/ElaineLeandro.png" 
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Elaine Leandro</strong>
              <time title="14 de junho ás 14:01h" dateTime='2022-06-14'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}