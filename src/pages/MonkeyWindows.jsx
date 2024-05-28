import React from 'react';
import img1 from "./../IMAGES/payments/img1.png";
import img2 from "./../IMAGES/payments/imgg2.svg";
import img3 from "./../IMAGES/payments/img3.avif";

export default function MonkeyWindows() {
    const openMonkeyWindow1 = (imageUrl) => {
        const width = 700;
        const height = 700;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        window.open(imageUrl, '_blank', `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,location=no,toolbar=no`);
    };


    const openMonkeyWindow2 = (imageUrl) => {
        const width = 700;
        const height = 700;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        window.open(imageUrl, '_blank', `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,location=no,toolbar=no`);
    };

    const openMonkeyWindow3 = (imageUrl) => {
        const width = 700;
        const height = 700;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        window.open(imageUrl, '_blank', `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,location=no,toolbar=no`);
    };

    return (
        <>
            <p className='text-center'>Express checkout</p>
            <div className='d-flex'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <button className="btn image-btn" onClick={() => openMonkeyWindow1(img1)}>
                                <img src={img1} alt="Image 1" className='img-fluid' style={{ borderRadius: "10px", height: "95px", width: "250px" }} />
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn image-btn" onClick={() => openMonkeyWindow2(img2)}>
                                <img src={img2} alt="Image 1 pt-3" className='img-fluid' style={{ borderRadius: "10px", height: "95px", width: "250px" }} />
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn image-btn" onClick={() => openMonkeyWindow3(img3)}>
                                <img src={img3} alt="Image 1" className='img-fluid' style={{ borderRadius: "10px", height: "95px", width: "250px" }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
