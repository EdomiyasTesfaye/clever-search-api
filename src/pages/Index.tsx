import { useNavigate } from "react-router-dom";
import { GoogleLogo } from "@/components/GoogleLogo";
import { SearchBar } from "@/components/SearchBar";

const Index = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-subtle">
      <div className="w-full max-w-4xl px-4 text-center space-y-12">
        {/* Logo */}
        <div className="animate-fade-in">
          <GoogleLogo className="mb-8" />
        </div>

        {/* Search Bar */}
        <div className="animate-slide-up">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Footer Links */}
        <div className="pt-20 space-y-4">
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About</a>
            <a href="#" className="hover:text-foreground transition-colors">Advertising</a>
            <a href="#" className="hover:text-foreground transition-colors">Business</a>
            <a href="#" className="hover:text-foreground transition-colors">How Search works</a>
          </div>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
