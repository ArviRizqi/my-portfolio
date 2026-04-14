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
    year: "2022 – Present",
    tag: "🎓 Thesis: Computer Vision for Medical Imaging",
  },
  {
    title: "Fullstack Java Bootcamp — Komdigi × Metrodata",
    desc: "Intensive enterprise software development program. Covered Java Spring Boot, RESTful API design, microservices, and production deployment workflows.",
    year: "2025",
    tag: "⚡ Intensive 6-month program",
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
    tagline: "MobileViTv2 + TTA holistic framework for ASD screening via computer vision",
    problem: "Early autism detection requires expensive clinical evaluation by specialists — slow, inaccessible, and not scalable for mass screening programs.",
    solution: "Built a holistic framework for developing, evaluating, and deploying an ASD screening system based on computer vision. Used MobileViTv2 combined with Test-Time Augmentation (TTA) for robust generalization across varied image conditions.",
    result: "90% classification accuracy. Deployed as an interactive Streamlit web app — turning a rigorous research framework into an accessible, real-world screening tool.",
    metrics: [
      { label: "Accuracy", value: "90%" },
      { label: "Architecture", value: "MobileViTv2 + TTA" },
      { label: "Deployment", value: "Streamlit" },
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
    tagline: "ML classifier for mental health risk screening — deployed publicly on HuggingFace",
    problem: "Mental health screening tools are largely inaccessible — requiring clinical intervention that most people can't or won't pursue, especially in early stages.",
    solution: "Built a supervised classification pipeline processing questionnaire and text data. Trained and evaluated multiple models (Random Forest, XGBoost, SVM), selected best performer via cross-validation, then wrapped with a clean web UI for open public use.",
    result: "End-to-end ML pipeline deployed on HuggingFace Spaces — publicly accessible with no installation required. A research model turned into a real-world mental health tool.",
    metrics: [
      { label: "Platform", value: "HuggingFace" },
      { label: "Models", value: "RF · XGB · SVM" },
      { label: "Status", value: "Live ↗" },
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "NLP", "Pandas", "HuggingFace Spaces"],
    demo: "https://huggingface.co/spaces/Artz-03/depression-prediction",
    github: "https://github.com/ArviRizqi",
    img: "/depresi.png",
  },
  {
    title: "Plant Recommendation System",
    type: "Recommendation Engine",
    typeColor: "emerald",
    emoji: "🌱",
    tagline: "Content-based filtering engine that recommends plants based on environment & preferences",
    problem: "Home gardeners have no personalized guidance for plant selection. Generic advice doesn't account for their specific climate, space constraints, or care preferences.",
    solution: "Built a content-based filtering recommendation engine using plant feature vectors and cosine similarity. Users input their environment conditions and preferences; the engine finds the closest matching plants with explainable reasoning for each recommendation.",
    result: "Personalized plant recommendations with interpretable similarity scores — making data-driven decisions feel natural and approachable for non-technical users.",
    metrics: [
      { label: "Algorithm", value: "Cosine Sim" },
      { label: "Approach", value: "Content-Based" },
      { label: "Interface", value: "Web App" },
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy", "Streamlit"],
    demo: "#",
    github: "https://github.com/ArviRizqi",
    img: "/j-tech.png",
  },
  {
    title: "Data Portfolio Dashboard",
    type: "Data Analytics",
    typeColor: "orange",
    emoji: "📊",
    tagline: "Interactive analytics dashboard showcasing tabular ML projects — forecasting & classification",
    problem: "Data science projects often live in notebooks — invisible to non-technical stakeholders and hard to demonstrate as end-to-end deliverables.",
    solution: "Built a multi-project analytics dashboard using Streamlit, featuring projects with tabular data (Crop Recommendation, House Price Prediction). Each project includes Data Overview, EDA, model pipeline, and an interactive Model App — presented as a cohesive, navigable product.",
    result: "A live, recruiter-friendly showcase of end-to-end data work: data loading → EDA → modeling → interactive prediction — all in one deployed application.",
    metrics: [
      { label: "Projects", value: "2+" },
      { label: "Focus", value: "Tabular ML" },
      { label: "Deployment", value: "Streamlit" },
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit", "Linear Regression"],
    demo: "https://arvrzq-portfolio-dashboard.streamlit.app/",
    github: "https://github.com/ArviRizqi",
    img: "/portfolio-dashboard.png",
  },
];

export const otherProjects = [
  { title: "J-Tech Company Site", tag: "Frontend · React · Next.js", img: "/j-tech.png", url: "https://j-tech.my.id/", class: "h-[220px] w-[49%]" },
  { title: "Oasis Pavilion — UI/UX", tag: "Figma · Design System", img: "/oasis.png", url: "https://www.figma.com/design/ivkZgDfnpJsVLpbiBhoRpl/library?node-id=0-1&t=8xtMRrUb9vNapiYw-1", class: "h-[220px] w-1/2" },
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