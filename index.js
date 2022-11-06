const FRIENDS_NUM = 3;

function onLoad(){
  var rand = Math.floor(Math.random() * FRIENDS_NUM)+1;
  var path = "/media/"+rand+".png";
  var img = document.createElement('img');
  img.setAttribute('src', path);
  img.setAttribute('height', "25vh");
  document.body.appendChild(img);
}
