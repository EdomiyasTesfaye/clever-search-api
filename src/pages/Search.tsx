import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { GoogleLogo } from "@/components/GoogleLogo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock } from "lucide-react";

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  displayUrl: string;
}

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query && !hasSearched) {
      performSearch(query);
      setHasSearched(true);
    }
  }, [query, hasSearched]);

  const performSearch = async (searchQuery: string) => {
    setLoading(true);
    
    // Mock search results for now - users can replace with real API
    setTimeout(() => {
      const mockResults: SearchResult[] = [
        {
          title: "Welcome to the Future of Search",
          url: "https://example.com/future-search",
          snippet: "Experience next-generation search capabilities with advanced algorithms and intuitive interface design. Discover information faster than ever before.",
          displayUrl: "example.com/future-search"
        },
        {
          title: "Search Technology Advances in 2024",
          url: "https://tech-news.com/search-advances",
          snippet: "The latest developments in search technology including AI-powered results, semantic understanding, and personalized recommendations.",
          displayUrl: "tech-news.com/search-advances"
        },
        {
          title: `Results for "${searchQuery}" - Everything You Need`,
          url: "https://knowledge-base.org/search-results",
          snippet: "Comprehensive information and resources related to your search query. Find detailed explanations, tutorials, and expert insights.",
          displayUrl: "knowledge-base.org/search-results"
        },
        {
          title: "Advanced Search Techniques and Tips",
          url: "https://search-guide.net/techniques",
          snippet: "Learn how to optimize your search queries for better results. Master advanced operators and search strategies used by professionals.",
          displayUrl: "search-guide.net/techniques"
        }
      ];
      
      setResults(mockResults);
      setLoading(false);
    }, 800);
  };

  const handleSearch = (newQuery: string) => {
    navigate(`/search?q=${encodeURIComponent(newQuery)}`);
    setHasSearched(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-8">
          <button 
            onClick={() => navigate('/')}
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl font-normal tracking-tight">
              <span className="text-primary">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-primary">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </div>
          </button>
          
          <div className="flex-1 max-w-2xl">
            <SearchBar 
              onSearch={handleSearch} 
              placeholder={query || "Search the web..."}
              showButtons={false}
            />
          </div>
        </div>
      </header>

      {/* Search Results */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {loading && (
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-muted rounded w-1/2 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="space-y-1">
            <div className="mb-4 text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              About {results.length} results (0.58 seconds)
            </div>
            
            {results.map((result, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">
                          {result.displayUrl}
                        </div>
                        <h3 className="text-xl text-primary hover:underline cursor-pointer font-normal">
                          {result.title}
                        </h3>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {result.snippet}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="mt-12 text-center">
              <Badge variant="secondary" className="text-xs">
                Connect your search API for real results
              </Badge>
            </div>
          </div>
        )}

        {!loading && !hasSearched && query && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Start searching to see results</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Search;