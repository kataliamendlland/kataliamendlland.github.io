import React from 'react'
import { styled } from '@stitches/react'



const Image = styled('img', {
    height: '25vh',
});
// Used to load images
const images = require.context('../../../eggstatic/faces', true);

console.log('images: ', images);
// const getFriendsNum = getNumFiles();

const getFriendsNum = 3;
console.log('getFriendsNum: ', getFriendsNum);

export const LoadFace = ({
}) => {
    var rand = Math.floor(Math.random() * getFriendsNum)+1;
    var path = images( `./${rand}.png`);
    console.log("Path: ", path);

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var randX = Math.floor(Math.random() * (screenWidth - 100));
    var randY = Math.floor(Math.random() * (screenHeight - 100));

    return ( 
        <div>
            <Image src={path}/>
            <p>HEY</p>
        </div>
    )
}