import React from "react";

const ProfileSidebar = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
      {/* Profile Image */}
      <div className="relative">
        <img
          src="/images/profile-bg.svg"
          alt="Background"
          className="w-full h-20 rounded-lg object-cover"
        />
        <img
          src="/images/user-avatar.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-white mx-auto -mt-8"
        />
      </div>

      {/* User Info */}
      <h3 className="text-lg font-bold mt-4">John Doe</h3>
      <p className="text-sm text-gray-400">React Developer</p>

      {/* Actions */}
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
        Edit Profile
      </button>
      <button className="mt-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg w-full">
        Add a Photo
      </button>
    </div>
  );
};

export default ProfileSidebar;
