
import { useParams,  } from "react-router-dom";
import "./ImagePage.scss";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const imageArray = 
[
  {
    id: 1,
    title: 'Clouds',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/simple-clouds.jpg",
  },
  {
    id: 2,
    title: 'Fire',
    description: "Colorful fire flickered and danced, casting vibrant hues across the night sky like a painter's brush on a canvas. Each flame held a story, painting the air with an array of reds, oranges, blues, and greens, mesmerizing onlookers with its kaleidoscope of brilliance.",
    imageUrl: "/simple-fire.jpg",
  },
  {
    id: 3,
    title: 'Calm Water',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/simple-waves.jpg",
  },
  {
    id: 4,
    title: 'Tranquility',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/still-water.jpg",
  },
  {
    id: 5,
    title: 'Mount Fuji',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/mountfuji-1.jpg",
  },
  {
    id: 6,
    title: 'Mountain Sunset',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/mountfuji-2.jpg",
  },
  {
    id: 7,
    title: 'Turbulent Waves',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/wave-1.jpg",
  },
  {
    id: 8,
    title: 'Great Waves',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/wave-2.jpg",
  },
  {
    id: 9,
    title: 'Thrashing Waves',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/wave-3.jpg",
  },
  {
    id: 10,
    title: 'Gigantic Waves',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/wave-4.jpg",
  },
  {
    id: 11,
    title: 'Perilous Waves',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/wave-5.jpg",
  },
  {
    id: 12,
    title: 'Beach',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/beach.jpg",
  },
  {
    id: 13,
    title: 'School of Fish',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/fish-school.jpg",
  },
  {
    id: 14,
    title: 'Temple',
    description: 'In ephemeral grace, they veil the cerulean expanse,Whispering tales of ethereal realms to those below.',
    imageUrl: "/temple.jpg",
  },
];

const ImagePage = () => {
  const { imageId } = useParams();
  console.log(imageId);

  const image = imageArray.find(img => img.id === parseInt(imageId));
  
  return <> 

  <div className="bigContainer">
    <Navbar />
    <div className="bongoboy">  
      <Link to="/Items"className="material-symbols-outlined">arrow_back</Link>
      <div className="flex-row">
        <img className="picture-format" src={image.imageUrl} alt={image.id}/>
        <div class="flex-col">
          <h1>{image.title}</h1>
          <p> {image.description} </p>
          <button className="material-symbols-outlined">favorite</button>
        </div>
      </div>
    </div>
  </div>

  </>
}

export default ImagePage;