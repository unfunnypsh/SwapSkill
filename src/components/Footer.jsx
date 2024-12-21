import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

        {/* SwapSkill Description */}
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4">SwapSkill</h1>
          <p className="text-sm mb-4">
            SwapSkill is a revolutionary platform that connects students to share their skills and collaborate on exciting projects. Whether you're looking to learn something new or teach others, SwapSkill provides an interactive environment to foster growth and community building.
          </p>
          <p className="text-sm mb-4">
            Our mission is to empower students by providing a platform for peer-to-peer mentorship, knowledge exchange, and hands-on learning through real-world projects. Join SwapSkill and be part of the future of skill-sharing.
          </p>
        </div>

        {/* Contact Info and Social Media Links */}
        <div className="flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">Phone: +1 234 567 890</p>
          <p className="mb-2">Email: info@swapskill.com</p>
          <p className="mb-4">Address: 456 Skill Street, Tech City</p>
          
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div className="flex flex-col space-y-2">
  <h3 className="text-xl font-bold mb-2">Our Services</h3>
  <ul className="space-y-1">
    <li><a href="#" className="text-white hover:text-blue-600 hover:underline">Skill-Sharing Platform</a></li>
    <li><a href="#" className="text-white hover:text-blue-600 hover:underline">Collaborative Project Support</a></li>
    <li><a href="#" className="text-white hover:text-blue-600 hover:underline">Student Networking</a></li>
    <li><a href="#" className="text-white hover:text-blue-600 hover:underline">Peer-to-Peer Mentorship</a></li>
  </ul>
</div>


      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 border-t border-gray-800">
        <p className="text-sm">
          Copyright &copy; 2024 SwapSkill. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
