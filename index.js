var webProj= [
    {
      name: "bluebinpackaging",
     img: "bluebin.PNG",
     description: "A simple site I made to help Canadians put packaging in the right bins",
     link: "https://kind-tree-07296850f.azurestaticapps.net/"
    },
    {
      name: "Business Basics",
      img: "https://media.istockphoto.com/vectors/geometric-banner-megaphone-with-coming-soon-bubble-loudspeaker-modern-vector-id1181378326?k=6&m=1181378326&s=612x612&w=0&h=G9QQjvLpHdFmKtHkaRbt08NnGgiDbtxZyR5L629Bck0=",
      description: "A site to teach the basics of business at a grade 10 level", 
      link: "https://salmon-moss-0d4268910.azurestaticapps.net"
    }];
  const name = document.getElementById("name");
  const img = document.getElementById("img");
  const description = document.getElementById("description");
  const link = document.getElementById("site-link")
  var nextBtn = document.getElementById("nextBtn");
  var prevBtn = document.getElementById("prevBtn"); 
  let currentCard = 0;
  function showProject(project) {
    const item = webProj[project]
    name.textContent = item.name;
    img.src = item.img;
    description.textContent = item.description;
    link.setAttribute('href', item.link);
  }
  window.addEventListener('DOMContentLoaded', function(){
    showProject(currentCard);
  });
  
  nextBtn.addEventListener('click', function() {
    currentCard++;
    if(currentCard > webProj.length - 1){
      currentCard = 0;
    }
    showProject(currentCard);
  })
  
  prevBtn.addEventListener('click', function() {
    currentCard--;
    if(currentCard < 0) {
      currentCard = webProj.length -1;
    }
    showProject(currentCard);
  })
  //graphic design carousel 
  var graphicProj= [
    {
      name: "A Book Mockup",
     img: "bookmockup.jpg",
     description: "I designed the cover and spine of this book. I editied a mockup using a photo editor and placed my design in."
    },
    {
      name: "Space Agency Badge",
      img: "Untitled-2.jpg",
      description: "I created this space agency badge using vectors within Adobe Illustrator" 
    },
    {
      name: "befree Vector Art",
      img: "befree-01.jpg",
      description: "I created this vector art using Adobe Illustrator as well"
    }];
  const nameG = document.getElementById("nameG");
  const imgG = document.getElementById("imgG");
  const descriptionG = document.getElementById("descriptionG");
  let currentCardG = 0;
  function showProjectG(project) {
    const itemG = graphicProj[project]
    nameG.textContent = itemG.name;
    imgG.src = itemG.img;
    descriptionG.textContent = itemG.description;
  }
  window.addEventListener('DOMContentLoaded', function(){
    showProjectG(currentCardG);
  });

  
  nextBtnG.addEventListener('click', function() {
    currentCardG++;
    if(currentCardG > graphicProj.length - 1){
      currentCardG = 0;
    }
    showProjectG(currentCardG);
  })
  
  prevBtnG.addEventListener('click', function() {
    currentCardG--;
    if(currentCardG < 0) {
      currentCardG = graphicProj.length -1;
    }
    showProjectG(currentCardG);
  })
  
  //modal
  //add image popup
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var myImg = document.getElementById("imgG");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
myImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
  
  
