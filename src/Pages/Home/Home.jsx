import Banner from "./Banner";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Accordion from "./Accordion";
import Marquee from "react-fast-marquee";


const Home = () => {
   const [allJobs, setAllJobs] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [activeTabIndex, setActiveTabIndex] = useState(0);


   const url = 'https://skill-fusion-hub-online-market-place-server-side.vercel.app/jobs';
   useEffect(() => {
      fetch(url, { credentials: "include" })
         .then(res => res.json())
         .then(data => {
            setAllJobs(data);
         })
   }, []);
   // console.log(allJobs)
   const handleTabClick = (index, category) => {
      setSelectedCategory(category);
      setActiveTabIndex(index);
   };

   const filteredJobs = selectedCategory
      ? allJobs.filter(job => job.category === selectedCategory)
      : allJobs;
   // console.log(filteredJobs.length)

   return (
      <div>
         <Banner></Banner>
         <Marquee pauseOnHover={true} speed={100} className="my-7">
            <p className="mr-5 font-medium text-orange-950">Unlock opportunities, Bid Now!</p>
            <p className="mr-5 font-medium text-orange-950">Future Tech Haven Where projects come to life!</p>
            <p className="mr-5 font-medium text-orange-950">Feel free to use these status messages to encourage users to bid on projects and post their jobs on Future Tech Haven!</p>
         </Marquee>
         <Tabs selectedIndex={activeTabIndex}>
            <TabList className="flex flex-col md:flex-row justify-center gap-4">
               <Tab
                  onClick={() => handleTabClick(0, null)}
                  className={`btn ${activeTabIndex === 0 ? "btn-info" : "btn-outline"}`}
               >
                  All
               </Tab>
               <Tab
                  onClick={() => handleTabClick(1, "Web Development")}
                  className={`btn ${activeTabIndex === 1 ? "btn-info" : "btn-outline"}`}
               >
                  Web Development
               </Tab>
               <Tab
                  onClick={() => handleTabClick(2, "Digital Marketing")}
                  className={`btn ${activeTabIndex === 2 ? "btn-info" : "btn-outline"}`}
               >
                  Digital Marketing
               </Tab>
               <Tab
                  onClick={() => handleTabClick(3, "Graphics Design")}
                  className={`btn ${activeTabIndex === 3 ? "btn-info" : "btn-outline"}`}
               >
                  Graphics Design
               </Tab>
            </TabList>

            <TabPanel>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                  {filteredJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
               </div>
            </TabPanel>
            <TabPanel>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                  {filteredJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
               </div>
            </TabPanel>
            <TabPanel>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                  {filteredJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
               </div>
            </TabPanel>
            <TabPanel>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                  {filteredJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
               </div>
            </TabPanel>
         </Tabs>
         <Accordion></Accordion>
         <div className="stats stats-vertical flex justify-center lg:stats-horizontal shadow mb-14">

            <div className="stat">
               <div className="stat-figure text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
               </div>
               <div className="stat-title">Total Likes</div>
               <div className="stat-value text-primary">25.6K</div>
               <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat">
               <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <div className="stat-title">Page Views</div>
               <div className="stat-value text-secondary">2.6M</div>
               <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
               <div className="stat-title">New Users</div>
               <div className="stat-value">4,200</div>
               <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
               <div className="stat-title">New Registers</div>
               <div className="stat-value">1,200</div>
               <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat">
               <div className="stat-figure text-secondary">
                  <div className="avatar online">
                     <div className="w-16 rounded-full">
                        <img src="https://i.ibb.co/1Q46JD7/girl1.jpg" />
                     </div>
                  </div>
               </div>
               <div className="stat-value">86%</div>
               <div className="stat-title">Tasks done</div>
               <div className="stat-desc text-secondary">31 tasks remaining</div>

            </div>
         </div>


      </div>
   );
};

export default Home;