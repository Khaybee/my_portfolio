// Function to check if an element is in the viewport
function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle animation when skills section is in the viewport
  function handleSkillsAnimation() {
    var skillsSection = document.getElementById('skills');
    var skillSets = document.querySelectorAll('.skillSets');
  
    if (isInViewport(skillsSection)) {
      skillSets.forEach(function(skill) {
        if (!skill.classList.contains('animate')) {
          skill.classList.add('animate');
        }
      });
    } else {
      skillSets.forEach(function(skill) {
        skill.classList.remove('animate');
      });
    }
  }
  
  // Listen for scroll or any other relevant event
  window.addEventListener('scroll', function() {
    handleSkillsAnimation();
  });
  
  // Initial check on page load
  document.addEventListener('DOMContentLoaded', function() {
    handleSkillsAnimation();
  });
  
  
//   window.addEventListener('scroll', function() {
//     handleSkillsAnimation();
//   });
  
//   document.addEventListener('DOMContentLoaded', function() {
//     handleSkillsAnimation();
//   });
  