import React from "react";
import { useNavigate } from "react-router-dom";

const PeerCard = ({ peer }) => {
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate("/projects"); // Redirects to Projects Page
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <img
        src={peer.avatar}
        alt={peer.name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h3 className="text-center font-bold text-lg text-gray-700">{peer.name}</h3>
      <p className="text-center text-gray-500 text-sm">{peer.skill}</p>
      <button
        onClick={handleConnect}
        className="bg-blue-500 text-white py-1 px-4 rounded mt-4 w-full hover:bg-blue-600"
      >
        Connect
      </button>
    </div>
  );
};

export default PeerCard;
