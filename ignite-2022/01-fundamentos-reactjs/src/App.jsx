import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';

// author: { avatar_url: "", name:"", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/17733564?v=4',
      avatar: 'Jonathan dos Santos',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        context: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        context: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        context: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2023-04-15 16:52:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/499550?v=4',
      avatar: 'Evan You',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        context: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        context: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        context: 'http://evanyou.me'
      }
    ],
    publishedAt: new Date('2023-05-05 18:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}