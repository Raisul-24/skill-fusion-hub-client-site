

const Accordion = () => {
   return (
      <div className="my-20">
         <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
               <input type="radio" name="my-accordion-4" checked="checked" />
               <div className="collapse-title text-xl font-medium">
               Why should You chose  Skill Fusion hub online job marketplace website?
               </div>
               <div className="collapse-content">
                  <h2 className="font-medium">SkillFusion Hub is the online job marketplace of choice for several compelling reasons:</h2>
                  <ul className="list-inside list-disc">
                     <li><span className="font-semibold">Easy Job Posting:</span>  Posting a job or project on SkillFusion Hub is straightforward and user-friendly. You can quickly outline your requirements and expectations, making it easy for potential candidates to understand your needs.</li>
                     <li><span className="font-semibold">Flexibility:</span> SkillFusion Hub is designed to offer flexibility, allowing you to tailor your hiring process to your unique needs. You can choose to hire professionals for a wide range of tasks and projects.</li>
                     <li><span className="font-semibold">Global Reach:</span> The platform connects clients with professionals from around the world, providing access to a global talent pool.</li>
                  </ul>
               </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
               <input type="radio" name="my-accordion-4" />
               <div className="collapse-title text-xl font-medium">
               What are some of the benefits of selecting of the SkillFusion Hub Online job market place?
               </div>
               <div className="collapse-content">
                  <ol className="list-inside list-disc">
                    
                     <li>Skill Fusion Hub offers a comprehensive and user-friendly platform for clients and professionals to connect, collaborate, and achieve their project goals. With its commitment to quality, security, and transparency, It is an excellent choice for those seeking reliable and skilled service providers.</li>
                      </ol>
               </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
               <input type="radio" name="my-accordion-4" />
               <div className="collapse-title text-xl font-medium">
               What are some of the most popular jobs on the SkillFusion Hub website?
               </div>
               <div className="collapse-content">
                  <ol className="list-inside list-disc">
                     <li>Web Development</li>
                     <li>Graphics Design</li>
                     <li>Digital Marketing</li>
                  </ol>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Accordion;