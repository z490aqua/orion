import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Navigation() {
  const [active, setActive] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "mythology", label: "Mythology" },
    { id: "family", label: "Family" },
    { id: "facts", label: "Facts" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header/navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActive(id);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Add offset for better detection

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= scrollPosition && bottom >= scrollPosition) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-4 left-0 right-0 flex justify-center px-4 z-50">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 flex gap-2 shadow-lg items-center">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={active === section.id ? "default" : "ghost"}
            size="sm"
            onClick={() => scrollToSection(section.id)}
            className={`nav-button text-sm transition-colors ${
              active === section.id 
                ? "bg-[#8B4198] text-white hover:bg-[#8B4198]/90 active" 
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            {section.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}