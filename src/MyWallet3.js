import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import imagen1 from './images/1.PNG'
import imagen2 from './images/2.PNG'
import imagen3 from './images/3.PNG'
import imagen4 from './images/4.PNG'
import imagen5 from './images/5.PNG'
import imagen6 from './images/6.PNG'
import imagen7 from './images/7.PNG'
import imagen8 from './images/08.PNG'
import imagen9 from './images/9.PNG'
import imagen10 from './images/10.PNG'

export default function Wallet3() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="GALERY">
            <h1>Rules</h1>
            <p>Click on the images below to see the rules.</p>
            <LightGallery
               
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={imagen1}>
                    <img alt="img1" className='img' src={imagen1} />
                </a>
                <a href={imagen2}>
                    <img alt="img2" className='img' src={imagen2} />
                </a>
                <a href={imagen3}>
                    <img alt="img3" className='img' src={imagen3} />
                </a>
                <a href={imagen4}>
                    <img alt="img4" className='img' src={imagen4} />
                </a>
                <a href={imagen5}>
                    <img alt="img5" className='img' src={imagen5} />
                </a>
                <a href={imagen6}>
                    <img alt="img6" className='img' src={imagen6} />
                </a>
                <a href={imagen7}>
                    <img alt="img7" className='img' src={imagen7} />
                </a>
                <a href={imagen8}>
                    <img alt="img8" className='img' src={imagen8} />
                </a>
                <a href={imagen9}>
                    <img alt="img9" className='img' src={imagen9} />
                </a>
                <a href={imagen10}>
                    <img alt="img10" className='img' src={imagen10} />
                </a>
               
                ...
            </LightGallery>
        </div>
    );
}
