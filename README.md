# 🎰 Restaurant Roulette

Restaurant Roulette is a full-stack web application that helps users discover nearby restaurants at random. Instead of endlessly scrolling through options, users can apply filters and let the app pick a place for them.

Built with React and Express.

---

## 🚀 Features (Planned & In Progress)

- 📍 Detect user location
- 🍽 Fetch nearby restaurants using an external API
- 🎛 Filter by cuisine, rating, and price
- 🎲 Random restaurant selection
- ⭐ Save favorites (planned)
- 🗺 Map integration (planned)

---

## 🛠 Tech Stack

### Frontend
- React
- Axios
- CSS / Tailwind (TBD)

### Backend
- Node.js
- Express
- External restaurant API (Google Places or Yelp)

---

## 📂 Project Structure

restaurant-roulette/
│
├── client/        # React frontend
├── server/        # Express backend
└── README.md

---

## 🔐 Environment Variables

Create a `.env` file in the `server` folder:

PORT=5000  
API_KEY=your_api_key_here  

---

## 🧠 How It Works

1. User allows location access or enters a city.
2. Frontend sends request to backend.
3. Backend queries restaurant API.
4. Restaurants are filtered.
5. One restaurant is selected randomly and returned.

---

## 🧪 Running the Project Locally

### Backend

cd server  
npm install  
npm run dev  

### Frontend

cd client  
npm install  
npm start  

---

## 🎯 Future Improvements

- User authentication
- Restaurant history tracking
- Weighted randomness (higher-rated restaurants more likely)
- Group voting mode
- Deployment to cloud platform

---

## 📌 Author

Your Name  
Computer Science Student  
