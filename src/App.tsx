import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ChatBot from './components/ChatBot';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Opportunities from './components/Opportunities';
import Settings from './components/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('chat');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto animate-pulse">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            HEVA
          </h2>
          <p className="text-gray-600">Loading your AI assistant...</p>
          <div className="mt-4">
            <div className="w-48 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'chat':
        return <ChatBot />;
      case 'dashboard':
        return <Dashboard />;
      case 'opportunities':
        return <Opportunities />;
      case 'settings':
        return <Settings />;
      default:
        return <ChatBot />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderCurrentPage()}
    </Layout>
  );
}

export default App;