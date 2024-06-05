import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useContext } from 'react'
import { CartContextVariable } from '../../context/CartContext';
import Swal from 'sweetalert2';
import img5 from "../../IMAGES/AboutUsImages/o.jpeg"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../CSS/calender.css'
import { collection, getDocs } from "firebase/firestore";
import { auth, firestore } from "../../Firebase/firebaseConfig";
import './HairDresser.css'


export default function HairDresser() {
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

        console.log("date",date)
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).split('/').reverse().join('-');
    
        console.log("formatde date",formattedDate)
        setSelectedDate(formattedDate); // Update selected date with formatted date
    };
    

    const isSunday = (date) => {
        return date.getDay() === 0; // Check if the given date is Sunday
    };

    const filterSundays = (date) => {
        return !isSunday(date); // Disable Sundays
    };

    // -----------------------------------------------------------------

    const array1 = [
        {
            title: "Cornrows/ Cainrows for Men",
            time: "1 hour 45 mins",
            description: `Price will vary depending on the hairstyle. Standard styles will start from £20. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "20"
        },
        {
            title: "Twists for Men",
            time: "1 hour 30 mins  •  Male only",
            description: `Price will vary depending on the style. The standard style will be starting from £40.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.
            ` ,
            sign: "30"
        },
        {
            title: "Wash + Blow dry",
            time: "50 mins",
            description: `Process: Getting rid of knots (brushing the hair), wash using Shampoo and Conditioner, traditional hair blow-dry, adding oil to the scalp.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "15"
        },
        {
            title: "Weave Install (Leave out)",
            time: "2 hours 15 mins",
            description: `Process includes: traditional hair blow-dry, oiling the scalp, cornrows for the base, weave installation, minimal styling.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "40"
        },
        {
            title: "10+ Cornrows styles",
            time: "2 hours 30 mins",
            description: `Process includes: hair blow-dry, cornrows. Please note that the extensions are NOT included in the service but can be purchased at out store.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "50"
        },
        {
            title: "Box Braids [Medium/Standard Partings]",
            time: "5 hours 30 mins",
            description: `Prices vary depending on the thickness of the braids and length. Starting price is £85 and X-pression hair is not included in the service but, can be purchased at our store/salon. 
            Process includes: traditional hair blow-dry, oiling the scalp, box braids installation, boiling water set, drying off the finished hairstyle, oil hair spray for the final look. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "70"
        }

    ]
    const array2 = [
        {
            title: "Locs Retwist Service",
            time: "3 hours 30 mins",
            description: `Starting from is not equal to a fixed price, please understand the difference before booking with us.`,
            sign: "50"
        },
        {
            title: "Starter Locs",
            time: "1 hour",
            description: `Starting from is not equal to a fixed price, please understand the difference before booking with us.`,
            sign: "150"
        },


    ]
    const array3 = [
        {
            title: "Hair Wash (KIDS 3-9)",
            time: "15 mins",
            description: `Process: Getting rid of knots (brushing the hair), wash using Shampoo and Conditioner, traditional hair blow-dry, adding oil to the scalp.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "10"
        },
        {
            title: "Hair Wash (TEENS 10-16)",
            time: "20 mins",
            description: `
            Process: Getting rid of knots (brushing the hair), wash using Shampoo and Conditioner, traditional hair blow-dry, adding oil to the scalp.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "15"
        },
        {
            title: "Hair Treatment (KIDS|TEENS)",
            time: "1 hour 15 mins",
            description: `
            A service made for individuals that would like to experience a bit more of hair growth by treating their hair more often.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "25"
        },
        {
            title: "Cornrows/Cainrows Style (no extensions)(KIDS|TEENS)",
            time: "1 hour 30 mins",
            description: `
            Price will vary depending on the hairstyle. Standard styles will start from £30.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },
        {
            title: "Single Braids (no extensions)(KIDS|TEENS)",
            time: "1 hour 30 mins",
            description: `
            Price will vary depending on the hairstyle. Standard styles will start from £40.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "40"
        },
        {
            title: "Cornrows/Cainrows Style with Extensions (KIDS|TEENS)",
            time: "2 hours 30 mins",
            description: `
            Price will vary depending on the hairstyle. Standard styles will start from £45.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "40"
        },
        {
            title: "Braids with Extensions (KIDS|TEENS)",
            time: "5 hours",
            description: `
            Price will vary depending on the Thickness of the braid and Length . Standard styles will start from £50.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "50"
        },
    ]
    const array4 = [
        {
            title: "Cornrows/ Cainrows for Men",
            time: "1 hour 45 mins",
            description: `
            Price will vary depending on the hairstyle. Standard styles will start from £20. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "20"
        },
        {
            title: "Single Braids for Men",
            time: "1 hour 30 mins  •  Male only",
            description: `
            A$AP Rocky or Travis Scott inspired? We’ve got you! Bring your inspo picture at your appointment and let the hairstylists do the rest. Price will vary depending on the style, standard styles will start from £40.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },
        {
            title: "Twists for Men",
            time: "1 hour 30 mins  •  Male only",
            description: `
            Price will vary depending on the style. The standard style will be starting from £40.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },
        {
            title: "Barrel Twists Styles",
            time: "2 hours",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "50"
        },
        {
            title: "Hair Wash (Men)",
            time: "35 mins",
            description: `
            Process: Getting rid of knots (brushing the hair), wash using Shampoo and Conditioner, traditional hair blow-dry. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "15"
        },
        {
            title: "Hair Dye (for Men)",
            time: "1 hour 30 mins",
            description: `
            Choosing the ideal hair colour, application, wash and traditional blow-dry. Please note that hair colouring products are not included in the price of the service but can be purchased at our store. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "20"
        },
        {
            title: "Hair Treatment (for Men)",
            time: "1 hour 30 mins",
            description: `
            A service made for individuals that would like to experience a bit more of hair growth by treating their hair more often.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "25"
        },
    ]
    const array5 = [
        {
            title: "Hair comb Blow-dry",
            time: "1 hour",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "5"
        },
        {
            title: "Normal Press / Straight",
            time: "1 hour",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "25"
        },
        {
            title: "Wash + Blow dry",
            time: "50 mins",
            description: `
            Process: Getting rid of knots (brushing the hair), wash using Shampoo and Conditioner, traditional hair blow-dry, adding oil to the scalp.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "15"
        },
        {
            title: "Wig Cornrows/Cainrows",
            time: "55 mins",
            description: `
            Process: Traditional blow-dry, oil the scalp, partings and cornrows process, oil hair spray for the final look. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "15"
        },
        {
            title: "Hair Treatment",
            time: "1 hour 30 mins",
            description: `
            Process: Hair wash, treatment application, setting treatment under the dryer, washing off the treatment, traditional hair blow-dry, oiling the scalp. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },
        {
            title: "Relaxer | Texturiser",
            time: "1 hour 30 mins",
            description: `
            Please not that the product is NOT included in the service but can be purchased at our store. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "25"
        },
        {
            title: "Hair Dye",
            time: "1 hour 30 mins",
            description: `
            Choosing the ideal hair colour, application, wash and traditional blow-dry. Please note that hair colouring products are not included in the price of the service but can be purchased from our store. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "20"
        },
        {
            title: "Hair Trim (Standard)",
            time: "1 hour",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "20"
        },
        {
            title: "Dominican Blow Dry",
            time: "40 mins",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "25"
        },
        {
            title: "Roller Set",
            time: "1 hour 30 mins",
            description: `
            Spraying hair with water, roller set, drying curls under the hair dryer, roller set off, style for the final look.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "20"
        },
        {
            title: "Take-off",
            time: "1 hour",
            description: `
            Take-off hair extensions, starting price is £20 and it excludes washing the hair. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "20"
        },
        {
            title: "Braids Take- Off",
            time: "1 hour",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },

    ]
    const array6 = [
        {
            title: "Relaxer or Texturiser + Treatment",
            time: "1 hour 30 mins  •  2 services",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.
            
            What's included
            
            Relaxer | Texturiser
            
            1 hour 30 mins
            
            Hair Treatment
            
            1 hour 30 mins` ,
            sign: "55"
        },
        {
            title: "Wash + Blow-dry + Wig Cornrows/ Cainrows",
            time: "55 mins  •  2 services",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.
            
            What's included
            
            Wash + Blow dry
            
            50 mins
            
            Wig Cornrows/Cainrows
            
            55 mins` ,
            sign: "30"
        },
        {
            title: "Take-off + Wash",
            time: "1 hour 50 mins  •  2 services",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.
            
            What's included
            
            Take-off
            
            1 hour
            
            Wash + Blow dry
            
            50 mins` ,
            sign: "35"
        },
        {
            title: "Wash + Roller Set",
            time: " 1 hour 30 mins  •  2 services",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.
            
            What's included
            
            Wash + Blow dry
            
            50 mins
            
            Roller Set
            
            1 hour 30 mins` ,
            sign: "35"
        },
        {
            title: "Take-off + Relaxer",
            time: "2 hours 30 mins  •  2 services",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.
            
            What's included
            
            Take-off
            
            1 hour
            
            Relaxer | Texturiser
            
            1 hour 30 mins` ,
            sign: "45"
        },
        {
            title: "Take-off + Treatment",
            time: " 1 hour 30 mins  •  2 services",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.
            
            What's included
            
            Take-off
            
            1 hour
            
            Hair Treatment
            
            1 hour 30 mins` ,
            sign: "50"
        },
        {
            title: "Take-off + Wash + Wig Cornrows",
            time: " 2 hours 45 mins  •  3 services  •  Female only",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.
            
            What's included
            
            Take-off
            
            1 hour
            
            Wash + Blow dry
            
            50 mins
            
            Wig Cornrows/Cainrows
            
            55 mins` ,
            sign: "50"
        },
        {
            title: "Take-off + Wash + Roller Set",
            time: " 1 hour 30 mins  •  3 services",
            description: `
            What's included
            
            Take-off
            
            1 hour
            
            Wash + Blow dry
            
            50 mins
            
            Roller Set
            
            1 hour 30 mins` ,
            sign: "55"
        },
        {
            title: "Take-off + Treatment + Wig Cornrows",
            time: "1 hour 30 mins  •  3 services",
            description: `
            What's included
            
            Take-off
            
            1 hour
            
            Hair Treatment
            
            1 hour 30 mins
            
            Wig Cornrows/Cainrows
            
            55 mins` ,
            sign: "65"
        },
        {
            title: "Take-off + Treatment + Trim + Wig Cornrows",
            time: "1 hour 30 mins  •  4 services",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.
            
            What's included
            
            Take-off
            
            1 hour
            
            Hair Treatment
            
            1 hour 30 mins
            
            Hair Trim (Standard)
            
            1 hour` ,
            sign: "85"
        },
        {
            title: "Silk Press Bundle",
            time: "2 hours",
            description: `
            Treatment, Dominican Blowdry, Trimming, Silk Press.
            
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "90"
        },

    ]
    const array7 = [
        {
            title: "Half Feed-ins | Half Crochet",
            time: " 2 hours",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "60"
        },
        {
            title: "Half Feed-ins | Half Weave",
            time: "1 hour 30 mins",
            description: `
            Desired number of cornrows at the front followed by weave extensions at the back. Please not that extensions are NOT included in the service but can be purchased at our store.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "60"
        },
        {
            title: "Half Up | Half Down Style",
            time: "2 hours 15 mins",
            description: `
            The style consists of a sleek ponytail positioned at the front/ top of the hair and, weave extensions installed at the back.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "60"
        },
        {
            title: "Zig-Zag ‘All Back’ Cornrows",
            time: "1 hour 30 mins",
            description: `
            Mixture of all back and zig-zag cornrows, Alicia Keys inspired. Please not that extensions are NOT included in the service but can be purchased at our store. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "60"
        },
        {
            title: "Fulani Braids Styles",
            time: "4 hours",
            description: `
            Mixture of cornrows and braids, prices start from £85. Please not that extensions are NOT included in the service but can be purchased at our store.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "85"
        },
    ]
    const array8 = [
        {
            title: "Gel Ponytail (Sewin)",
            time: "1 hour 30 mins",
            description: `
            Process includes: Hair blow-dry, gel on natural hair, sewing of ponytail extension. Please not that extensions are NOT included in the service but can be purchased at our store. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "35"
        },
        {
            title: "Gel Ponytail (with Traditional Clip-in)",
            time: "1 hour 15 mins",
            description: `
            Process includes: Hair blow-dry, gel on natural hair, attachment of the clip-in ponytail extension. Please not that extensions are NOT included in the service but can be purchased at our store. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },
        {
            title: "Braided Ponytail Install",
            time: "2 hours 15 mins",
            description: `
            Process includes: Hair blow-dry, gel on natural hair, braid extension installation. Please not that extensions are NOT included in the service but can be purchased at our store. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "50"
        },
        {
            title: "Sleek Ponytails",
            time: "1 hour 30 mins",
            description: `
            Process includes: Traditional hair blow-dry, straightening the natural hair using flat iron, sleeking and styling the natural hair in the form suggested, ponytail application and final look. Please not that extensions are NOT included in the service but can be purchased at our store. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "50"
        },
    ]
    const array9 = [
        {
            title: "x2 Cornrows Style",
            time: "1 hour",
            description: `
            Process includes: hair blow-dry, cornrows. Please note that the extensions are NOT included in the service but can be purchased at out store.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "25"
        },
        {
            title: "x4 Cornrows Style",
            time: "1 hour 15 mins",
            description: `
            Process includes: hair blow-dry, cornrows. Please note that the extensions are NOT included in the service but can be purchased at out store.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },
        {
            title: "x5-6 All back Cornrows",
            time: "1 hour 15 mins",
            description: `
            Process includes: hair blow-dry, cornrows. Please note that the extensions are NOT included in the service but can be purchased at out store.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "35"
        },
        {
            title: "x6-8 All back Cornrows",
            time: "1 hour 45 mins",
            description: `
            Process includes: hair blow-dry, cornrows. Please note that the extensions are NOT included in the service but can be purchased at out store.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "45"
        },
        {
            title: "10+ Cornrows styles",
            time: "2 hours 30 mins",
            description: `
            Process includes: hair blow-dry, cornrows. Please note that the extensions are NOT included in the service but can be purchased at out store.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "60"
        },
    ]
    const array10 = [
        {
            title: "The ‘Gel Down’ Look",
            time: "1 hour",
            description: `
            Sleeking your natural pixie down.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "25"
        },
        {
            title: "Pixie Curls (ONLY)",
            time: "1 hour 30 mins",
            description: `
            Using a small curling tongue in order to create detailed curls for your hairstyle. Please note that your hair will have to be relaxed in order to achieve a sleek, long lasting look.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },
        {
            title: "Finger Waves",
            time: "  1 hour  •  Female only",
            description: `
            Creating waves with the use of hair mousse and styling it with the comb, wrapping and setting for the final look.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },
    ]
    const array11 = [
        {
            title: "Spray Glue Frontal Install",
            time: "1 hour 30 mins",
            description: `
            Quick frontal installation using EBIN Spray.
            Wig cornrows and standard styling (curls or  straightening), included in the final price!
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "40"
        },
        {
            title: "Frontal Installation (Glue Application)",
            time: "3 hours",
            description: `
            Process: Blow-dry, cornrows, fitting and installation, setting under the hair dryer for a better hairline melt, styling. No bleaching or excessive plucking included.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "70"
        },
        {
            title: "Frontal Installation (Glueless)",
            time: "2 hours",
            description: `
            Process: Hair blow-dry, cornrows, fitting and clueless installation, setting under the hair dryer for a better hairline melt, styling. No bleaching or excessive plucking included.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "60"
        },
        {
            title: "Adding tracks (Wig Service) -Tracks Addition",
            time: "1 hour",
            description: `
            Adding hair tracks for wigs start at £10 per line. Example: your wig feels a bit empty and you want to add about 5 lines of weft to it. The total for this will cost you £50.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "10"
        },
        {
            title: "Plucking",
            time: "30 mins",
            description: `
            Plucking services made for wigs that have full frontals or closures in order to give them a more realistic look. ` ,
            sign: "15"
        },
        {
            title: "Wig Tongue (Adding Curls)",
            time: "30 mins",
            description: `
            Adding bouncy curls to your wig. ` ,
            sign: "20"
        },
        {
            title: "Wig Flat Iron",
            time: "30 mins",
            description: `
            Straightening the wig, giving it a ‘silk press’ look. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "25"
        },
        {
            title: "Bleaching the Knots",
            time: " 1 hour",
            description: `
            Using the bleaching powder method to get rid of the black hair dots in the lace of your frontal or closure.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "20"
        },
        {
            title: "Wig Wash",
            time: "30 mins",
            description: `
            Process: Getting rid of knots before washing the wig, wig wash using Shampoo and Conditioner, wig air dry and blow-dry. This excludes hair straightening. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "20"
        },
        {
            title: "Style Cuts (for Wigs)",
            time: "1 hour 15 mins",
            description: `
            Choose how you would like to trim the hair of your wig. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "25"
        },
        {
            title: "Wig Crimping (Precise waves)",
            time: " 45 mins",
            description: `
            Process: Hair blow-dry, crimping hair process. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "30"
        },
        {
            title: "‘Build A Wig’",
            time: "2 hours 30 mins",
            description: `
            Getting your wig made by hand. Hair bundles can be provided by the customer or the customer can buy the hair bundles from our online store/salon.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "70"
        },
        {
            title: "Colouring services",
            time: "3 hours",
            description: `
            You bring your bundles or wigs, we talk about the style that you are going for (use images as Inspo), and we colour them for you. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "120"
        },
        {
            title: "Full Frontal Wig Re-installation",
            time: "4 hours 30 mins  •  Female only",
            description: `
            Process: Removal of current wig and cornrows, hair wash, blow-dry, cornrows, frontal re-installation and standard styling (either curls or straight).
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "150"
        },

    ]
    const array12 = [
        {
            title: "Weave Install (Leave out)",
            time: "2 hours 15 mins",
            description: `
            Process includes: traditional hair blow-dry, oiling the scalp, cornrows for the base, weave installation, minimal styling.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "55"
        },
        {
            title: "Weave BOB (Leave Out)",
            time: " 1 hour",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "65"
        },
        {
            title: "Weave Install (No Leave out) AKA ‘All Closed’",
            time: "2 hours",
            description: `
            Process includes: traditional hair blow-dry, oiling the scalp, cornrows for the base, weave installation, minimal styling. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "65"
        },
        {
            title: "Weave with a Closure Install",
            time: "2 hours 15 mins",
            description: `
            Process includes: traditional hair blow-dry, oiling the scalp, cornrows for the base, weave and closure installation, minimal styling.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "65"
        },
        {
            title: "Weave with a Frontal Install (Sewin only, no glue)",
            time: "2 hours 30 mins",
            description: `
            Process includes: traditional hair blow-dry, oiling the scalp, cornrows for the base, weave and closure installation, minimal styling. Please note- this services excludes glueing down the frontal. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "75"
        },
    ]
    const array13 = [
        {
            title: "Braided BOB",
            time: "3 hours",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "75"
        },
        {
            title: "Box Braids [Medium/Standard Partings]",
            time: "5 hours 30 mins",
            description: `
            Prices vary depending on the thickness of the braids and length. Starting price is £85 and X-pression hair is not included in the service but, can be purchased at our store/salon. 
            Process includes: traditional hair blow-dry, oiling the scalp, box braids installation, boiling water set, drying off the finished hairstyle, oil hair spray for the final look. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "85"
        },
        {
            title: "Goddess Braids [Medium/Standard Partings]",
            time: "5 hours 30 mins",
            description: `
            Prices vary depending on the thickness and length. Starting price is £100 and extensions are NOT included. 
            Process includes: traditional hair blow-dry, oiling the scalp, goddess braids installation, oil hair spray for the final look. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "100"
        },
        {
            title: "French Curls Braids [Small Partings]",
            time: "4 hours",
            description: ``,
            sign: "200"
        },
        {
            title: "Knotless Braids Extra Large [Small Partings]",
            time: " 9 hours  •  Female only",
            description: `
            Prices vary depending on the thickness of the braids and length. Starting price is £260, X-pression hair is not included in the service but can be purchased at our store/salon. Process includes: traditional hair blow-dry, oiling the scalp, Extra Long Knotless Braids Installation, boiling water set, drying off the finished hairstyle, oil hair spray for the final look. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "260"
        },
        {
            title: "Knotless Bohemian Braids [Medium/Standard Partings]",
            time: "8 hours",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "150"
        },
        {
            title: "Knotless Bohemian Braids- Extra Large [Small Partings]",
            time: " 12 hours",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "300"
        },

    ]
    const array14 = [
        {
            title: "Traditional Crochet Braids",
            time: "2 hours 15 mins",
            description: `
            Process includes: Traditional hair blow-dry, oiling the scalp, cornrows for the base, crochet installation, oil hair spray for the final look.  Please not that extensions are NOT included in the service but can be purchased at our store.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "60"
        },
        {
            title: "Half Individuals | Half Traditional Crochet Locs",
            time: "3 hours",
            description: `
            The base of the application will have individual partings at the front and cornrows at the back. Then the crochet locs will be installed, giving the impression of real locs as a final look.
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "85"
        },
        {
            title: "Individually Crochet Locs [Perimeter Only]",
            time: "5 hours",
            description: `
            The base will consist of individual partings that will be braided with your natural hair or a bit of extensions (optional). The locs will be installed afterwards, giving a realistic final look. 
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "100"
        },
        {
            title: "Individual Crochet Locs [Full Head]",
            time: "4 hours 30 mins",
            description: `
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "150"
        },
    ]
    const array15 = [
        {
            title: "Tape-ins Consultation",
            time: "3 hours 15 mins  •  Female only",
            description: `You will need a consultation before appointment, please call/text +44 7933 98573.
            Full tape-in installation (maintenance will be charged separately), this price is for the service only! Extensions are not included.
            You have the choice to bring your tape-in extensions or buy the ones that we have available in store. 
            Colouring the tape-in extensions will be extra
            Starting from is not equal to a fixed price, please understand the difference before booking with us.` ,
            sign: "0"
        },
        {
            title: "Hair Tracks",
            time: "1 hour 30 mins",
            description: `Starting from is not equal to a fixed price, please understand the difference before booking with us.`,
            sign: "50"
        },
        {
            title: "LA Weave (COMING SOON)",
            time: "1 hour",
            description: ``,
            sign: "0"
        },
        {
            title: "Nano Rings (COMING SOON)",
            time: "1 hour",
            description: ``,
            sign: "0"
        },
        {
            title: "Microlinks (COMING SOON)",
            time: "1 hour",
            description: ``,
            sign: "0"
        },
        {
            title: "Hybrid Sets (COMING SOON)",
            time: "1 hour",
            description: ``,
            sign: "0"
        },
        {
            title: "Brazilian Knots (COMING SOON)",
            time: "1 hour",
            description: ``,
            sign: "0"
        },
    ]
    const array16 = [
        {
            title: "Special Event Booking - Salon (COMING SOON)",
            time: "10 hours",
            description: `
            Coming soon ` ,
            sign: "0"
        },
        {
            title: "Shoots Bookings - Salon (COMING SOON)",
            time: "12 hours",
            description: `
            Coming soon ` ,
            sign: "0"
        },
        {
            title: "Shoots Bookings - Mobile (COMING SOON)",
            time: "12 hours",
            description: `
            Coming soon ` ,
            sign: "0"
        },

    ]






    // yahan product data ayega from api
    const { cart_state, cart_dispatch } = useContext(CartContextVariable)
    const [ProductQuantity, setProductQuantity] = useState(1)
    // add 
    const addtocart = () => {

        // Check if the selected card already exists in the cart
        const exists = cart_state.cart.some(item => item.title === selectedCard.title);

// checking for available time sloted service in cart

const existstwo = cart_state.cart.some(item => item.selectedDate === selectedDate && item.selectedSlot === selectedSlot);


        // If the selected card already exists, show Swal alert
        if (exists ) {
            Swal.fire({
                title: 'Service Already Added',
                text: 'This service is already in your cart',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        } 
            else{

                if (existstwo) {
                    Swal.fire({
                        title: 'This time slot is not available',
                        text: 'Please select other time slot',
                        icon: 'warning',
                        confirmButtonText: 'OK'
                    });
                }
                else{
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
    
    
                            cart_dispatch({
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
            <div style={{ backgroundColor: "" }}>

                {/* anchor tags */}
                <div className='container w-100 row d-flex justify-content-center'>

                    <a href="#1" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2   p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>Featured</a>
                    <a href="#2" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>LOCS Services</a>
                    <a href="#3" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>Kids | Teens</a>
                    <a href="#4" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>Men | Boys</a>
                    <a href="#5" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>EVERY DAY SERVICES - WOMEN</a>
                    <a href="#6" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>BUNDLE OF SERVICES - WOMEN</a>
                    <a href="#7" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>MIXED 'TRENDY' HAIRSTYLES - WOMEN</a>
                    <a href="#8" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>PONYTAILS - WOMEN</a>
                    <a href="#9" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3       service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>CORNROWS/CAINROWS - WOMEN</a>
                    <a href="#10" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3     service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>PIXIE STYLING - WOMEN</a>
                    <a href="#11" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>WIGS - WOMEN</a>
                    <a href="#12" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>WEAVES - WOMEN</a>
                    <a href="#13" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>BRAIDS - WOMEN</a>
                    <a href="#14" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>CROCHET BRAIDS - WOMEN</a>
                    <a href="#15" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>HAIR SERVICES FOR LUXURY EXTENSIONS</a>
                    <a href="#16" className='text-decoration-none  mx-3  overflow-hidden col-4 col-sm-5 col-md-3 col-lg-2  my-2    p-3      service-hover ' style={{ fontWeight: "bold", fontSize: "17px" }}>Others</a>



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
                                    <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                    <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                    <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif" }}> {selectedCard.description}</pre>

                                    {/* Add other details you want to display slotting*/}

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
        style={{width:'200px'}}
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
                <h1 className='my-5'>LOCS Services</h1>
                {array2.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>
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
        style={{width:'200px'}}
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
                <h1 className='my-5'>Kids | Teens</h1>
                {array3.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>
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
        style={{width:'200px'}}
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
                <h1 className='my-5'>MEN | BOYS</h1>
                {array4.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>
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
                                                style={{width:'200px'}}
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
                <h1 className='my-5'>EVERY DAY SERVICES - WOMEN</h1>
                {array5.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>

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
        style={{width:'200px'}}
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
                <h1 className='my-5'>BUNDLE OF SERVICES - WOMEN</h1>
                {array6.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>
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
        style={{width:'200px'}}
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
                        <Button variant="primary" onClick={addtocart}>
                            Add To Cart
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

             <div id="7" className='container'>
                <h1 className='my-5'>MIXED 'TRENDY' HAIRSTYLES - WOMEN</h1>
                {array7.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>
                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>
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
        style={{width:'200px'}}
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
                <h1 className='my-5'>PONYTAILS - WOMEN</h1>
                {array8.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>

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
        style={{width:'200px'}}
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
                <h1 className='my-5'>CORNROWS/CAINROWS - WOMEN</h1>
                {array9.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>

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
        style={{width:'200px'}}
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
                <h1 className='my-5'>PIXIE STYLING - WOMEN</h1>
                {array10.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>

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
        style={{width:'200px'}}
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
                <h1 className='my-5'>WIGS - WOMEN</h1>
                {array11.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>

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
        style={{width:'200px'}}
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
                <h1 className='my-5'>WEAVES - WOMEN</h1>
                {array12.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>

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
        style={{width:'200px'}}
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

            <div id="13" className='container'>
                <h1 className='my-5'>BRAIDS - WOMEN</h1>
                {array13.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>

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
        style={{width:'200px'}}
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

            <div id="14" className='container'>
                <h1 className='my-5'>CROCHET BRAIDS - WOMEN</h1>
                {array14.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>

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
        style={{width:'200px'}}
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

            <div id="15" className='container'>
                <h1 className='my-5'>HAIR SERVICES FOR LUXURY EXTENSIONSN</h1>
                {array15.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>
                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>
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
        style={{width:'200px'}}
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

                <div id="16" className='container'>
                <h1 className='my-5'>OTHERS</h1>
                {array16.map((value, index) => (
                    <div key={index}>
                        <Card className='my-1 ' style={{ cursor: "pointer" }} onClick={() => handleShow(value)}>
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.time}
                                </Card.Text>
                                <Card.Text>
                                    <pre style={{ fontFamily: "sans-serif", overflow:"hidden" }}>{value.description.split(' ').slice(0, 40).join(' ')}</pre>


                                </Card.Text>
                                <p style={{ fontWeight: "bold" }}><span className='mx-1'>&#163;</span>{value.sign}</p>
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
                                <p>Price: <span className='mx-1'>&#163;</span> {selectedCard.sign}</p>

                                <pre style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontFamily: "sans-serif"  }}> {selectedCard.description}</pre>
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
        style={{width:'200px'}}
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
