
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-nayvoh-100 text-nayvoh-600">
          <span className="text-3xl font-bold">404</span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <Button asChild className="bg-nayvoh-600 hover:bg-nayvoh-700">
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
