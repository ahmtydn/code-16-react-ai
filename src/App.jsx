import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import ChatBot from './pages/ChatBot';
import Protected from './components/Protected';
import SetAPIKey from './components/SetAPIKey';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/chat-bot'
            element={
              <Protected>
                <ChatBot />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
