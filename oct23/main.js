$(".header").click(function(){
  console.log(`Handler for ${event.target.id} called.`)
  if (event.target.id !== "reset") {
    document.body.style.backgroundColor = event.target.id;
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = null;
    document.body.style.color = "black";
  }
});

