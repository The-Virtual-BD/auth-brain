import { AiOutlineQrcode } from 'react-icons/ai';
import { ImConnection, ImProfile } from 'react-icons/im';
import { TbDeviceMobileOff, TbUser, TbUserPlus, TbUserX } from 'react-icons/tb';
import { TiBusinessCard } from 'react-icons/ti';
import { MdDevicesOther, MdUpdate } from 'react-icons/md';
import { GiBrain, GiHealing } from 'react-icons/gi';
import { BsCartPlus, BsCreditCard2Front, BsHandIndexThumb, BsShieldCheck } from 'react-icons/bs';
import { TfiCheckBox } from 'react-icons/tfi';
import { RiEditBoxFill, RiUserSettingsLine } from 'react-icons/ri';
// import { MdUpdate } from 'react-icons/gr';
import Users from '../components/Dashboard.js/AdminSection/Users';
import Register from '../components/Dashboard.js/AdminSection/Register';
import Cards from '../components/Dashboard.js/AdminSection/Cards';
import AddCard from '../components/Dashboard.js/AdminSection/AddCard';
import UserDetails from '../components/Dashboard.js/UserSection/UserDetails';
import UserInput from '../components/Dashboard.js/UserSection/UserInput';


/* Contactless: The NFC Digital Visiting Card can be easily exchanged and accessed through a simple tap of an NFC-enabled device.

Convenient: No need for physical exchange of cards and storage of multiple cards, as the information is stored digitally.

Customizable: You can easily customize your NFC Digital Visiting Card with your own branding and design.

Updatable: You can easily update the information on your NFC Digital Visiting Card at any time.

Secure: The information on your NFC Digital Visiting Card is stored securely and is only accessible by authorized devices.

Eco-Friendly: NFC Digital Visiting Cards reduce the need for paper business cards and help to promote a more sustainable future. */

export const featuresSData = [
    {
        id: 1,
        name: "Contactless",
        details: "Smart Intro Card can be easily exchanged and accessed through a simple tap of an NFC enabled device.",
        icon: <TbUserX />
    },
    {
        id: 2,
        name: "Convenient",
        details: "Information is stored digitally and a Smart Intro card can be used for around 0.1 million times. So no need to carry or store multiple visiting/ business cards.",
        icon: <TfiCheckBox />
    },
    {
        id: 3,
        name: "QR Codes",
        details: "Open the phone’s camera or any QR code scanner app and scan the QR code on an old phone.",

        icon: <AiOutlineQrcode />
    },
    {
        id: 4,
        name: "Updatable",
        details: "You can update the information of your Smart Intro card anytime you want.",
        icon: <MdUpdate />

    },
    {
        id: 5,
        name: "Secure",
        details: "The information on your Smart Intro Card is stored securely and is only accessible by authorized devices.",
        icon: <BsShieldCheck />
    },
    {
        id: 6,
        name: "Eco-Friendly",
        details: "Smart Intro card educe the need for paper business/ visiting cards and can help to promote a more sustainable future.",
        icon: <GiHealing />
    },
];

export const workMethod = [
    {
        id: 201,
        name: "1. Order",
        step: "Select Your Smart Card, Add To Contact form & Complete Checkout Process.",
        icon: "/assets/steps/step-1.png"
    },
    {
        id: 202,
        name: "2. Design",
        step: "Design Process Starts After Order. Design Team Will Contact For Custom Design",
        icon: "/assets/steps/step-2.png"
    },
    {
        id: 203,
        name: "3. Create Profile",
        step: "After Receiving Your INTRO Product, Tap Or Scan To Create INTRO Profile.",
        icon: "/assets/steps/step-3.png"
    },
    {
        id: 204,
        name: "4. Start Sharing",
        step: "Just Tap Or Scan The Card To Instantly Share Profile. No App Needed.",
        icon: "/assets/steps/step-4.png"
    },
];


export const sideNavItems = [
    {
        id: 1,
        name: "Users",
        Compo: Users,
        icon: <TbUser />
    },
    {
        id: 2,
        name: "Register",
        Compo: Register,
        icon: <TbUserPlus />
    },
    {
        id: 3,
        name: "Cards",
        Compo: Cards,
        icon: <TiBusinessCard />
    },
    {
        id: 4,
        name: "Add Card",
        Compo: AddCard,
        icon: <BsCartPlus />
    },
    {
        id: 5,
        name: "User Profile",
        Compo: UserDetails,
        icon: <ImProfile />
    },
    {
        id: 6,
        name: "Settings",
        Compo: UserInput,
        icon: <RiUserSettingsLine />
    }
];




