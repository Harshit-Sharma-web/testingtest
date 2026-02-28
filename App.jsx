// function App(){
//   return <h5>react</h5>
// }

// export default App
// import React from 'react'

import { useState } from 'react'


import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45, // dollars per hour
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 55,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 50,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Remote, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 80,
      location: "Remote"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      companyName: "Uber",
      datePosted: "10 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/airbnb.com",
      companyName: "Airbnb",
      datePosted: "2 months ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 50,
      location: "Remote, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "6 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 65,
      location: "Hyderabad, India"
    }
  ];

  // export default jobOpenings;
  // console.log(jobOpenings)

  return (
    <div className='parent'>

      {jobOpenings.map(function (elem, index) {
        return (
          <Card key={index} name={elem.companyName} postdate={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        )

      })}


    </div>


  )
}



export default App

