import { useEffect, useState } from 'react';

const FetchArticles = () => {
  const [posts, setPosts] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [errorText, setErrorText] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const loadPosts = async () => {
    try {
      setLoadingState(true);
      setErrorText('');

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error('Erreur lors du chargement des articles');
      }

      const result = await response.json();
      setPosts(result);

    } catch (err) {
      setErrorText(err.message);
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [refreshKey]);

  if (loadingState) return <p>Chargement des articles...</p>;
  if (errorText) return <p>Erreur : {errorText}</p>;

  return (
    <div className="section-bloc">
      <h2>Articles chargés avec Fetch</h2>

      <button
        className="action-btn"
        onClick={() => setRefreshKey(prev => prev + 1)}
      >
        Actualiser les articles
      </button>

      <ul className="liste-elements">
        {posts.slice(0, 10).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchArticles;
