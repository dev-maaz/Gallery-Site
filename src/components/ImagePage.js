
import { useParams,  } from "react-router-dom";

const imageArray = 
[{
    id: 1,
    title: 'Clouds',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/simple 6.jpg",
  },
{
id: 2,
title: 'Waves',
description: "In rhythmic cadence, waves embrace the shoreline's edge, A symphony of motion, echoing the depths' pledge.",
imageUrl: '/simple1.jpg',
}];


const ImagePage = () => {
  const { imageId } = useParams();
  console.log(imageId);

  const image = imageArray.find(img => img.id === parseInt(imageId));
  
  return <div>
    
    <h1>{image.title}</h1>
    <img className="picture-format" src={image.imageUrl} alt={image.id}/>
    <p> {image.description} </p>
     </div>;
}

export default ImagePage;