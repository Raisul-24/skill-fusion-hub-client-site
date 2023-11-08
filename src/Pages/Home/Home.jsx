import Banner from "./Banner";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Accordion from "./Accordion";


const Home = () => {
   const [allJobs, setAllJobs] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [activeTabIndex, setActiveTabIndex] = useState(0);


   const url = 'https://skill-fusion-hub-online-market-place-server-side.vercel.app/jobs';
   useEffect(() => {
      fetch(url, {credentials: "include"})
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

      </div>
   );
};

export default Home;