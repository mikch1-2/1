import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/features/Features';
import ChatbotPage from './pages/ChatbotPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen">
      <Navbar onPageChange={setCurrentPage} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Features onPageChange={setCurrentPage} />
        </>
      ) : currentPage === 'chatbot' ? (
        <ChatbotPage />
      ) : null}
    </div>
  );
}

export default App;