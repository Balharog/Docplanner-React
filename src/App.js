import React from 'react';
import './App.css';
import Navbar from './component/navbar.js'
import Opening from './component/opening'
import Offer from './component/offer'
import Subsidiary from './component/subsidiary'
import Stats from './component/Stats'
import Opportunities from './component/opportunities'
import Footersection from './component/footersection'
const tab1=[
  { 
    nameClass: "nav-links", 
    linkNameClass:"ab-us", 
    lien:"https://www.docplanner.com/about-us",
    title:"About Us"
  },
  { 
    nameClass: "nav-links carr", 
    classlink:"carr", 
    lien:"https://www.docplanner.com/career",
    title:"Career"
  },
  { 
    nameClass: "nav-links dep", 
    classlink:"drop-link", 
    lien:"#",
    title:"Departments",
    dropd:[ 
      {
        liendd:"https://www.docplanner.com/department?dep=marketing", 
        content:"Marketing & PR"
      },
    {
      liendd:"https://www.docplanner.com/department?dep=customer",
       content: "Customer Success & Sales"
      },
    {
      liendd:"https://www.docplanner.com/department?dep=it", 
      content: "IT, Prduct, Design & UX"
    },
    {
      liendd:"https://www.docplanner.com/department?dep=finance" ,
      content: "Finance & Administration"
    },
    {
      liendd:"https://www.docplanner.com/department?dep=hr", 
    content: "HR & More"
  },
 ]
  },
]
const tab2=[{
nameClass:"txt1", 
content: "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere"
},
{
nameClass:"txt2", 
content: "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
}]
const tab3=[
  {
    parentClass:"offer1",
    forwho:"For patients",
    title:"Find a doctor, book a visit and solve any health-related doubt",
    countries:[
{
        country: "CHOOSE COUNTRY"
       },
    {
      country: "BRAZIL",
  },
  {
    country: "ARGENTINA",
},
{
  country: "CHILE",
},
{
  country: "COLOMBIA",
},
{
  country: "CZECH",
},
{
  country: "FRANCE",
},
{
  country: "AUSTRALIA",
},
{
  country: "ITALY",
},
{
  country: "MEXICO",
},
{
  country: "PERU",
},
{
  country: "POLAND",
},
{
  country: "PORTUGAL",
},
{
  country: "SPAIN",
},
{
  country: "TURKEY",
},
{
  country: "UK",
},
  ],
  classimg:"offer-image1",
  srcimg:"https://www.docplanner.com/img/screen-marketplace@2x.png",
  altimg:"Docplanner patient",

  },
  {
    parentClass:"offer2",
    forwho:"Doctors",
    title:"Save time managing visits and cut no-shows by half",
    classimg:"offer-image2",
    srcimg:"https://www.docplanner.com/img/screen-saas@2x.png",
    altimg:"Docplanner doctors",

  }

]  



const tab4=[
  {
    srcimg:"https://www.docplanner.com/img/flag.png",
    altimg:"flag",
    title:"Leader in 10 countries",
    text:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {

  }
]



const tab5=[
  {
  parentclass: "stat-container-down",
  statss:[
 {
   divstat:"stat-country",
   srcstat: "https://www.docplanner.com/img/flag.png",
  altstat:"flag",
  titlecontent: "Leader in 10 countries",
  txtcontent: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
 },
 {
   divstat:"stat-patients",
   srcstat: "https://www.docplanner.com/img/patients.png",
 altstat:"patients",
 titlecontent: "30 million unique patients",
 txtcontent: "visit us every month"
},
  ],
},

{
  parentclass: "stat-container-up",
  statss:[
{ 
  divstat:"stat-appointement",
  srcstat: "https://www.docplanner.com/img/visits.png",
altstat:"calender",
titlecontent: "1.5 million appointments",
txtcontent: "booked last month"
},
{ 
  divstat: "stat-doctors",
  srcstat: "https://www.docplanner.com/img/doctors.png",
altstat:"doctors",
titlecontent: "2 million active doctors",
txtcontent: "trust in our solutions"
},
],
}
]

const tab6=[
  {
imgsrc: "https://www.docplanner.com/images/warsaw.png",
imgcont: "Warsaw",
  },
  {
    imgsrc: "https://www.docplanner.com/images/barcelona.png",
    imgcont: "Barcelona",
  },
  {
   imgsrc: "https://www.docplanner.com/images/istanbul.png",
   imgcont: "Istanbul",
  },


  {
    imgsrc: "https://www.docplanner.com/images/rome.png",
    imgcont: "Rome",
  },
 {
    imgsrc: "https://www.docplanner.com/images/mexico-city.png",
    imgcont: "Mexico-City",
   },
{
    imgsrc: "https://www.docplanner.com/images/curitiba.png",
    imgcont: "Curitiba",
  },
]



function App() {
  return (
    <div className="App">
        <Navbar item={tab1}/>
        <main>
          <Opening item={tab2}/>
          <Offer item={tab3}/>
          <Subsidiary item={tab4} />
          <Stats item={tab5}/>
          <Opportunities item={tab6}/>
          <Footersection />
        </main>
    </div>
  );
}

export default App;
