
This project displays a list of upcoming (or past) soccer matches using the **SportMonks API**, with a simple **Node.js backend** and a clean **HTML frontend**.

> **Objective:**  
Create a basic web page that displays a list of upcoming matches for a chosen sport (Soccer/Basketball) using a freely available API.  

> **Instructions from SportsOrca:**  
- Show match details: **Team 1**, **Team 2**, and **Date/Time**.  

---

##  Tech Stack

| Layer     | Tech Used            |
|-----------|----------------------|
| Backend   | Node.js, Express.js, node-fetch |
| Frontend  | HTML, CSS, JavaScript |
| API       | SportMonks Soccer API |

---
 API Used

- **SportMonks Soccer API**  
  [https://www.sportmonks.com/soccer-api](https://www.sportmonks.com/soccer-api)
  
  Endpoint used:  https://soccer.sportmonks.com/api/v2.0/fixtures/between/2025-01-30/2025-05-06


>  **Note:**  
I used **older dates** in the API because at the time of development, no future matches were available in the free version of the API.  
This ensures proper data is fetched and displayed for the purpose of this task.

---

## 📁 Project Structure

SportsOrca/
├── backend/
│ └── server.js # Express server fetching match data
├── public/
│ └── index.html # Frontend to view matches
├── .gitignore
├── package.json
└── README.md

---

##  How to Run the Project

### Step 1: Clone the Repository

git clone https://github.com/yourusername/sportsorca-soccer-matches.git
cd sportsorca-soccer-matches

Step 2: Install Backend Dependencies

cd backend
npm install

Step 3: Start the Server
node server.js

The backend will run at:
🌐 http://localhost:3000

 View the Frontend
Once the backend is running:

Open your browser

Go to:
http://localhost:3000/public/index.html



