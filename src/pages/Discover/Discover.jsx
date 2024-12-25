import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Nav from "react-bootstrap/Nav";
import ProfileCard from "./ProfileCard";
import "./Discover.css";

const Discover = () => {
  const [loading, setLoading] = useState(false);

  const [discoverUsers, setDiscoverUsers] = useState([]);
  const [webDevUsers, setWebDevUsers] = useState([]);
  const [mlUsers, setMlUsers] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    const getDiscoverUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/user/discover");
        console.log(data);
        setDiscoverUsers(data.data.forYou);
        setWebDevUsers(data.data.webDev);
        setMlUsers(data.data.ml);
        setOtherUsers(data.data.others);
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getDiscoverUsers();
  }, []);

  return (
    <>
      <div className="discover-page">
        <div className="content-container">
          <div className="nav-bar">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#for-you" className="navlink" id="foryou">
                For You
              </Nav.Link>
              <Nav.Link href="#popular" className="navlink" id="popular1">
                Popular
              </Nav.Link>
              <Nav.Link href="#web-development" className="navlink">
                Web Development
              </Nav.Link>
              <Nav.Link href="#machine-learning" className="navlink">
                Machine Learning
              </Nav.Link>
              <Nav.Link href="#others" className="navlink">
                Others
              </Nav.Link>
            </Nav>
          </div>
          <div className="heading-container">
            {loading ? (
              <div
                className="container d-flex justify-content-center align-items-center"
                style={{ height: "50vh" }}
              >
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <>
                <h1
                  id="for-you"
                  style={{
                    fontFamily: "Josefin Sans, sans-serif",
                    color: "#fbf1a4",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  For You
                </h1>
                <div className="profile-cards">
                  {discoverUsers && discoverUsers.length > 0 ? (
                    discoverUsers.map((user) => (
                      <ProfileCard
                        key={user?.username}
                        profileImageUrl={user?.picture}
                        name={user?.name}
                        rating={user?.rating ? user?.rating : 5}
                        bio={user?.bio}
                        skills={user?.skillsProficientAt}
                        username={user?.username}
                      />
                    ))
                  ) : (
                    <h1 style={{ color: "#fbf1a4" }}>No users to show</h1>
                  )}<ProfileCard
                          profileImageUrl="/assets/images/sample_profile.jpg"
                          name="Paakhi Maheshwari"
                          rating="⭐⭐⭐⭐⭐"
                          bio="Computer Science student specialising in data science and machine learning"
                          skills={["Machine Learning", "Python", "Data Science", "English", "Communication"]}
                        />
                        <ProfileCard
                          profileImageUrl="/assets/images/sample_profile2.jpeg"
                          name="Harsh Sharma"
                          rating="⭐⭐⭐⭐⭐"
                          bio="Web Developer and Competitive programmer, specialising in MERN stack."
                          skills={["React.JS", "MongoDB", "DSA", "Node.JS"]}
                        />
                </div>
                <h1
                  id="popular"
                  style={{
                    fontFamily: "Josefin Sans, sans-serif",
                    color: "#fbf1a4",
                    marginTop: "1rem",
                    marginBottom: "3rem",
                  }}
                >
                  Popular
                </h1>
                <h2 id="web-development">Web Development</h2>
                <div className="profile-cards">
                  {webDevUsers && webDevUsers.length > 0 ? (
                    webDevUsers.map((user) => (
                      <ProfileCard
                        key={user?.username}
                        profileImageUrl={user?.picture}
                        name={user?.name}
                        rating={4}
                        bio={user?.bio}
                        skills={user?.skillsProficientAt}
                        username={user?.username}
                      />
                    ))
                  ) : (
                    <h1 style={{ color: "#fbf1a4" }}>No users to show</h1>
                  )}
                </div>
                <h2 id="machine-learning">Machine Learning</h2>
                <div className="profile-cards">
                  {mlUsers && mlUsers.length > 0 ? (
                    mlUsers.map((user) => (
                      <ProfileCard
                        key={user?.username}
                        profileImageUrl={user?.picture}
                        name={user?.name}
                        rating={4}
                        bio={user?.bio}
                        skills={user?.skillsProficientAt}
                        username={user?.username}
                      />
                    ))
                  ) : (
                    <h1 style={{ color: "#fbf1a4" }}>No users to show</h1>
                  )}<ProfileCard
                    profileImageUrl="/assets/images/profile2.png"
                            name="Madan Gupta"
                            rating="⭐⭐⭐⭐⭐"
                            bio="Experienced professor specialising in data science and machine learning"
                            skills={["Machine Learning", "Python", "Data Science", "English", "Communication"]}
                          />
                          <ProfileCard
                            profileImageUrl="/assets/images/profile4.jpg"
                            name="Karuna Yadav"
                            rating="⭐⭐⭐⭐"
                            bio="Working professional specialising in Artificial Intelligence and Machine Learning Research."
                            skills={["Machine Learning", "Python", "Data Science", "Artificial Intelligence"]}
                          /> 
                        </div>
                        <h2 id="graphic-design">Graphic Design</h2>
                        <div className="profile-cards">
                          <ProfileCard
                            profileImageUrl="profile-image-url"
                            name="Name"
                            rating="⭐⭐⭐⭐⭐"
                            bio="yahan apan bio rakhre"
                            skills={["HTML", "CSS", "JS"]}
                          />
                          <ProfileCard
                            profileImageUrl="profile-image-url"
                            name="Name"
                            rating="⭐⭐⭐⭐⭐"
                            bio="yahan apan bio rakhre"
                            skills={["HTML", "CSS", "JS"]}
                          />
                        </div>
                        <h2 id="soft-skills">Soft Skills</h2>
                        <div className="profile-cards">
                          <ProfileCard
                            profileImageUrl="profile-image-url"
                            name="Name"
                            rating="⭐⭐⭐⭐⭐"
                            bio="yahan apan bio rakhre"
                            skills={["HTML", "CSS", "JS"]}
                          />
                          <ProfileCard
                            profileImageUrl="profile-image-url"
                            name="Name"
                            rating="⭐⭐⭐⭐⭐"
                            bio="yahan apan bio rakhre"
                            skills={["HTML", "CSS", "JS"]}
                          />
                </div>
                <h2 id="others">Others</h2>
                <div className="profile-cards">
                  {otherUsers && otherUsers.length > 0 ? (
                    otherUsers.map((user) => (
                      <ProfileCard
                        key={user?.username}
                        profileImageUrl={user?.picture}
                        name={user?.name}
                        rating={4}
                        bio={user?.bio}
                        skills={user?.skillsProficientAt}
                        username={user?.username}
                      />
                    ))
                  ) : (
                    <h1 style={{ color: "#fbf1a4" }}>No users to show</h1>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;





// import { useEffect, useState } from "react";
// import axios from "axios";
// import Spinner from "react-bootstrap/Spinner";
// import ProfileCard from "./ProfileCard"; // Assuming ProfileCard is already implemented

// import "./Discover.css";

// const Discover = () => {
//   const [loading, setLoading] = useState(false);
//   const [discoverUsers, setDiscoverUsers] = useState([]);
//   const [webDevUsers, setWebDevUsers] = useState([]);
//   const [mlUsers, setMlUsers] = useState([]);
//   const [otherUsers, setOtherUsers] = useState([]);

//   useEffect(() => {
//     const getDiscoverUsers = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get("/user/discover");
//         setDiscoverUsers(data.data.forYou);
//         setWebDevUsers(data.data.webDev);
//         setMlUsers(data.data.ml);
//         setOtherUsers(data.data.others);
//       } catch (error) {
//         console.error(error);
//         // Optionally show a toast notification for errors if you want
//         // toast.error("Failed to load data!");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getDiscoverUsers();
//   }, []);

//   return (
//     <div className="discover-page">
//       <div className="content-container">
//         <div className="nav-bar">
//           <nav className="navbar">
//             <ul className="nav-links">
//               <li>
//                 <a href="#for-you" className="navlink">
//                   For You
//                 </a>
//               </li>
//               <li>
//                 <a href="#popular" className="navlink">
//                   Popular
//                 </a>
//               </li>
//               <li>
//                 <a href="#web-development" className="navlink">
//                   Web Development
//                 </a>
//               </li>
//               <li>
//                 <a href="#machine-learning" className="navlink">
//                   Machine Learning
//                 </a>
//               </li>
//               <li>
//                 <a href="#others" className="navlink">
//                   Others
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div className="heading-container">
//           {loading ? (
//             <div
//               className="container d-flex justify-content-center align-items-center"
//               style={{ height: "50vh" }}
//             >
//               <Spinner animation="border" variant="primary" />
//             </div>
//           ) : (
//             <>
//               <h1
//                 id="for-you"
//                 style={{
//                   fontFamily: "Josefin Sans, sans-serif",
//                   color: "#fbf1a4",
//                   marginTop: "2rem",
//                   marginBottom: "1rem",
//                 }}
//               >
//                 For You
//               </h1>
//               <div className="profile-cards">
//                 {discoverUsers.length > 0 ? (
//                   discoverUsers.map((user) => (
//                     <ProfileCard
//                       key={user?.username}
//                       profileImageUrl={user?.picture}
//                       name={user?.name}
//                       rating={user?.rating || 5}
//                       bio={user?.bio}
//                       skills={user?.skillsProficientAt}
//                       username={user?.username}
//                     />
//                   ))
//                 ) : (
//                   <h1 style={{ color: "#fbf1a4" }}>No users to show</h1>
//                 )} <ProfileCard
//                 profileImageUrl="/assets/images/sample_profile.jpg"
//                 name="Paakhi Maheshwari"
//                 rating="⭐⭐⭐⭐⭐"
//                 bio="Computer Science student specialising in data science and machine learning"
//                 skills={["Machine Learning", "Python", "Data Science", "English", "Communication"]}
//               />
//               <ProfileCard
//                 profileImageUrl="/assets/images/sample_profile2.jpeg"
//                 name="Harsh Sharma"
//                 rating="⭐⭐⭐⭐⭐"
//                 bio="Web Developer and Competitive programmer, specialising in MERN stack."
//                 skills={["React.JS", "MongoDB", "DSA", "Node.JS"]}
//               />
//               </div>

//               <h1
//                 id="popular"
//                 style={{
//                   fontFamily: "Josefin Sans, sans-serif",
//                   color: "#fbf1a4",
//                   marginTop: "1rem",
//                   marginBottom: "3rem",
//                 }}
//               >
//                 Popular
//               </h1>
//               <h2 id="web-development">Web Development</h2>
//               <div className="profile-cards">
//                 {webDevUsers.length > 0 ? (
//                   webDevUsers.map((user) => (
//                     <ProfileCard
//                       key={user?.username}
//                       profileImageUrl={user?.picture}
//                       name={user?.name}
//                       rating={user?.rating || 4}
//                       bio={user?.bio}
//                       skills={user?.skillsProficientAt}
//                       username={user?.username}
//                     />
//                   ))
//                 ) : (
//                   <h1 style={{ color: "#fbf1a4" }}>No users to show</h1>
//                 )}
//               </div>

//               <h2 id="machine-learning">Machine Learning</h2>
//               <div className="profile-cards">
//                 {mlUsers.length > 0 ? (
//                   mlUsers.map((user) => (
//                     <ProfileCard
//                       key={user?.username}
//                       profileImageUrl={user?.picture}
//                       name={user?.name}
//                       rating={user?.rating || 4}
//                       bio={user?.bio}
//                       skills={user?.skillsProficientAt}
//                       username={user?.username}
//                     />
//                   ))
//                 ) : (
//                   <h1 style={{ color: "#fbf1a4" }}>No users to show</h1>
//                 )}
//                 <ProfileCard
//                     profileImageUrl="/assets/images/profile2.png"
//                     name="Madan Gupta"
//                     rating="⭐⭐⭐⭐⭐"
//                     bio="Experienced professor specialising in data science and machine learning"
//                     skills={["Machine Learning", "Python", "Data Science", "English", "Communication"]}
//                   />
//                   <ProfileCard
//                     profileImageUrl="/assets/images/profile4.jpg"
//                     name="Karuna Yadav"
//                     rating="⭐⭐⭐⭐"
//                     bio="Working professional specialising in Artificial Intelligence and Machine Learning Research."
//                     skills={["Machine Learning", "Python", "Data Science", "Artificial Intelligence"]}
//                   /> 
//                 </div>
//                 <h2 id="graphic-design">Graphic Design</h2>
//                 <div className="profile-cards">
//                   <ProfileCard
//                     profileImageUrl="profile-image-url"
//                     name="Name"
//                     rating="⭐⭐⭐⭐⭐"
//                     bio="yahan apan bio rakhre"
//                     skills={["HTML", "CSS", "JS"]}
//                   />
//                   <ProfileCard
//                     profileImageUrl="profile-image-url"
//                     name="Name"
//                     rating="⭐⭐⭐⭐⭐"
//                     bio="yahan apan bio rakhre"
//                     skills={["HTML", "CSS", "JS"]}
//                   />
//                 </div>
//                 <h2 id="soft-skills">Soft Skills</h2>
//                 <div className="profile-cards">
//                   <ProfileCard
//                     profileImageUrl="profile-image-url"
//                     name="Name"
//                     rating="⭐⭐⭐⭐⭐"
//                     bio="yahan apan bio rakhre"
//                     skills={["HTML", "CSS", "JS"]}
//                   />
//                   <ProfileCard
//                     profileImageUrl="profile-image-url"
//                     name="Name"
//                     rating="⭐⭐⭐⭐⭐"
//                     bio="yahan apan bio rakhre"
//                     skills={["HTML", "CSS", "JS"]}
//                   />
//               </div>

//               <h2 id="others">Others</h2>
//               <div className="profile-cards">
//                 {otherUsers.length > 0 ? (
//                   otherUsers.map((user) => (
//                     <ProfileCard
//                       key={user?.username}
//                       profileImageUrl={user?.picture}
//                       name={user?.name}
//                       rating={user?.rating || 4}
//                       bio={user?.bio}
//                       skills={user?.skillsProficientAt}
//                       username={user?.username}
//                     />
//                   ))
//                 ) : (
//                   <h1 style={{ color: "#fbf1a4" }}>No users to show</h1>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discover;


