import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

interface ConstellationInfoProps {
  name: string;
  meaning: string;
  bayerLetters: string;
  location: string;
  story: string;
  family: string;
  facts: string[];
}

export function ConstellationInfo({
  name,
  meaning,
  bayerLetters,
  location,
  story,
  family,
  facts
}: ConstellationInfoProps) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="overview"
      >
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-[#8B4198] to-purple-400 bg-clip-text text-transparent">
              {name} - {meaning}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-white/90">Notable Stars</h3>
                <p className="text-sm text-white/70 card-content">{bayerLetters}</p>
              </div>
              <Separator className="bg-white/10" />
              <div>
                <h3 className="font-semibold mb-2 text-white/90">Location</h3>
                <p className="text-sm text-white/70 card-content">{location}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        id="mythology"
      >
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="text-white/90">Mythology</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white/70 card-content">{story}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        id="family"
      >
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="text-white/90">Constellation Family</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white/70 card-content">{family}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        id="facts"
      >
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="text-white/90">Interesting Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              {facts.map((fact, index) => (
                <li key={index} className="text-sm text-white/70 card-content">
                  {fact}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}