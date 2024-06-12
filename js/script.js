document.addEventListener("DOMContentLoaded", function() {
   
    document.title = "Vedant's Portfolio";
  
    
    const heading = document.querySelector("h1");
    heading.innerText = "I am Vedant,";
  
    
    const profileText = document.querySelector(".profile p");
    profileText.innerText = "I am a second year computer engineering student at TCET. I am passionate about web development and competitive programming.";
  
    
    const skillsSection = document.querySelector(".skills");
    const skillsHTML = `
      <h2>About me.</h2>
      <div class="skill-row">
        <img class="code" src="images/code.png" alt="">
        <h3>Skills</h3>
        <p>I am proficient in problem-solving, C/C++, web development, and competitive programming. My skills enable me to develop efficient software programs, create visually appealing websites, and tackle complex challenges.</p>
      </div>
      <div class="skill-row">
        <img class="interview" src="images/interview.png" alt="">
        <h3>Experience</h3>
        <p>I have extensive experience as a freelance web developer, mastering various web technologies. Currently, I work as a problem setter at Shastra Coding Club, creating and curating coding challenges.</p>
      </div>`;
    skillsSection.innerHTML = skillsHTML;
  
    
    const contactMessage = document.querySelector(".contact-msg");
    contactMessage.innerText = "You can reach me by email or connect with me on LinkedIn or Twitter using the links below.";
  
   
    const contactButton = document.querySelector(".btn");
    contactButton.addEventListener("click", function() {
      alert("Thanks for reaching out! I'll get back to you soon.");
    });
  });
  