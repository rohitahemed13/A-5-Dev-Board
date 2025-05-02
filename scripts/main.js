document.getElementById('newfile').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = "main.html"
   
});

const colors = ["blue", "green", "red", "yellow", "purple", "orange", "pink", "brown", "gray", "black", "aquamarine","cyon", "gold", "indigo", "aqua"];
let index = 0;
document.getElementById('theme-btn').addEventListener('click', function(event){
    event.preventDefault();
  document.body.style.backgroundColor = colors[index];
  index = (index + 1)% colors.length;
});

