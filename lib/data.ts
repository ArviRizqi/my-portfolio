import { 
    GalleryVerticalEndIcon, 
    GraduationCapIcon, 
    HomeIcon, 
    MailIcon, 
    SquareUserRoundIcon,
    LinkedinIcon, 
    GithubIcon, 
    InstagramIcon, 
    MapPinIcon,
    BrainCircuitIcon,
    CodeIcon,
} from 'lucide-react';

export const navLinks = [
  { id: 1, icon: HomeIcon, href: '#home', title: 'Home' },
  { id: 2, icon: SquareUserRoundIcon, href: '#about', title: 'About' },
  { id: 3, icon: BrainCircuitIcon, href: '#projects', title: 'Projects' },
  { id: 4, icon: CodeIcon, href: '#skills', title: 'Skills' },
  { id: 5, icon: MailIcon, href: '#contact', title: 'Contact' },
];

export const socialLinks = [
  { id: 1, icon: LinkedinIcon, href: 'https://www.linkedin.com/in/arvi-rizqi-fadhila', title: 'LinkedIn' },
  { id: 2, icon: GithubIcon, href: 'https://github.com/ArviRizqi', title: 'GitHub' },
  { id: 3, icon: InstagramIcon, href: 'https://www.instagram.com/arvi.rizqi', title: 'Instagram' },
];

export const educations = [
  {
    title: "Bachelor of Informatics — Universitas AMIKOM",
    desc: "Specializing in Computer Vision, Machine Learning, and Deep Learning. Final project: Medical Image Classification using CNN + Vision Transformer hybrid architecture.",
    year: "2022 – 2026",
    tag: "🎓 Thesis: Comparative Analysis of Pretrained Deep Learning Models for Early Autism Detection in Children Based on Facial Images",
  },
  {
    title: "Fullstack Java Bootcamp — Komdigi × Metrodata",
    desc: "Intensive enterprise software development program. Covered Java Spring Boot, RESTful API design, microservices, and production deployment workflows.",
    year: "2025",
    tag: "⚡ Intensive 3-month program",
  },
  {
    title: "Vocational School — SMK SAKTI GEMOLONG",
    desc: "Software Engineering major. Built foundational programming skills and modern web development with HTML/CSS/JavaScript.",
    year: "2018 – 2021",
    tag: "💻 Software Engineering Major",
  },
];

