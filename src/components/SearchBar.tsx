import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
  placeholder?: string;
  showButtons?: boolean;
}

export const SearchBar = ({ 
  onSearch, 
  className, 
  placeholder = "Search the web...", 
  showButtons = true 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleFeelingLucky = () => {
    if (query.trim()) {
      // For now, just perform a regular search
      onSearch(query.trim());
    }
  };

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
            <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
          </div>
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="h-14 pl-12 pr-4 text-lg rounded-full border-0 shadow-search hover:shadow-search-hover focus:shadow-search-focus bg-white transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        
        {showButtons && (
          <div className="flex justify-center gap-4">
            <Button
              type="submit"
              variant="secondary"
              className="px-6 py-2 rounded-md hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              Google Search
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={handleFeelingLucky}
              className="px-6 py-2 rounded-md hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};