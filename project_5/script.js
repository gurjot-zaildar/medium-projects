

let body = document.querySelector("body");
let arr = [
  {
    image: "https://plus.unsplash.com/premium_photo-1739040729170-a62f31ac1fc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Gurjot Singh",
    profession: "Web Developer",
    job_rank: "Employee",
    skill1: "JS",
    skill2: "React",
    skill3: "HTML",
    number: "+7",
    bio: "My name is Gurjot Singh. I'm 21 years old and a BCA student passionate about web development."
  },
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Aisha Kapoor",
    profession: "UI/UX Designer",
    job_rank: "Senior Designer",
    skill1: "Figma",
    skill2: "Sketch",
    skill3: "Adobe XD",
    number: "+5",
    bio: "A creative designer with a keen eye for detail, working with leading tech startups."
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Rahul Verma",
    profession: "Backend Developer",
    job_rank: "Employee",
    skill1: "Node.js",
    skill2: "MongoDB",
    skill3: "Express.js",
    number: "+3",
    bio: "Tech enthusiast and backend expert with 3+ years of experience building APIs."
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Meena Rathi",
    profession: "Frontend Engineer",
    job_rank: "Lead",
    skill1: "Vue.js",
    skill2: "CSS",
    skill3: "JavaScript",
    number: "+7",
    bio: "Lead frontend engineer who loves crafting beautiful and functional interfaces."
  },
  {
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Zaid Ali",
    profession: "Full Stack Developer",
    job_rank: "Manager",
    skill1: "MERN Stack",
    skill2: "Docker",
    skill3: "AWS",
    number: "+9",
    bio: "Experienced full-stack developer managing cross-functional dev teams."
  },
  {
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Sneha Das",
    profession: "DevOps Engineer",
    job_rank: "Employee",
    skill1: "Kubernetes",
    skill2: "CI/CD",
    skill3: "Terraform",
    number: "+6",
    bio: "Automation lover helping teams deploy faster and safer through DevOps."
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Pooja Mehra",
    profession: "Product Manager",
    job_rank: "Senior PM",
    skill1: "Agile",
    skill2: "Scrum",
    skill3: "Roadmapping",
    number: "+3",
    bio: "Driving product success through collaboration, feedback, and iteration."
  },
  {
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Rohan Bhatt",
    profession: "Data Scientist",
    job_rank: "Employee",
    skill1: "Python",
    skill2: "Pandas",
    skill3: "Machine Learning",
    number: "+2",
    bio: "Solving problems with data-driven insights and predictive modeling."
  },
  {
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Anjali Nair",
    profession: "Content Strategist",
    job_rank: "Freelancer",
    skill1: "SEO",
    skill2: "Copywriting",
    skill3: "Analytics",
    number: "+1",
    bio: "Telling impactful stories that convert, engage, and rank."
  },
  {
    image: "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ishaan Joshi",
    profession: "AI Engineer",
    job_rank: "Employee",
    skill1: "TensorFlow",
    skill2: "NLP",
    skill3: "Deep Learning",
    number: "+4",
    bio: "Engineer working on AI-powered solutions for tomorrow's problems."
  },
  {
    image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Tanya Arora",
    profession: "Cybersecurity Analyst",
    job_rank: "Employee",
    skill1: "Pen Testing",
    skill2: "Firewalls",
    skill3: "Ethical Hacking",
    number: "+5",
    bio: "Protecting organizations from threats with strong cyber defense practices."
  },
  {
    image: "https://images.unsplash.com/photo-1629288465751-07e42186084f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Yuvraj Singh",
    profession: "Mobile App Developer",
    job_rank: "Employee",
    skill1: "Flutter",
    skill2: "Dart",
    skill3: "Firebase",
    number: "+7",
    bio: "Building high-performance mobile apps that users love."
  }
];


function hero(){
    let sum='';
    arr.forEach(function(dets,idx){
        sum+=` <div class="main">
        <img src="${dets.image}">
        <h1>${dets.name}</h1>
        <h2>${dets.profession}</h2>
        <h3>${dets.job_rank}</h3>
        <div class="inner">
<div class="skill">
   <div class="box"><h1>${dets.skill1}</h1></div>
    <div class="box"><h1>${dets.skill2}</h1></div>
     <div class="box"><h1>${dets.skill3}</h1></div>
      <div id="wo" class="box"><h1>${dets.number}</h1></div>
</div>
<p>${dets.bio}</p>
<div class="line"></div>
<button id="${idx}">CONNECT</button>
        </div>
</div>`
    })

    body.innerHTML= sum;
    
}
hero();
let main = document.querySelectorAll(".main");


let button = document.querySelectorAll("button");
let box = document.querySelectorAll(".box");


button.forEach(function(button){
button.addEventListener('mouseenter',function(){
    button.style.color='rgba(255, 255, 255, 1)'
    button.style.backgroundColor="rgba(68, 118, 255, 1)"
})
})
button.forEach(function(button){
button.addEventListener('mouseout',function(){
    button.style.color='rgba(69, 69, 69, 1)'
    button.style.backgroundColor="rgba(255, 255, 255, 1)"
    if(button.innerHTML== "CONNECTED"){
         button.style.color='rgba(0, 85, 0, 1)'
          button.style.backgroundColor="rgba(38, 255, 0, 0.37)"
    }
})
})
button.forEach(function(button){
button.addEventListener('click',function(){
    button.innerHTML="CONNECTED"
})
})
box.forEach(function(box){
box.addEventListener('mouseenter',function(){
    box.style.backgroundColor='rgb(10, 173, 232)';
    box.querySelectorAll("h1").forEach(function(e1){
        e1.style.color="white"
    })
})
})
box.forEach(function(box){
box.addEventListener('mouseout',function(){
    box.style.backgroundColor='rgba(255, 255, 255, 1)';
    box.querySelectorAll("h1").forEach(function(e1){
        e1.style.color="black"
    })
})
})
