import Sidebar from "../components/Sidebar";

const Dashboard = () => {

  return (
    <div className="h-screen flex bg-gray-200">
      {/* Sidebar */}
      <Sidebar  />

      {/* Chat Window */}
      <div className="flex-1">
        
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a user to start chatting
          </div>
      </div>
    </div>
  );
};

export default Dashboard; 