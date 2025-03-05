import type { Express } from "express";
import { createServer } from "http";

const orionData = {
  name: "Orion",
  meaning: "Hunter",
  bayerLetters: "Alpha Orionis (Betelgeuse), Beta Orionis (Rigel), Gamma Orionis (Bellatrix), Kappa Orionis (Saiph)",
  location: "Right ascension: 5h, Declination: 5°",
  story:
    "I am Orion, the mighty hunter of ancient Greece. Let me tell you my tale. I was born to Poseidon, god of the seas, blessed with the ability to walk on water and unmatched skill in hunting. In my time, I was known throughout the land as the greatest hunter who ever lived - perhaps that was my undoing, for pride often comes before a fall.\n\n" +
    "I hunted alongside Artemis herself, the goddess of the hunt, through forests deep and mountains high. Some say we grew too close, which angered her brother Apollo. Others tell of my boast that I could slay any creature on Earth - a claim that would prove my undoing.\n\n" +
    "It was Gaia, the Earth Mother, who finally challenged my pride. She sent a scorpion, seemingly small but deadly, to prove that even the mightiest hunter could be humbled by the smallest of creatures. The scorpion's sting proved fatal, but Zeus, seeing the valor in both myself and my small but mighty opponent, placed us both among the stars - though in opposite seasons, so our celestial battle would never end.\n\n" +
    "Now I stride eternally across the night sky, my faithful hunting dogs Canis Major and Canis Minor at my side, forever pursuing the Seven Sisters of the Pleiades. My brightest stars - Betelgeuse at my shoulder and Rigel at my foot - guide sailors and travelers, while my distinctive belt points the way to other celestial wonders.",
  family:
    "Orion Family (includes Canis Major, Canis Minor, Lepus, and Monoceros)",
  facts: [
    "Contains Betelgeuse, a red supergiant star",
    "Home to the famous Orion Nebula (M42)",
    "One of the most recognizable constellations",
    "Visible throughout the world",
  ],
  stars: [
    // Main stars with updated positions and depths based on light years from Earth
    { x: 29, y: 43, z: 643, name: "Betelgeuse", magnitude: 0.42, color: "#ff4500" },  // ~643 light years
    { x: 58, y: 93, z: 860, name: "Rigel", magnitude: 0.18, color: "#a2e3ff" },      // ~860 light years
    { x: 50, y: 48, z: 250, name: "Bellatrix", magnitude: 1.64, color: "#b8e0ff" },  // ~250 light years
    { x: 43, y: 38, z: 250, name: "Meissa AB", magnitude: 1.64, color: "#b8e0ff" },
    
    { x: 33, y: 98, z: 1800, name: "Saiph", magnitude: 2.07, color: "#b8e0ff" },    // ~1800 light years

    // Belt stars
    { x: 39, y: 75, z: 1200, name: "Alnitak", magnitude: 1.77, color: "#b8e0ff" },   // ~1200 light years
    { x: 42, y: 71, z: 1340, name: "Alnilam", magnitude: 1.69, color: "#ffffff" },   // ~1340 light years
    { x: 45, y: 67, z: 900, name: "Mintaka", magnitude: 2.23, color: "#b8e0ff" },    // ~900 light years

    // Shield stars
    { x: 62, y: 32, z: 300, name: "π1 Ori", magnitude: 2.23, color: "#ffffff" },
    { x: 67, y: 32, z: 320, name: "π2 Ori", magnitude: 2.23, color: "#ffffff" },
    { x: 72, y: 36, z: 340, name: "π3 Ori", magnitude: 2.23, color: "#ffffff" },
    { x: 74, y: 40, z: 360, name: "π4 Ori", magnitude: 2.23, color: "#ffffff" },
    { x: 79, y: 49, z: 380, name: "π5 Ori", magnitude: 2.23, color: "#ffffff" },
    { x: 83, y: 58, z: 400, name: "π6 Ori", magnitude: 2.23, color: "#ffffff" },

    // fix all stars below
    // Club stars
    { x: 23, y: 36, z: 280, name: "Mu Orionis", magnitude: 2.23, color: "#ffffff" },    // Elbow
    { x: 21, y: 20, z: 300, name: "Nu Orionis", magnitude: 2.23, color: "#ffffff" },    // Handle
    { x: 19, y: 21, z: 320, name: "Xi Orionis", magnitude: 2.23, color: "#ffffff" },    // Handle
    { x: 31, y: 3, z: 340, name: "Chi1 Orionis", magnitude: 2.23, color: "#ffffff" },  // Club end
    { x: 25, y: 3, z: 360, name: "Chi2 Orionis", magnitude: 2.23, color: "#ffffff" },    // Club end
  
  ],
};

export async function registerRoutes(app: Express) {
  app.get("/api/constellation", (_req, res) => {
    res.json(orionData);
  });

  return createServer(app);
}