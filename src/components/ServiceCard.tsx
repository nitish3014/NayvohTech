
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
  return (
    <Card className={`card-hover h-full ${className}`}>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 bg-nayvoh-100 rounded-md flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-nayvoh-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
