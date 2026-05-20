// ============================================================
// THEME REGISTRY - Maps backgrounds to their creatures
// ============================================================

const themeCreatures = {
    mud: [
        { name: 'Mud Dauber',   size: 14, speed: 1.0, canFly: true,  color: '#1a1a2e', color2: '#3d3d5c', draw: MudDauber.draw },
        { name: 'Mayfly',       size: 10, speed: 1.5, canFly: true,  color: '#88CC88', color2: '#AAEEAA', draw: Mayfly.draw },
        { name: 'Dragonfly',    size: 14, speed: 2.2, canFly: true,  color: '#5D3A1A', color2: '#7B5230', draw: Dragonfly.draw },
        { name: 'Mole Cricket', size: 15, speed: 0.9, canFly: false, color: '#4A3728', color2: '#6B5040', draw: MoleCricket.draw },
        { name: 'Water Scorpion', size: 16, speed: 0.6, canFly: false, color: '#2D1A0A', color2: '#4A2A15', draw: WaterScorpion.draw },
        { name: 'Crane Fly',    size: 11, speed: 1.3, canFly: true,  color: '#8B7355', color2: '#A89070', draw: CraneFly.draw },
        { name: 'Marsh Beetle', size: 13, speed: 1.1, canFly: false, color: '#3D5C3A', color2: '#5A7A4A', draw: MarshBeetle.draw },
    ],
    grass: [
        { name: 'Grasshopper',  size: 14, speed: 1.4, canFly: true,  color: '#4CAF50', color2: '#66BB6A', draw: Grasshopper.draw },
        { name: 'Beetle',       size: 15, speed: 1.1, canFly: false, color: '#6B4226', color2: '#8B6914', draw: Beetle.draw },
        { name: 'Ladybug',      size: 13, speed: 0.95, canFly: true,  color: '#E01010', color2: '#FF2020', draw: Ladybug.draw },
        { name: 'Caterpillar',  size: 12, speed: 0.55, canFly: false, color: '#388E3C', color2: '#4CAF50', draw: Caterpillar.draw },
        { name: 'Armyworm',     size: 11, speed: 0.8, canFly: false, color: '#8D6E63', color2: '#A1887F', draw: Armyworm.draw },
        { name: 'Flea',         size: 7,  speed: 2.5, canFly: true,  color: '#3E2723', color2: '#5D4037', draw: Flea.draw },
        { name: 'Leafhopper',   size: 10, speed: 1.6, canFly: true,  color: '#7CB342', color2: '#9CCC65', draw: Leafhopper.draw },
    ],
    night: [
        { name: 'Moth',         size: 13, speed: 1.0, canFly: true,  color: '#8D6E63', color2: '#BCAAA4', draw: Moth.draw },
        { name: 'Firefly',      size: 9,  speed: 0.8, canFly: true,  color: '#1A237E', color2: '#283593', draw: Firefly.draw },
        { name: 'Spider',       size: 14, speed: 0.7, canFly: false, color: '#2D1A0A', color2: '#3D2B1A', draw: Spider.draw },
        { name: 'Stonefly',     size: 12, speed: 1.1, canFly: true,  color: '#546E7A', color2: '#78909C', draw: Stonefly.draw },
        { name: 'Glowworm',     size: 8,  speed: 0.4, canFly: false, color: '#1B5E20', color2: '#2E7D32', draw: Glowworm.draw },
        { name: 'Mosquito',     size: 7,  speed: 2.2, canFly: true,  color: '#37474F', color2: '#546E7A', draw: Mosquito.draw },
    ],
    desert: [
        { name: 'Namib Beetle',   size: 13, speed: 1.0, canFly: false, color: '#8D6E63', color2: '#A1887F', draw: NamibBeetle.draw },
        { name: 'Silver Ant',     size: 10, speed: 2.0, canFly: false, color: '#BDBDBD', color2: '#E0E0E0', draw: SilverAnt.draw },
        { name: 'Desert Locust',  size: 15, speed: 1.5, canFly: true,  color: '#FF8F00', color2: '#FFB300', draw: DesertLocust.draw },
        { name: 'Darkling Beetle', size: 14, speed: 0.9, canFly: false, color: '#212121', color2: '#424242', draw: DarklingBeetle.draw },
        { name: 'Dune Cricket',   size: 12, speed: 1.2, canFly: false, color: '#BF8030', color2: '#D4A050', draw: DuneCricket.draw },
        { name: 'Scarab',         size: 16, speed: 0.8, canFly: false, color: '#1A237E', color2: '#283593', draw: Scarab.draw },
        { name: 'Antlion',        size: 11, speed: 0.6, canFly: false, color: '#795548', color2: '#8D6E63', draw: Antlion.draw },
        { name: 'Sand Wasp',      size: 12, speed: 1.6, canFly: true,  color: '#FFC107', color2: '#FFD54F', draw: SandWasp.draw },
    ],
    ocean: [
        { name: 'Fish',       size: 13, speed: 1.2, canFly: true,  color: '#FF6B35', color2: '#FF8C55', draw: Fish.draw },
        { name: 'Jellyfish',  size: 15, speed: 0.5, canFly: true,  color: '#E040FB', color2: '#EA80FC', draw: Jellyfish.draw },
        { name: 'Crab',       size: 14, speed: 0.7, canFly: false, color: '#D84315', color2: '#E64A19', draw: Crab.draw },
        { name: 'Seahorse',   size: 12, speed: 0.6, canFly: true,  color: '#FFD54F', color2: '#FFE082', draw: Seahorse.draw },
        { name: 'Turtle',     size: 18, speed: 0.5, canFly: true,  color: '#2E7D32', color2: '#43A047', draw: Turtle.draw },
        { name: 'Shark',      size: 20, speed: 1.5, canFly: true,  color: '#607D8B', color2: '#90A4AE', draw: Shark.draw },
    ],
    space: [
        { name: 'Alien',      size: 14, speed: 1.3, canFly: true,  color: '#00E676', color2: '#69F0AE', draw: Alien.draw },
        { name: 'Robot Bug',  size: 16, speed: 1.0, canFly: true,  color: '#B0BEC5', color2: '#CFD8DC', draw: RobotBug.draw },
        { name: 'UFO',        size: 18, speed: 1.8, canFly: true,  color: '#9C27B0', color2: '#CE93D8', draw: UFO.draw },
        { name: 'Space Worm', size: 20, speed: 0.6, canFly: true,  color: '#7C4DFF', color2: '#B388FF', draw: SpaceWorm.draw },
    ],
};

// Default theme is Mud
let bugTypes = themeCreatures['mud'];

// Function to switch theme
function setTheme(theme) {
    if (themeCreatures[theme]) {
        bugTypes = themeCreatures[theme];
    } else {
        bugTypes = themeCreatures['mud'];
    }
}

// Function to get current theme name
function getCurrentTheme() {
    for (const [theme, creatures] of Object.entries(themeCreatures)) {
        if (creatures === bugTypes) return theme;
    }
    return 'mud';
}