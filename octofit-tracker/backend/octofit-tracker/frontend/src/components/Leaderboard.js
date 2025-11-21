import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboards, setLeaderboards] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboards/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboards:', data);
        setLeaderboards(data.results || data);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboards.map((entry, idx) => (
          <li key={idx}>{entry.team?.name || 'Unknown'}: {entry.points} pts</li>
        ))}
      </ul>
    </div>
  );
};
export default Leaderboard;
