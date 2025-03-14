
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, role, bio, image }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden h-full card-hover">
      <div className="aspect-square bg-gray-200 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/300?text=Team+Member";
          }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-nayvoh-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
