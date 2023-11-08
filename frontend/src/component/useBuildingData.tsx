import { useState, useEffect } from 'react';

const useBuildingData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiHost = process.env.REACT_APP_API_HOST || '';

  useEffect(() => {
    fetch(`${apiHost}/buildings`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [apiHost]); 

  return { data, loading, error };
};

export default useBuildingData;