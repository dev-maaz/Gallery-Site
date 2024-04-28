
import "./Gallery.scss";

function Gallery(){

    return <>
    <div className="grid grid-cols-5 p-8 gap-8 w-full">

        <img src="simple1.jpg" className='picture-format w-full' alt="image1"/>
        <img src="simple2.jpg" className='picture-format'alt="image2"/>
        <img src="simple3.jpg" className='picture-format' alt="image3"/>
        <img src="mountfuji2.jpg" className='picture-format' alt="image4"/>
        <img src="simple5.jpg" className='picture-format' alt="image5"/>
        <img src="simple 6.jpg" className='picture-format' alt="image6"/>
        <img src="temple.jpg" className='picture-format' alt="image7"/>
        <img src="wave1.jpg" className='picture-format' alt="image8"/>
        <img src="wave 2.jpg" className='picture-format' alt="image9"/>
        <img src="wave3.jpg" className='picture-format' alt="image10"/>
        <img src="wave3.jpg" className='picture-format' alt="image11"/>
        <img src="waveright.jpg" className='picture-format' alt="image12"/>

    </div>
    </>
}

export default Gallery;