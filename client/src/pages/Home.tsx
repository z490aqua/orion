import { useQuery } from "@tanstack/react-query";
import { StarMap } from "@/components/StarMap";
import { StarMap3D } from "@/components/StarMap3D";
import { StarBackground } from "@/components/StarBackground";
import { ConstellationInfo } from "@/components/ConstellationInfo";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { Constellation } from "@shared/schema";

export default function Home() {
  const [view3D, setView3D] = useState(false);
  const { data: constellation, isLoading } = useQuery<Constellation>({
    queryKey: ["/api/constellation"]
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <StarBackground />
        <div className="animate-pulse text-xl">Loading constellation data...</div>
      </div>
    );
  }

  if (!constellation) return null;

  return (
    <div className="min-h-screen text-foreground pb-20 relative z-10">
      <StarBackground />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white tracking-wider uppercase futuristic-header glow-text">
            {constellation.name}
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 flex flex-col">
            {view3D ? (
              <StarMap3D stars={constellation.stars} />
            ) : (
              <StarMap stars={constellation.stars} />
            )}
            <Button
              onClick={() => setView3D(!view3D)}
              className="bg-[#8B4198] hover:bg-[#8B4198]/90 btn-glow w-full mt-2"
            >
              {view3D ? 'Switch to 2D View' : 'Switch to 3D View'}
            </Button>
          </div>

          <div className="space-y-6">
            <ConstellationInfo
              name={constellation.name}
              meaning={constellation.meaning}
              bayerLetters={constellation.bayerLetters}
              location={constellation.location}
              story={constellation.story}
              family={constellation.family}
              facts={constellation.facts}
            />
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}