import { 
  Cloud, 
  Cog, 
  Layers, 
  BarChart, 
  Workflow, 
  Server, 
  Laptop,       
  Database,     
  BarChart2,      
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Cloud Infrastructure",
    description: "Expert setup and management of scalable cloud infrastructure on AWS, GCP, and Azure.",
    icon: Cloud,
  },
  {
    id: 2,
    title: "CI/CD Pipelines",
    description: "Automated continuous integration and delivery pipelines for faster, more reliable deployments.",
    icon: Workflow,
  },
  {
    id: 3,
    title: "Kubernetes Orchestration",
    description: "Container orchestration with Kubernetes for scalable, resilient microservices.",
    icon: Layers,
  },
  {
    id: 4,
    title: "Observability",
    description: "Comprehensive monitoring, logging, and alerting solutions for complete system visibility.",
    icon: BarChart,
  },
  {
    id: 5,
    title: "Infrastructure as Code",
    description: "Automated infrastructure deployment and management using Terraform and other IaC tools.",
    icon: Cog,
  },
  {
    id: 6,
    title: "Microservices Architecture",
    description: "Design and implementation of scalable microservices-based applications.",
    icon: Server,
  },
  {
    id: 7,
    title: "UI/UX Frontend",
    description: "Design and development of responsive and user-centric UI/UX for web and mobile applications.",
    icon: Laptop, 
  },
  {
    id: 8,
    title: "Backend Development",
    description: "Building robust, scalable backends with technologies like Node.js, Python, and Java.",
    icon: Database,
  },
  {
    id: 9,
    title: "Data Analysis",
    description: "Advanced data analysis, statistical modeling, and visualization to drive data-driven decisions.",
    icon: BarChart2, 
  },
];
