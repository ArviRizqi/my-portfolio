import { 
    GalleryVerticalEndIcon, 
    GraduationCapIcon, 
    HomeIcon, 
    MailIcon, 
    SquareUserRoundIcon,
    LinkedinIcon, 
    GithubIcon, 
    InstagramIcon, 
    MapPinIcon

} from 'lucide-react';

export const navLinks = [
  { id: 1, icon: HomeIcon, href: '#home', title: 'Home' },
  { id: 2, icon: SquareUserRoundIcon, href: '#about', title: 'About' },
  { id: 3, icon: GraduationCapIcon, href: '#experience', title: 'Experience' },
  { id: 4, icon: GalleryVerticalEndIcon, href: '#portfolio', title: 'portfolio' },
  { id: 5, icon: MailIcon, href: '#contact', title: 'Contact' },
];

export const socialLinks = [
  { id: 1, icon: LinkedinIcon, href: 'https://www.linkedin.com/in/arvi-rizqi-fadhila', title: 'LinkedIn' },
  { id: 2, icon: GithubIcon, href: 'https://github.com/ArviRizqi', title: 'GitHub' },
  { id: 3, icon: InstagramIcon, href: 'https://www.instagram.com/arvi.rizqi', title: 'Twitter' },
];

export const educations = [
  {
    title: "Fullstack Java Bootcamp – Komdigi x Metrodata",
    desc: "Focused on mastering backend development, Java Spring Boot, RESTful APIs, and deployment workflows.",
    year: "2025",
  },
  {
    title: "Bachelor of Computer Science (Informatics) – Universitas AMIKOM",
    desc: "Specializing in Computer Vision, Machine Learning, and Deep Learning research.",
    year: "2022 - Now",
  },
  {
    title: "Student – SMK SAKTI GEMOLONG",
    desc: "Learned foundational web development and built modern landing pages with animations.",
    year: "2018 - 2021",
  },
];


export const projects = [
  { title: "J-Tech", tag: "Frontend Developer", img: "/j-tech.png", url:"https://j-tech.my.id/", class: "h-[220px] w-[40%]" },
  { title: "Autisme Classification", tag: "Machine Learning Engineer", img: "/alter-chess.png", url:"https://autismeclassification.streamlit.app/", class: "h-[220px] w-[50%]" },
  { title: "Mental Health Prediction", tag: "Machine Learning Engineer", img: "/j-tech.png", url:"https://huggingface.co/spaces/Artz-03/depression-prediction", class: "h-[220px] w-[50%]" },
  { title: "Other Portolio", tag: "Fullstack Developer", img: "/alter-chess.png", url:"https://4693-arvirizqi-8zxg2a4uq-arvi-rizqis-projects.vercel.app/", class: "h-[220px]  w-[40%]" }
];

export const address = [
    { icon: MapPinIcon, label: "Address", value: "Yogyakarta, Indonesia" },
    { icon: MailIcon, label: "Email", value: "arvrzqfdhla@gmail.com" }
]