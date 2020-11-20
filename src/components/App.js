import Header from './common/Header';
import AddCard from './common/AddCard';

import styles from './styles/App.module.scss'
import { useState } from 'react';

function App() {
  const [projects, setProjects] = useState([])
  return (
    <div>
      <div>
        <Header center={'Maria Continuity'} />
      </div>
      <div className={styles.projectArea}>

        {
          projects.map((prgt, i) => {
            return (<div>
              <AddCard buttonTitle={i} />
            </div>)
          })
        }
        <div >
          <AddCard />
        </div>
      </div>
    </div>
  );
}

export default App;
