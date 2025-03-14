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
      "GitLab": <SiGitlab size={40} className="text-orange-500" />,
      "CircleCI": <SiCircleci size={40} className="text-blue-500" />,
      "default": <FaServer size={40} className="text-gray-600" />
    };
    return reactIconMap[toolName] || reactIconMap["default"];
  };

  return (
    <Card className="group card-hover relative overflow-hidden h-40 w-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
      {/* Animated gradient overlay that expands from top to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
      
      {/* Content wrapper with higher z-index */}
      <div className="relative z-10">
        <CardHeader className="pb-2">
          <div className="flex items-center mb-2">
            <div className="mr-3 bg-gray-100 p-2 rounded-md">
              {getIconComponent(name)}
            </div>
            <div>
              <CardTitle className="text-lg transition-transform duration-300 group-hover:text-white group-hover:translate-x-2">
                {name}
              </CardTitle>
              <p className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-200">
                {category}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="h-15">
          <CardDescription className="text-gray-600 transition-colors duration-300 group-hover:text-white group-hover:translate-x-2">
            {description}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
};

export default ToolCard;
