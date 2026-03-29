import FetchArticles from './FetchData';
import AxiosUsers from './AxiosData';

const App = () => {

  return (
    <main className="page-api">
      
      <header>
        <h1>TP — Consommation d’une API avec React</h1>
      </header>

      <section>
        <FetchArticles />
      </section>

      <section>
        <AxiosUsers />
      </section>

    </main>
  );
};

export default App;