export interface FeaturedProject {
  title: string;
  type: string;
  typeColor: string;
  emoji: string;
  tagline: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  tech: string[];
  demo: string;
  github: string;
  img: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Autism Classification",
    type: "Computer Vision",
    typeColor: "cyan",
    emoji: "🧠",
    tagline: "MobileViTv2 + TTA model for ASD classification from children's facial images",
    problem: "Early autism detection is often expensive, time-consuming, and requires professional clinical evaluation, making large-scale screening difficult.",
    solution: "Developed a computer vision-based classification system using MobileViTv2 combined with Test-Time Augmentation (TTA) to improve robustness across varying image conditions.",
    result: "Achieved 90% classification accuracy. Successfully deployed as an interactive Streamlit web app for accessible ASD screening.",
    metrics: [
      { label: "Accuracy", value: "~90%" },
      { label: "Architecture", value: "MobileViTv2 + TTA" },
    ],
    tech: ["Python", "PyTorch", "MobileViTv2", "TTA", "Streamlit", "OpenCV"],
    demo: "https://autismeclassification.streamlit.app/",
    github: "https://github.com/ArviRizqi",
    img: "/autism-classifiaction.png",
  },
  {
    title: "Depression Prediction System",
    type: "Machine Learning",
    typeColor: "violet",
    emoji: "💬",
    tagline: "XGBoost-based mental health prediction from social media usage patterns",
    problem: "Mental health issues often go undetected due to lack of accessible early screening tools based on everyday user behavior.",
    solution: "Built a supervised machine learning model using XGBoost to predict depression risk based on user social media activity patterns.",
    result: "Achieved over 95% prediction accuracy. Deployed as a public Streamlit web application for easy and real-time access.",
    metrics: [
      { label: "Accuracy", value: "~95%" },
      { label: "Model", value: "XGBoost Classifier" },
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
    demo: "https://arvrzq-portfolio-dashboard.streamlit.app/?project=depression-detection",
    github: "https://github.com/ArviRizqi",
    img: "/depression-prediction.png",
  },
  {
    title: "Plant Recommendation System",
    type: "Recommendation Engine",
    typeColor: "emerald",
    emoji: "🌱",
    tagline: "Random Forest model for plant recommendation based on soil nutrient conditions",
    problem: "Farmers and home gardeners often lack data-driven recommendations tailored to their soil conditions and nutrient availability.",
    solution: "Developed a Random Forest-based model to recommend suitable plants using soil nutrient inputs such as nitrogen, phosphorus, and potassium levels.",
    result: "Achieved 98% accuracy. Deployed via Streamlit, enabling users to input soil conditions and receive instant plant recommendations.",
    metrics: [
      { label: "Accuracy", value: "~99%" },
      { label: "Model", value: "Random Forest" },
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy", "Streamlit"],
    demo: "https://arvrzq-portfolio-dashboard.streamlit.app/?project=crop-recommendation",
    github: "https://github.com/ArviRizqi",
    img: "/crop-recommendation.png",
  },
  {
    title: "House Price Prediction",
    type: "Data Analytics",
    typeColor: "orange",
    emoji: "📊",
    tagline: "Gradient Boosting model for predicting house prices based on key property features",
    problem: "Accurate house price estimation is challenging due to multiple influencing factors such as location, size, and property characteristics.",
    solution: "Built a predictive model using Gradient Boosting trained on structured data with key property features to estimate house prices.",
    result: "Achieved over 85% prediction performance. Deployed as a Streamlit app for real-time and user-friendly predictions.",
    metrics: [
      { label: "Performance", value: "R² ~ 0.90" },
      { label: "Model", value: "Gradient Boosting" },
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit"],
    demo: "https://arvrzq-portfolio-dashboard.streamlit.app/?project=house-price-prediction",
    github: "https://github.com/ArviRizqi",
    img: "/house-price-prediction.png",
  },
];

export const otherProjects = [
  { title: "J-Tech Company Site", tag: "Frontend · React · Next.js", img: "/j-tech.png", url: "https://j-tech.my.id/", class: "h-[220px] w-[49%]" },
  { title: "Oasis Pavilion — UI/UX", tag: "Figma · Design System", img: "/oasis.png", url: "https://www.figma.com/design/ivkZgDfnpJsVLpbiBhoRpl/library?node-id=0-1&t=8xtMRrUb9vNapiYw-1", class: "h-[220px] w-1/2" },
  { title: "ALter-Chess", tag: "Game Development · C++ · Unity", img: "/alter-chess.png", url: "https://alterchess.my.id/", class: "h-[220px] w-[49%]" },

];

export const skillGroups = [
  {
    category: "Machine Learning",
    icon: "bot",
    skills: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "SVM", "Linear Regression", "Logistic Regression", "Feature Engineering", "Model Evaluation", "Cross-Validation"],
  },
  {
    category: "Deep Learning",
    icon: "brain",
    skills: ["PyTorch", "CNN", "MobileViTv2", "Vision Transformer (ViT)", "Test-Time Augmentation", "Transfer Learning", "Image Classification", "OpenCV"],
  },
  {
    category: "Data Analysis",
    icon: "chart",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Data Visualization", "Statistical Analysis", "SQL"],
  },
  {
    category: "Deployment & Tools",
    icon: "rocket",
    skills: ["Streamlit", "HuggingFace Spaces", "Git", "GitHub", "Jupyter Notebook", "Google Colab"],
  },
  {
    category: "Frontend (Supporting)",
    icon: "zap",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "Figma"],
  },
];


export const address = [
  { icon: MapPinIcon, label: "Location", value: "Yogyakarta, Indonesia" },
  { icon: MailIcon, label: "Email", value: "arvrzqfdhla@gmail.com" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/arvi-rizqi-fadhila" },
  { icon: GithubIcon, label: "GitHub", value: "github.com/ArviRizqi" },
];