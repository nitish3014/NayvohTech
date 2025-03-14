
import { 
  Cloud, 
  Cog, 
  Layers, 
  BarChart, 
  Workflow, 
  Server 
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
];
