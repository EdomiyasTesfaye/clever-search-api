import { cn } from "@/lib/utils";

interface GoogleLogoProps {
  className?: string;
}

export const GoogleLogo = ({ className }: GoogleLogoProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="text-8xl font-normal tracking-tight">
        <span className="text-primary">G</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-primary">g</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
      </div>
    </div>
  );
};