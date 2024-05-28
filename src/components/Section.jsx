import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/addtocart/context';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import img5 from "./../IMAGES/AboutUsImages/o.jpeg"
import './../CSS/calender.css'
import { collection, getDocs } from "firebase/firestore";
import { auth, firestore } from "./../Firebase/firebaseConfig";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Section() {
    const [show, setShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (value) => {
        setSelectedCard(value);
        setShow(true);
    };

    // TIME SELECTION
    const [selectedSlot, setSelectedSlot] = useState(""); // Initialize state for selected slot

    const handleSlotChange = (event) => {
        setSelectedSlot(event.target.value); // Update selected slot when user selects an option
    };



    // DATE SELECTION
    const today = new Date();

    const [selectedDate, setSelectedDate] = useState(null);


    // const today = new Date();

    const handleDateChange = (date) => {

        console.log("date", date)
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).split('/').reverse().join('-');

        console.log("formatde date", formattedDate)
        setSelectedDate(formattedDate); // Update selected date with formatted date
    };


    const isSunday = (date) => {
        return date.getDay() === 0; // Check if the given date is Sunday
    };

    const filterSundays = (date) => {
        return !isSunday(date); // Disable Sundays
    };

    const array1 = [
        {
            title: "Light Volume Lash Set",
            time: "2 hours",
            description: `Our version of a hybrid set using only volume lashes.
Between 2-5 eyelash extensions applied to each natural eyelash. This style of lashing creates a natural volume across the lash line.
            
The curl & length of your eyelash extensions will be discussed with your technician on the day. We do recommend bringing along a picture of your desired outcome. 
            
            PATCH TEST CAN BE REQUIRED.
            Please ensure to book your appointment ahead of time. As we would like to provide the best service to you.
            
            Coverage: 70%
            Longevity: 3 - 6 weeks
            Infill: Required up to 3 weeks` ,
            sign: "70"
        },
        {
            title: "Russian Volume",
            time: "2 hours 30 mins",
            description: `Between 2-10 eyelash extensions applied to each natural eyelash. This style of lashing creates volume across the lash line. The curl & length of your eyelash extensions will be discussed with your technician on the day. We do recommend bringing along a picture of your desired outcome. 

            PATCH TEST CAN BE REQUIRED.
            Please ensure to book your appointment ahead of time. As we would like to provide the best service to you.
            
            Coverage: 80%
            Longevity: 3 - 6 weeks
            Infill: Required up to 3 weeks` ,
            sign: "85"
        },
        {
            title: "HD BROWS (Full Eye Brow Service)",
            time: "35 mins",
            description: `Clean, trim , wax , tint & concealed.`,
            sign: "25"
        },
        {
            title: "MVEY’S Signature Mega Classic Set",
            time: "2 hours 30 mins",
            description: `This set is “ MVEY’s Our Signature Classic Set”.
            Our most popular set that we offer. Creating a voluminous classic set using a mix of lash extensions curls & lengths. This set is perfect for some who’s looking to get a shuttle, natural everyday glam. 
           
           PATCH TEST CAN BE REQUIRED.
           Please ensure to book your appointment ahead of time. As we would like to provide the best service to you.
           
           Coverage: 100%
           Longevity: 3 - 6 weeks
           Infill: Required up to 3 weeks` ,
            sign: "75"
        },
        {
            title: "Brazilian Manicure + Pedicure",
            time: "3 hours 30 mins  •  2 services -Save 11%",
            description: `What's included

            Brazilian Pedicure
            
            1 hour 45 mins
            
            Brazilian Manicure
            
            1 hour 45 mins` ,
            sign: "80"
        },
        {
            title: "Lash Lift + Brow Lamination +Tint",
            time: "2 hours 20 mins  •  2 services - Save 10%",
            description: `What's included

            Brow Lamination
            
            50 mins
            
            Lash Lift
            
            1 hour 30 mins` ,
            sign: "90"
        },

    ]

    const array2 = [
        {
            title: "Consultation",
            time: "15 mins",
            description: `A free,15 minute consultation to discuss your goals and concerns, and tailor a customised plan to achieve your desired results. This can be booked individually or prior to a one hour dermal filler slot.`,
            sign: "0"
        },
        {
            title: "Two Week Review",
            time: "15 mins",
            description: `A 15 minute review to assess your progress, address any concerns, and ensure your satisfaction with the results achieved. If more treatment is needed, this can be done on the same day if there is an available appointment, or booked in as soon as possible
            *The price listed is for 1ml. The price may be more on the day, as my specialty is facial balancing more product may be required to create the perfect balanced look.
            **The times listed above include: completion of consultation and consent form, pre and post treatment photos and treatment time.` ,
            sign: "0"
        },
        {
            title: "Model",
            time: "1 hour",
            description: `Please be aware that these rates are exclusively applicable on Sunday / Monday and procedures are performed by our practitioner.
            Schedule may be subject to change based on the availability & the treatment your after. ` ,
            sign: "100"
        },
        {
            title: "Lip Filler",
            time: "1 hour",
            description: `Enhance your natural beauty with our lip dermal filler treatment, designed to add volume, shape, and definition to your lips. Our expertly administered fillers using Restylane Kysse provide a subtle and natural-looking enhancement.`,
            sign: "250"
        },
        {
            title: "Cheek Filler",
            time: "1 hour",
            description: `Elevate your facial contours with our cheek dermal filler treatment, crafted to restore youthful volume and definition to your cheeks. A premium filler is used to sculpt and enhance cheekbones, delivering a natural and rejuvenated appearance.`,
            sign: "250"
        }, {
            title: "Chin Filler",
            time: "1 hour",
            description: `Enhance your facial profile with our chin dermal filler treatment, meticulously crafted to provide definition and balance to your lower face. Premium fillers are used to sculpt and contour the chin, creating a harmonious and proportionate appearance.`,
            sign: "250"
        },
        {
            title: "Jaw Filler",
            time: "1 hour",
            description: `Define your jawline with our jaw dermal filler treatment, tailored to enhance facial structure and symmetry and deliver a more defined and youthful appearance.`,
            sign: "300"
        },
        {
            title: "Masseter Botox",
            time: "1 hour",
            description: `Sculpt your jawline with a masseter Botox treatment, expertly administered to reduce jaw muscle size and redefine facial contours. Precise injections are used to alleviate jaw clenching and slim the lower face, providing a more balanced and harmonious appearance
            Initial results may be visible within 3-7 days, with full effects appearing in about 2 weeks. Results typically last 3-4 months, but this can vary between individuals.` ,
            sign: "300"
        },
        {
            title: "Marionette lines and nasolabial folds (smile lines)",
            time: "1 hour",
            description: `Effortlessly erase the signs of ageing with our targeted dermal filler treatment, specifically formulated to diminish marionette lines and nasolabial folds. This is to smooth and restore volume, revealing a more youthful and refreshed complexion.`,
            sign: "250"
        },
        {
            title: "Upper face Anti-Wrinkle injections (3 areas)",
            time: "1 hour",
            description: `Refresh your upper face with our anti-wrinkle treatment, meticulously targeting forehead lines, frown lines, and crow's feet for a smoother, more youthful appearance. Initial results may be visible within 3-7 days, with full effects appearing in about 2 weeks. Results typically last 3-4 months, but this can vary between individuals.`,
            sign: "250"
        }
    ]
    const array3 = [
        {
            title: "Brazilian Manicure",
            time: "1 hour 45 mins",
            description: ``,
            sign: "40"
        },
        {
            title: "Brazilian Pedicure",
            time: "1 hour 45 mins",
            description: ``,
            sign: "50"
        },
        {
            title: "Brazilian Manicure + Pedicure",
            time: "3 hours 30 mins  •  2 services- save 11%",
            description: `
            What's included
    
    Brazilian Pedicure
    
    1 hour 45 mins
    
    Brazilian Manicure
    
    1 hour 45 mins` ,
            sign: "80"
        },
        {
            title: "Gel/ BIAB Removal",
            time: "Gel/ BIAB Removal",
            description: ``,
            sign: "15"
        },
        {
            title: "MODEL BRAZILIAN MANICURE",
            time: "2 hours",
            description: `On the hunt for some models! Please be aware these rates are exclusively applicable for only Saturdays & Sundays. 
            Here are some important bits to know: 
            - No acrylic/ extensions.
            - Your natural nails must be bare. If you do come in with any gel / biab you will be charged for removal. 
            - Content will be taken through the appointment.` ,
            sign: "25"
        },
        {
            title: "MODEL BRAZILIAN PEDICURE",
            time: "2 hours",
            description: `On the hunt for some models! Please be aware these rates are exclusively applicable for only Saturdays & Sundays. 
            Here are some important bits to know: 
            - No acrylic/ extensions.
            - Your natural nails must be bare. If you do come in with any gel / biab you will be charged for removal. 
            - Content will be taken through the appointment.` ,
            sign: "30"
        },

    ]
    const array4 = [{
        title: "Tape - Ins extensions",
        time: "3 hours 30 mins",
        description: `You will need a consultation before appointment, please call / text. 
        +44 7445 960296` ,
        sign: "160"
    },
    {
        title: "Hair Wash",
        time: "30 mins",
        description: ``,
        sign: "15"
    },
    {
        title: "Hair Treament",
        time: "1 hour",
        description: ``,
        sign: "25"
    },
    {
        title: "Relaxer | Texturizer",
        time: "45 mins",
        description: `Please not that the product is NOT included in the service but can be purchased at our store.`,
        sign: "25"
    },
    {
        title: "Hair Dye",
        time: "1 hour",
        description: `Choosing the ideal hair colour, application, wash and traditional blow-dry. Please note that hair colouring products are not included in the price of the service but can be purchased from our store. `,
        sign: "25"
    },
    {
        title: "Straighten natural hair / extensions ( ONLY)",
        time: "45 mins",
        description: `Hair must be washed & product free. To achieve the best results. 
        Also natural hair must be blow dried to an extent, if not you may be charged extra.` ,
        sign: "25"
    },
    {
        title: "Curl styling set natural hair / extensions ( Only )",
        time: "45 mins",
        description: `air must be washed & product free. To achieve the best results. 
        Also natural hair must be blow dried to an extent, if not you may be charged extra.` ,
        sign: "25"
    },
    {
        title: "Wash + Basic Blow + Trim",
        time: "45 mins",
        description: ``,
        sign: "25"
    },
    {
        title: "Wash + Treatment + Trim + Dominican Blow Out",
        time: "2 hours",
        description: `A consultation will be taken in advance before appointment.`,
        sign: "50"
    },
    {
        title: "Wash + Treatment + Trim + Styling Curl set",
        time: "2 hours",
        description: `A consultation will be taken in advance before appointment.`,
        sign: "75"
    },
    {
        title: "Wash + Treatment + Silk Press + Trim ( Collarbone/ Bra Strap length)",
        time: "1 hour 40 mins",
        description: `A consultation will be taken in advance before appointment.`,
        sign: "80"
    },
    {
        title: "Wash + Treatment + Silk Press + Trim ( Extra Long / Coarse Hair )",
        time: "2 hours 45 mins",
        description: `A consultation will be taken in advance before appointment.`,
        sign: "90"
    }

    ]
    const array5 = [{
        title: "Complimentary Refreshments",
        time: "5 mins",
        description: `Complimentary Refreshment List: 
        Glass Champagne 
        Juice ( apple / orange )
        Bottle Water` ,
        sign: "0"
    },
    {
        title: "Natural Glam",
        time: "1 hour 15 mins",
        description: ``,
        sign: "50"
    },
    {
        title: "Full Glam",
        time: "1 hour 30 mins",
        description: ``,
        sign: "65"
    }]
    const array6 = [{
        title: "Complimentary Refreshment",
        time: "5 mins",
        description: `Complimentary Refreshment List: 
        Glass Champagne 
        Juice ( apple / orange )
        Bottle Water` ,
        sign: "0"
    },
    {
        title: "Lash Lift + Brow Lamination +Tint",
        time: "2 hours 20 mins  •  2 services - save 10 %",
        description: `What's included
    
        Brow Lamination
        
        50 mins
        
        Lash Lift
        
        1 hour 30 mins` ,
        sign: "90"
    },
    {
        title: "LASH CLEANSER (30ml)",
        time: "5 mins",
        description: `The cleanser helps to remove serum , dirt and all other make up products surrounding the area. 
        It lengthens the bonding life of the eyelash installation.
        MVEY BEAUTÈ BOUTIQUE` ,
        sign: "15"
    },
    {
        title: "Removal",
        time: "30 mins",
        description: ``,
        sign: "25"
    },
    {
        title: "Lash Lift",
        time: "1 hour 30 mins",
        description: ``,
        sign: "50"
    },
    {
        title: "Bottom Eyelash Extensions",
        time: "45 mins",
        description: ``,
        sign: "35"
    },
    {
        title: "MVEY’S Signature Mega Classic Set",
        time: "2 hours 30 mins",
        description: `This set is “ MVEY’s Our Signature Classic Set”.
        Our most popular set that we offer. Creating a voluminous classic set using a mix of lash extensions curls & lengths. This set is perfect for some who’s looking to get a shuttle, natural everyday glam. 
       
       PATCH TEST CAN BE REQUIRED.
       Please ensure to book your appointment ahead of time. As we would like to provide the best service to you.
       
       Coverage: 100%
       Longevity: 3 - 6 weeks
       Infill: Required up to 3 weeks` ,
        sign: "75"
    },
    {
        title: "Light Volume Lash Set",
        time: "2 hours",
        description: `Our version of a hybrid set using only volume lashes.
        Between 2-5 eyelash extensions applied to each natural eyelash. This style of lashing creates a natural volume across the lash line.
        The curl & length of your eyelash extensions will be discussed with your technician on the day. We do recommend bringing along a picture of your desired outcome. 
        
        PATCH TEST CAN BE REQUIRED.
        Please ensure to book your appointment ahead of time. As we would like to provide the best service to you.
        
        Coverage: 70%
        Longevity: 3 - 6 weeks
        Infill: Required up to 3 weeks` ,
        sign: "70"
    },
    {
        title: "Wispy Volume",
        time: "2 hours 30 mins",
        description: ``,
        sign: "75"
    },
    {
        title: "Russian Volume",
        time: "2 hours 30 mins",
        description: `Between 2-10 eyelash extensions applied to each natural eyelash. This style of lashing creates volume across the lash line. The curl & length of your eyelash extensions will be discussed with your technician on the day. We do recommend bringing along a picture of your desired outcome. 
    
        PATCH TEST CAN BE REQUIRED.
        Please ensure to book your appointment ahead of time. As we would like to provide the best service to you.
        
        Coverage: 80%
        Longevity: 3 - 6 weeks
        Infill: Required up to 3 weeks` ,
        sign: "85"
    },
    {
        title: "Extra Russian Volume (Mega)",
        time: "3 hours",
        description: `Our heavier blacked out set full set.
        Giving you a dark lash line & voluminous look.` ,
        sign: "100"
    },
    {
        title: "The Strip Lash Look ( Recreation Edition )",
        time: "3 hours 15 mins",
        description: `Replicating your Favourite Strip Lashes! 
    
        This look is achieved by applying 3D-15D closed & open handmade fans to your natural lashes using our unique lash map. 
        We can create any Look of your choice using any lengths, thicknesses, and colours! 
        
        PATCH TEST CAN BE REQUIRED.
        Please ensure to book your appointment ahead of time. As we would like to provide the best service to you.
        
        Coverage: 100%
        Longevity: 3 - 6 weeks
        Infill: Required up to 3 weeks` ,
        sign: "120"
    }]
    const array7 = [{
        title: "Complimentary Refreshments",
        time: "5 mins",
        description: `Complimentary Refreshment List: 
        Glass Champagne 
        Juice ( apple / orange )
        Bottle Water` ,
        sign: "0"
    },
    {
        title: "30 MINS QUICK INFILL",
        time: "30 mins",
        description: `Please note this is the type of infills only to do a small amount of infilling due to the time restraint.`,
        sign: "35"
    },
    {
        title: "Our Signature Mega Classic Infills",
        time: "1 hour 35 mins",
        description: ``,
        sign: "45"
    },
    {
        title: "Light Volume infills",
        time: "1 hour 25 mins",
        description: ``,
        sign: "55"
    },
    {
        title: "Russian Volume infills",
        time: "1 hour",
        description: ``,
        sign: "60"
    },
    {
        title: "Extra Russian Volume infills",
        time: "1 hour 45 mins",
        description: ``,
        sign: "70"
    },
    ]
    const array8 = [{
        title: "-1 Mentoring Classes",
        time: "3 hours 15 mins",
        description: `Must be already qualified and your looking to expand your knowledge in the lash world.`,
        sign: "199"
    },
    {
        title: "1-1 Beginner Lash Extensions Course",
        time: "6 hours",
        description: `Including Kit worth over £100`,
        sign: "349"
    },
    {
        title: "1-1 Russian Volume Lash Extension Course",
        time: "6 hours",
        description: ``,
        sign: "349"
    },
    {
        title: "Combine Lash Extension Course",
        time: "12 hours",
        description: `Classic + Hybrid + Russian Volume
        (Including a kit worth over £100)
        2 Day Course` ,
        sign: "649"
    },]
    const array9 = [{
        title: "Complimentary Refreshments",
        time: "5 mins",
        description: `Complimentary Refreshment List: 
        Glass Champagne 
        Juice ( apple / orange )
        Bottle Water` ,
        sign: "0"
    },
    {
        title: "UPPER LIP WAXING",
        time: "10 mins",
        description: ``,
        sign: "5"
    },
    {
        title: "Brow Wax ( ONLY )",
        time: "15 mins",
        description: ``,
        sign: "10"
    },
    {
        title: "HD BROWS (Full Eye Brow Service)",
        time: "35 mins",
        description: `Clean, trim , wax , tint & concealed.`,
        sign: "25"
    },
    {
        title: "Brow Lamination",
        time: "50 mins",
        description: ``,
        sign: "50"
    },]
    const array10 = [{
        title: "HOME SERVICE",
        time: "2 hours 45 mins",
        description: `We offer home services. 
        You choose your preferred lash preference. 
        
        Other treatments to be done can also be added into the booking. 
        For more information: 
        Contact Us:
        Email: Moliveiraebaco@gmail.com
        WhatsApp/Text/Call : +44 7933 984573` ,
        sign: "140"
    },]
    const array11 = [{
        title: "Luxury Facial",
        time: "Approx 45 mins",
        description: `We offer Luxury Facial that not only removes dead skin cells but also helps skin pores to be properly exfoliated while ealing the dead properties of cloged skin pores.` ,
        sign: "50"
    },]
    const array12 = [{
        title: "Full Body Waxing ",
        time: "Approx 1 hour 45 mins",
        description: `Indulge in the ultimate smoothness with our full body waxing service. From head to toe, our skilled estheticians use gentle techniques to remove unwanted hair, leaving your skin irresistibly soft and silky. Whether you desire a completely hair-free look or just a touch-up, our comprehensive waxing treatments cater to your preferences. Step into our salon and experience the epitome of pampering and perfection` ,
        sign: "60"
    },]




    // yahan product data ayega from api
    const { state, dispatch } = useContext(CartContext)
    const [ProductQuantity, setProductQuantity] = useState(1)
    // add 
    const addtocart = () => {

        // Check if the selected card already exists in the cart
        const exists = state.cart.some(item => item.title === selectedCard.title);

        // checking for available time sloted service in cart

        const existstwo = state.cart.some(item => item.selectedDate === selectedDate && item.selectedSlot === selectedSlot);


        // If the selected card already exists, show Swal alert
        if (exists) {
            Swal.fire({
                title: 'Service Already Added',
                text: 'This service is already in your cart',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
        else {

            if (existstwo) {
                Swal.fire({
                    title: 'This time slot is not available',
                    text: 'Please select other time slot',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
            }
            else {
                const payload = {
                    ...selectedCard,
                    ProductQuantity,
                    selectedDate,
                    selectedSlot,
                    TotalPrice: selectedCard.sign
                }
                console.log(payload, "ahista ahista")

                // CHECKING FOR AVAILABILITY

                const checkingAvailabilityFromDB = async () => {
                    try {
                        const colRef = collection(firestore, "order");
                        const snapshot = await getDocs(colRef);
                        const orders = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

                        const matchFound = orders.some(order => {
                            return order.cart.some(item => {
                                return item.selectedDate === selectedDate && item.selectedSlot === selectedSlot;
                            });
                        });

                        if (matchFound) {
                            Swal.fire({
                                title: 'This time slot is not available',
                                text: 'Please Select another time slot',
                                icon: 'warning',
                                confirmButtonText: 'Continue Shopping'
                            });


                        } else {


                            dispatch({
                                type: "ADD_TO_CART",
                                payload: payload
                            });


                            Swal.fire({
                                title: 'ADDED TO CART',
                                text: 'Check your cart for checkout',
                                icon: 'success',
                                confirmButtonText: 'Continue Shopping'
                            });
                        }
                    } catch (error) {
                        console.log("Error fetching orders:", error);
                    }
                };
                checkingAvailabilityFromDB();

            }
        }
        handleClose();
    }

    return (
        <>
            <div style={{ backgroundColor: "#caf0f8" }}>


                {/* anchor tags */}
                <div className='container'>

                    <a href="#1" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Featured</a>
                    <a href="#11" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Facials</a>
                    <a href="#12" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Waxing</a>
                    <a href="#2" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Aesthetic Treatments</a>
                    <a href="#3" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Nail Manicurist</a>
                    <a href="#4" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Natural & Extensions Hair Services</a>
                    <a href="#5" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Makeup</a>
                    <a href="#6" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Lash Extension</a>
                    <a href="#7" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>lash infill</a>
                    <a href="#8" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>classes</a>
                    <a href="#9" className='text-decoration-none  mx-3  btn  p-3 m-1 mt-3 bg-warning ' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Eyebrow</a>
                    <a href="#10" className='text-decoration-none  mx-3   btn  p-3 m-1 mt-3 bg-warning' style={{ borderRadius: "15px", fontWeight: "bold", fontSize: "17px" }}>Home Services</a>



                </div>


                {/* anchor se hit hoga div jismain ek heading and servies hain */}
                {/* services jo hain wo as a button hain jo k mapped hain from an array jismain sari details and all ha  */}
                {/* ab jab button pe click hoga toh modal open hoga  */}
                {/* is modal k ander details button se jayegi */}

                <div id="1" className='container'>
                    <h1 className='my-5' >Featured</h1>
                    {array1.map((value, index) => (
                        <div key={index}>
                            {/* <pre>{value.description}</pre> */}
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div id="2" className='container'>
                    <h1 className='my-5'>Aesthetic Treatments</h1>
                    {array2.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>
                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>


                <div id="3" className='container'>
                    <h1 className='my-5'>Nail Manicurist</h1>
                    {array3.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2>{selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div id="4" className='container'>
                    <h1 className='my-5'>Natural & Extensions Hair Services</h1>
                    {array4.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>
                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div id="5" className='container'>
                    <h1 className='my-5'>Makeup</h1>
                    {array5.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div id="6" className='container'>
                    <h1 className='my-5'>Lash Extension</h1>
                    {array6.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={addtocart}>
                                Add To Cart
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div id="7" className='container'>
                    <h1 className='my-5'>lash infill</h1>
                    {array7.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div id="8" className='container'>
                    <h1 className='my-5'>Classes</h1>
                    {array8.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div id="9" className='container'>
                    <h1 className='my-5'>Eyebrow</h1>
                    {array9.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div id="10" className='container'>
                    <h1 className='my-5'>Home Services</h1>
                    {array10.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div> 
                <div id="11" className='container'>
                    <h1 className='my-5'>FACIALS</h1>
                    {array11.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div> 
                <div id="12" className='container'>
                    <h1 className='my-5'>WAXING</h1>
                    {array12.map((value, index) => (
                        <div key={index}>
                            <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>
                                        {value.time}
                                    </Card.Text>
                                    <Card.Text>
                                        <pre style={{ fontFamily: "sans-serif", overflow: "hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                    </Card.Text>
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>45</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <Modal show={show} onHide={handleClose} centered size="lg">

                        <Modal.Body>
                            {selectedCard && (
                                <div>
                                    <h2> {selectedCard.title}</h2>
                                    <p>Time: {selectedCard.time}</p>
                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    <hr />
                                    <div className='row mx-4'>

                                        <div className=' col-lg-6 col-md-6 col-sm-12 pt-4'>
                                            <h4 className='my-2'>Select Timing:</h4>
                                            <select className='py-2 mb-2 mt-1' value={selectedSlot} onChange={handleSlotChange}>
                                                <option value="10">10:00 PM</option>
                                                <option value="11">11:00 PM</option>
                                                <option value="12">12:00 PM</option>
                                                <option value="1">1:00 PM</option>
                                                <option value="2">2:00 PM</option>
                                                <option value="3">3:00 PM</option>
                                                <option value="4">4:00 PM</option>
                                                <option value="5">5:00 PM</option>
                                                <option value="6">6:00 PM</option>
                                                <option value="7">7:00 PM</option>
                                                <option value="8">8:00 PM</option>
                                            </select>
                                            <p>Selected slot: {selectedSlot}</p>
                                        </div>

                                        <div className="date-picker-container col-lg-6 col-md-6 col-sm-12 pt-4">
                                            <h4 className='my-2'>Select a Date:</h4>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                style={{ width: '200px' }}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={today}
                                                className="custom-datepicker"
                                                filterDate={filterSundays}
                                                showTimeSelect={false}
                                                showTimeSelectOnly={false}
                                            />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='btn-dark' onClick={addtocart}>
                                Add To Booking
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div> 

            </div>
        </>
    )
}
