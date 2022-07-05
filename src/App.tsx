import { Post } from './components/Post';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/ElaineLeandro.png',
      name: 'Elaine Leandro',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content:'Olá pessoal 👋🏻'},
      {type: 'paragraph', content:'Estou trabalhando em projeto no meu portifa. É um projeto onde estou colocando o aprendizado em react na pratica.'},
      {type: 'link', content:'lan.web/dev'}, 
    ],
    publishedAt: new Date('2022-06-15 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/GabiTavaresV.png',
      name: 'Gabriela Tavares',
      role: 'Back-End  Developer',
    },
    
    content: [
      {type: 'paragraph', content:'Hello Devs 🖖🏾'},
      {type: 'paragraph', content:'Estou trabalhando em projeto no meu portifólio. É um projeto onde estou colocando o aprendizado em NestJS na pratica.'},
      {type: 'link', content:'gabis.back/dev'}, 
    ],
    
    publishedAt: new Date('2022-06-10 20:00:00')
  },
  {
    id:3,
    author:{
      avatarUrl: 'https://github.com/Andrea-Santos20.png',
      name: 'Andrea Santos',
      role: 'Back-End Developer'
    },
    content: [
      {type: 'paragraph', content:'Oie galerinha 🤘🏾'},
      {type: 'paragraph', content:'Estou trabalhando em projeto no meu portifólio. É um projeto onde estou colocando o aprendizado em node na pratica.'},
      {type: 'link', content:'deia.back/dev'}, 
    ],
    
    publishedAt: new Date('2022-07-4 20:57:00')
  }
];


function App() {


  return (

    <div>
      <Header/>

      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          {posts.map(posts => {
           return (
            <Post
              key={posts.id}
              author={posts.author}
              content={posts.content}
              publishedAt={posts.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
    
  )
}

export default App
