const FRIENDS_NUM = 3;

function onLoad(){
  var rand = Math.floor(Math.random() * FRIENDS_NUM);
  alert("You have "+rand+" friends");
  var path = "/media/"+rand+".png";
  var img = document.createElement('img');
  img.setAttribute('src', path);
  document.body.appendChild(img);
}
