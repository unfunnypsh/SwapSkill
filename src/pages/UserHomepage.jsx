import React, { useState, useEffect } from "react";
import PeerCard from "../components/PeerCard";
import ProjectCard from "../components/ProjectCard";
import ProfileSidebar from "../components/ProfileSidebar";
import { fetchPeers, fetchProjects } from "../components/UserService";

const UserHomepage = () => {
  const [peers, setPeers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const peersData = await fetchPeers();
      const projectsData = await fetchProjects();
      setPeers(peersData);
      setProjects(projectsData);
    };
    getData();
  }, []);

  const filteredPeers = peers.filter((peer) =>
    peer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Top Header */}
      <header className="p-6 bg-gray-900 shadow-lg sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-blue-500">
          Welcome to Your Homepage
        </h1>
        <input
          type="text"
          placeholder="Search peers or projects..."
          className="w-1/3 px-4 py-2 text-gray-900 rounded-lg focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row p-6 gap-6">
        {/* Left Sidebar */}
        <aside className="w-full md:w-1/4">
          <ProfileSidebar />
        </aside>

        {/* Main Section */}
        <main className="w-full md:w-3/4">
          {/* Peers Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Your Peers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPeers.map((peer) => (
                <PeerCard key={peer.id} peer={peer} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Projects to Collaborate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="p-4 bg-gray-900 text-center mt-12">
        <p className="text-sm text-gray-400">
          &copy; 2024 Educational Commerce Platform. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default UserHomepage;


// import React from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   IconButton,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Avatar,
//   Tooltip,
//   Progress,
// } from "@material-tailwind/react";
// import {
//   EllipsisVerticalIcon,
//   ArrowUpIcon,
// } from "@heroicons/react/24/outline";
// import { StatisticsCard } from "@/widgets/cards";
// import { StatisticsChart } from "@/widgets/charts";
// import {
//   statisticsCardsData,
//   statisticsChartsData,
//   projectsTableData,
//   ordersOverviewData,
// } from "@/data";
// import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

// export function UserHomePage() {
//   return (
//     <div className="mt-12">
//       <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
//         {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
//           <StatisticsCard
//             key={title}
//             {...rest}
//             title={title}
//             icon={React.createElement(icon, {
//               className: "w-6 h-6 text-white",
//             })}
//             footer={
//               <Typography className="font-normal text-blue-gray-600">
//                 <strong className={footer.color}>{footer.value}</strong>
//                 &nbsp;{footer.label}
//               </Typography>
//             }
//           />
//         ))}
//       </div>
//       <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
//         {statisticsChartsData.map((props) => (
//           <StatisticsChart
//             key={props.title}
//             {...props}
//             footer={
//               <Typography
//                 variant="small"
//                 className="flex items-center font-normal text-blue-gray-600"
//               >
//                 <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
//                 &nbsp;{props.footer}
//               </Typography>
//             }
//           />
//         ))}
//       </div>
//       <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
//         <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Projects
//               </Typography>
//               <Typography
//                 variant="small"
//                 className="flex items-center gap-1 font-normal text-blue-gray-600"
//               >
//                 <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
//                 <strong>30 done</strong> this month
//               </Typography>
//             </div>
//             <Menu placement="left-start">
//               <MenuHandler>
//                 <IconButton size="sm" variant="text" color="blue-gray">
//                   <EllipsisVerticalIcon
//                     strokeWidth={3}
//                     fill="currenColor"
//                     className="h-6 w-6"
//                   />
//                 </IconButton>
//               </MenuHandler>
//               <MenuList>
//                 <MenuItem>Action</MenuItem>
//                 <MenuItem>Another Action</MenuItem>
//                 <MenuItem>Something else here</MenuItem>
//               </MenuList>
//             </Menu>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr>
//                   {["companies", "members", "budget", "completion"].map(
//                     (el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left"
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     )
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 {projectsTableData.map(
//                   ({ img, name, members, budget, completion }, key) => {
//                     const className = `py-3 px-5 ${
//                       key === projectsTableData.length - 1
//                         ? ""
//                         : "border-b border-blue-gray-50"
//                     }`;

//                     return (
//                       <tr key={name}>
//                         <td className={className}>
//                           <div className="flex items-center gap-4">
//                             <Avatar src={img} alt={name} size="sm" />
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-bold"
//                             >
//                               {name}
//                             </Typography>
//                           </div>
//                         </td>
//                         <td className={className}>
//                           {members.map(({ img, name }, key) => (
//                             <Tooltip key={name} content={name}>
//                               <Avatar
//                                 src={img}
//                                 alt={name}
//                                 size="xs"
//                                 variant="circular"
//                                 className={`cursor-pointer border-2 border-white ${
//                                   key === 0 ? "" : "-ml-2.5"
//                                 }`}
//                               />
//                             </Tooltip>
//                           ))}
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {budget}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <div className="w-10/12">
//                             <Typography
//                               variant="small"
//                               className="mb-1 block text-xs font-medium text-blue-gray-600"
//                             >
//                               {completion}%
//                             </Typography>
//                             <Progress
//                               value={completion}
//                               variant="gradient"
//                               color={completion === 100 ? "green" : "blue"}
//                               className="h-1"
//                             />
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   }
//                 )}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//         <Card className="border border-blue-gray-100 shadow-sm">
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 p-6"
//           >
//             <Typography variant="h6" color="blue-gray" className="mb-2">
//               Orders Overview
//             </Typography>
//             <Typography
//               variant="small"
//               className="flex items-center gap-1 font-normal text-blue-gray-600"
//             >
//               <ArrowUpIcon
//                 strokeWidth={3}
//                 className="h-3.5 w-3.5 text-green-500"
//               />
//               <strong>24%</strong> this month
//             </Typography>
//           </CardHeader>
//           <CardBody className="pt-0">
//             {ordersOverviewData.map(
//               ({ icon, color, title, description }, key) => (
//                 <div key={title} className="flex items-start gap-4 py-3">
//                   <div
//                     className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
//                       key === ordersOverviewData.length - 1
//                         ? "after:h-0"
//                         : "after:h-4/6"
//                     }`}
//                   >
//                     {React.createElement(icon, {
//                       className: `!w-5 !h-5 ${color}`,
//                     })}
//                   </div>
//                   <div>
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="block font-medium"
//                     >
//                       {title}
//                     </Typography>
//                     <Typography
//                       as="span"
//                       variant="small"
//                       className="text-xs font-medium text-blue-gray-500"
//                     >
//                       {description}
//                     </Typography>
//                   </div>
//                 </div>
//               )
//             )}
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default UserHomePage;