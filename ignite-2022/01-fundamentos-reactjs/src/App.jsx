import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Jonathan dos Santos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum exercitationem maiores repellat dicta nihil incidunt culpa id in ex mollitia."
          />

          <Post
            author="Cinder Lopes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum at, soluta earum cupiditate nulla fuga magnam accusantium asperiores tempora debitis aperiam odio? Illum, optio exercitationem. Laudantium aspernatur cum commodi odio harum quam numquam? Cupiditate laudantium sapiente dolor quibusdam numquam. Ipsum, dolor. Recusandae voluptate aspernatur optio repudiandae aliquid fugiat nesciunt dolores."
          />
        </main>
      </div>
    </div>
  )
}