import './App.css';

function App() {
  return (
    <div className="App">
     <h1>iNoteBook - Your Own Notebook on the Cloud</h1>
    </div>
  );
}

export default App;


// We install "npm i concurrently". This node package helps to run backend and frontend at the same time means we can use "npm start" and "nodemon backend/index.js" simultaneously in one terminal instead of using separate terminals. Also add ["both": "concurrently \"npm start\" \"nodemon backend/index.js\""] in package.json scripts such that we can use command "npm run both" to start both frontend and backend at the same time.