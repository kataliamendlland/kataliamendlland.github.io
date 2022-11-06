const FRIENDS_NUM = 3;

function onLoad(){
    var rand = Math.floor(Math.random() * FRIENDS_NUM)+1;
    var path = "/media/"+rand+".png";

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var randX = Math.floor(Math.random() * (screenWidth - 100));
    var randY = Math.floor(Math.random() * (screenHeight - 100));

    var img = document.createElement('img');
    img.setAttribute('src', path);
    img.setAttribute('height', '500vh');
    img.setAttribute('style', 'position: absolute; top: '+randY+'px; left: '+randX+'px;');
}

function onClick(event){
    var img = document.createElement('img');
    img.setAttribute('src', '/media/egg.png');
    img.setAttribute('height', '100vh');
    img.setAttribute('style', 'position: absolute; top: '+(event.clientY-10)+'px; left: '+(event.clientX-10)+'px;');
    document.body.appendChild(img);
}
