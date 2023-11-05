import Banner from "./Banner";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Tab, TabList, Tabs } from "react-tabs";


const Home = () => {
   const [allJobs, setAllJobs] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState(null);
   const url = 'http://localhost:3001/jobs';
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setAllJobs(data);
         })
   }, []);
   // console.log(allJobs)

   const filteredJobs = selectedCategory
      ? allJobs.filter(job => job.category === selectedCategory)
      : allJobs;
   console.log(filteredJobs.length)

   return (
      <div>
         <Banner></Banner>
         <Tabs>
            <TabList className='flex flex-col md:flex-row justify-center gap-4'>
               <Tab onClick={() => setSelectedCategory(null)} className="btn btn-outline btn-info">All</Tab>
               <Tab onClick={() => setSelectedCategory("Web Development")} className="btn btn-outline btn-info ">Web Development</Tab>
               <Tab onClick={() => setSelectedCategory("Digital Marketing")} className="btn btn-outline btn-info">Digital Marketing</Tab>
               <Tab onClick={() => setSelectedCategory("Graphics Design")} className="btn btn-outline btn-info">Graphics Design</Tab>
            </TabList>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {filteredJobs.map(job => (
               // <TabPanel key={job._id}>
                  <JobCard key={job._id} job={job} />
               // </TabPanel>
               
            ))}
           </div>
         </Tabs>

      </div>
   );
};

export default Home;