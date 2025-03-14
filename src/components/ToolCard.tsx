import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaDocker, FaJenkins, FaAws, FaGitAlt, FaLinux, FaServer } from "react-icons/fa";
import { 
  SiKubernetes, 
  SiTerraform, 
  SiAnsible, 
  SiPrometheus, 
  SiGrafana, 
  SiGithubactions,
  SiSonarqube,
  // SiArgocd,
  SiTrivy,
  SiElasticsearch,
  SiGitlab,
  SiCircleci
} from "react-icons/si";

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  iconType?: "react-icons";
}

const ToolCard = ({ name, description, category, iconType = "react-icons" }: ToolCardProps) => {
  const getIconComponent = (toolName: string) => {
    const reactIconMap: Record<string, React.ReactNode> = {
      "Docker": <FaDocker size={40} className="text-blue-600" />,
      "Jenkins": <FaJenkins size={40} className="text-red-600" />,
      "Kubernetes": <SiKubernetes size={40} className="text-blue-500" />,
      "AWS": <FaAws size={40} className="text-orange-600" />,
      "Git": <FaGitAlt size={40} className="text-red-500" />,
      "Linux": <FaLinux size={40} className="text-black" />,
      "Terraform": <SiTerraform size={40} className="text-purple-600" />,
      "Ansible": <SiAnsible size={40} className="text-black" />,
      "Prometheus": <SiPrometheus size={40} className="text-orange-500" />,
      "Grafana": <SiGrafana size={40} className="text-orange-500" />,
      "GitHub Actions": <SiGithubactions size={40} className="text-gray-600" />,
      "SonarQube": <SiSonarqube size={40} className="text-blue-700" />,
      "Trivy": <SiTrivy size={40} className="text-green-500" />,
      "ELK": <SiElasticsearch size={40} className="text-orange-500" />,
      // "ArgoCD": <SiArgocd size={40} className="text-purple-500" />,
      "GitLab": <SiGitlab size={40} className="text-orange-500" />,
      "CircleCI": <SiCircleci size={40} className="text-blue-500" />,
      // Fallback icon for unrecognized tools
      "default": <FaServer size={40} className="text-gray-600" />
    };
    return reactIconMap[toolName] || reactIconMap["default"];
  };

  return (
    <Card className="card-hover overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center mb-2">
          <div className="mr-3 bg-gray-100 p-2 rounded-md">
            {getIconComponent(name)}
          </div>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <p className="text-xs text-gray-500">{category}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
