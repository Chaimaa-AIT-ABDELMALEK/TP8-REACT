import { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [refreshIndex, setRefreshIndex] = useState(0);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setErrorMsg('');

      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);

    } catch (error) {
      setErrorMsg(error.message || 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [refreshIndex]);

  if (loading) return <p>Chargement des utilisateurs...</p>;
  if (errorMsg) return <p>Erreur : {errorMsg}</p>;

  return (
    <div className="section-bloc">
      <h2>Utilisateurs chargés avec Axios</h2>

      <button
        className="action-btn"
        onClick={() => setRefreshIndex(prev => prev + 1)}
      >
        Actualiser les utilisateurs
      </button>

      <ul className="liste-elements">
        {users.map((u) => (
          <li key={u.id}>
            {u.name} | {u.email} | {u.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosUsers;
