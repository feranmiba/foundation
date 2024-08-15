import Logo from './image/logo.png'
import Hero from './image/hero.png'
import Gallery1 from './image/gallery1.png'
import Gallery2 from './image/gallery2.png'
import Gallery3 from './image/gallery3.png'
import Gallery4 from './image/gallery4.png'
import Gallery5 from './image/gallery5.png'
import Gallery6 from './image/gallery6.png'
import Gallery7 from './image/gallery7.png'
import Gallery8 from './image/gallery8.png'
import Gallery9 from './image/gallery9.png'
import CEO from './image/Ceo founder.png'
import Parker from './image/parker.png'
import Louis from './image/fara.png'
import Pastor from './image/pastor.png'
import Yuvete from './image/yuvete.png'
import Hong from './image/hong.png'
import Oba from './image/obasnjo.png'
import { FaCalendar, FaLocationArrow, FaPhone } from 'react-icons/fa'


export const Supporters = [
    {
        id: 1, 
        img: Parker,
        name: "Senator Kelvin Parker",
        title: "New York Senator"
    },
    {
        id: 2, 
        img: Louis,
        name: "Fara Loius",
        title: "New York City Council"
    },
    {
        id: 3, 
        img: Pastor,
        name: "Pastor Babajide Balogun",
        title: "Director, Arit Fuller Foundation"
    },
    {
        id: 4, 
        img: Yuvete,
        name: "Yvette D. Clarke",
        title: "Congress Woman 9th District of New York"
    },
    {
        id: 5, 
        img: Hong,
        name: "Dr. Hong Tao Tze",
        title: "President, Federation of World Peace"
    },
    {
        id: 6, 
        img: Oba,
        name: "H.E. Bola Obasanjo",
        title: "Special Guest of Honour"
    },

]


export const GalaNite = [
    {
        id: 1,
        icon: <FaCalendar />,
        title: "Date & Time", 
        detail: [
            "Saturday September 21st, 2024",
            "5pm to 9pm", 
            "Boarding starts by 4:30pm"
        ]
    },

    {
        id: 2,
        icon: <FaLocationArrow />,
        title: "Location",
        detail: [
            "Brooklyn Army Terminal, Pier 9 140 58 Street at 2nd Ave", 
            "Long Island Marriot 101 Jame Dolittle Blvd. Uniiondale NY 11553"
        ]
    }, 

    {
        id: 3, 
        icon: <FaPhone />,
        title: "Contact",
        detail: [
            "800 228 9290",
            "+234 803 351 4961",
            "+1 (347) 526 3884"
        ]
    }
]



export {
    Logo, Hero, CEO, Gallery6
}

export const GalleryPics  = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9
]

export const GalleryVideos = [
    "https://www.youtube.com/embed/hHvmIXmoMaA?si=r36NDxXwiHXy25io",
    "https://www.youtube.com/embed/hnaVgreCEWM?si=T9vqsSduhDb5T0UC",
    "https://www.youtube.com/embed/v0W_lA7rW0Y?si=fMbUtxxZ4tHQn-PF",
    "https://www.youtube.com/embed/Di9mItwaQ3Y?si=E66h-uTgxaoFNfcb",
    "https://www.youtube.com/embed/c8lW29OZA5k?si=TN6mkZNBTcOsVWR-",
    "https://www.youtube.com/embed/3mYSlmidImo?si=yrkA3nr849ImIZ2_",
]

export const Nav = [
    {
        id: 1, 
        navi: "Home", 
        link: "/"
    },
    {
        id: 2, 
        navi: "Gallery", 
        link: "/gallery"
    } ,
    {
        id: 3, 
        navi: "Gala Nite", 
        link: "/gala"
    },  
]