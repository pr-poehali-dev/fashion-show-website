import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background border-b shadow-sm py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          FASHION IN MOTION 2025
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link to="/">О мероприятии</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link to="/registration">Регистрация</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
