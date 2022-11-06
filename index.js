const FRIENDS_NUM = 3;

function onLoad(){
  var rand = Math.floor(Math.random() * FRIENDS_NUM)+1;
  var path = "/media/"+rand+".png";
  
  var screenWidth = window.innerWidth;
  console.log(screenWidth);
  var screenHeight = window.innerHeight;
  console.log(screenHeight);
  
  var randX = Math.floor(Math.random() * (screenWidth - 1000));
  var randY = Math.floor(Math.random() * (screenHeight - 1000));
  console.log(randY);
  
  var img = document.createElement('img');
  img.setAttribute('src', path);
  img.setAttribute('height', '500vh');
  img.setAttribute('style', 'position: absolute; top: '+randY+';');
  document.body.appendChild(img);
}
