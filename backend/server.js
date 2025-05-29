require('dotenv').config(); 
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');


const app = express();
app.use(cors());


const API_KEY = process.env.API_KEY;
const API_URL = `https://soccer.sportmonks.com/api/v2.0/fixtures/between/2022-01-30/2025-05-06?api_token=${API_KEY}&include=localTeam,visitorTeam`;



app.get('/api/matches', async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (!data || !data.data) {
      return res.status(500).json({ error: 'Unexpected API response structure', raw: data });
    }

    const matches = data.data.map(match => {
  const team1 = match.localTeam?.data?.name || 'Team 1';
  const team2 = match.visitorTeam?.data?.name || 'Team 2';
  return {
    match_id: match.id,
    date: match.time.starting_at.date_time,
    team1,
    team2,
  };
});


    res.json(matches);
  } catch (error) {
    console.error('Error fetching match data:', error);
    res.status(500).json({ error: 'Failed to fetch match data' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});




