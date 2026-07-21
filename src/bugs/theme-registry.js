// ============================================================
// THEME REGISTRY - Maps backgrounds to their creatures
// color/color2 mirror the flat-vector coral palette; the game
// uses them for flee trails and squish particles.
// ============================================================

const themeCreatures = {
    mud: [
        { name: 'Mud Dauber',     size: 17, speed: 1.0, canFly: true,  color: '#f95f4d', color2: '#ff8a75', draw: MudDauber.draw },
        { name: 'Mayfly',         size: 13, speed: 1.5, canFly: true,  color: '#ff8a75', color2: '#ffb4a4', draw: Mayfly.draw },
        { name: 'Dragonfly',      size: 17, speed: 2.2, canFly: true,  color: '#ff6f5e', color2: '#ff9a86', draw: Dragonfly.draw },
        { name: 'Mole Cricket',   size: 18, speed: 0.9, canFly: false, color: '#ff7e6a', color2: '#ffa090', draw: MoleCricket.draw },
        { name: 'Water Scorpion', size: 19, speed: 0.6, canFly: false, color: '#ff6f5e', color2: '#ff9a86', draw: WaterScorpion.draw },
        { name: 'Crane Fly',      size: 14, speed: 1.3, canFly: true,  color: '#ff8a75', color2: '#ffb4a4', draw: CraneFly.draw },
        { name: 'Marsh Beetle',   size: 16, speed: 1.1, canFly: false, color: '#f95f4d', color2: '#ff8a75', draw: MarshBeetle.draw },
    ],
    grass: [
        { name: 'Grasshopper',    size: 17, speed: 1.4, canFly: true,  color: '#ff7e6a', color2: '#ffa090', draw: Grasshopper.draw },
        { name: 'Beetle',         size: 18, speed: 1.1, canFly: false, color: '#f95f4d', color2: '#ff8a75', draw: Beetle.draw },
        { name: 'Ladybug',        size: 16, speed: 0.95, canFly: true, color: '#ff5a47', color2: '#ff8a75', draw: Ladybug.draw },
        { name: 'Caterpillar',    size: 15, speed: 0.55, canFly: false, color: '#ff8a75', color2: '#ffb4a4', draw: Caterpillar.draw },
        { name: 'Armyworm',       size: 14, speed: 0.8, canFly: false, color: '#ff7e6a', color2: '#ffa090', draw: Armyworm.draw },
        { name: 'Flea',           size: 10, speed: 2.5, canFly: true,  color: '#f95f4d', color2: '#ff8a75', draw: Flea.draw },
        { name: 'Leafhopper',     size: 13, speed: 1.6, canFly: true,  color: '#ff6f5e', color2: '#ff9a86', draw: Leafhopper.draw },
    ],
    night: [
        { name: 'Moth',           size: 16, speed: 1.0, canFly: true,  color: '#ff8a75', color2: '#ffb4a4', draw: Moth.draw },
        { name: 'Firefly',        size: 12, speed: 0.8, canFly: true,  color: '#f95f4d', color2: '#ffd166', draw: Firefly.draw },
        { name: 'Spider',         size: 17, speed: 0.7, canFly: false, color: '#ff6f5e', color2: '#ff9a86', draw: Spider.draw },
        { name: 'Stonefly',       size: 15, speed: 1.1, canFly: true,  color: '#ff7e6a', color2: '#ffa090', draw: Stonefly.draw },
        { name: 'Glowworm',       size: 11, speed: 0.4, canFly: false, color: '#ff8a75', color2: '#ffd166', draw: Glowworm.draw },
        { name: 'Mosquito',       size: 10, speed: 2.2, canFly: true,  color: '#ff8a75', color2: '#ffb4a4', draw: Mosquito.draw },
    ],
    desert: [
        { name: 'Namib Beetle',   size: 16, speed: 1.0, canFly: false, color: '#ff7e6a', color2: '#ffa090', draw: NamibBeetle.draw },
        { name: 'Silver Ant',     size: 13, speed: 2.0, canFly: false, color: '#ffb4a4', color2: '#ffcaba', draw: SilverAnt.draw },
        { name: 'Desert Locust',  size: 18, speed: 1.5, canFly: true,  color: '#ff6f5e', color2: '#ff9a86', draw: DesertLocust.draw },
        { name: 'Darkling Beetle', size: 17, speed: 0.9, canFly: false, color: '#ef5544', color2: '#ff8a75', draw: DarklingBeetle.draw },
        { name: 'Dune Cricket',   size: 15, speed: 1.2, canFly: false, color: '#ff8a75', color2: '#ffb4a4', draw: DuneCricket.draw },
        { name: 'Scarab',         size: 19, speed: 0.8, canFly: false, color: '#f95f4d', color2: '#ff8a75', draw: Scarab.draw },
        { name: 'Antlion',        size: 14, speed: 0.6, canFly: false, color: '#ff7e6a', color2: '#ffa090', draw: Antlion.draw },
        { name: 'Sand Wasp',      size: 15, speed: 1.6, canFly: true,  color: '#ffb347', color2: '#ffcf70', draw: SandWasp.draw },
    ],
    ocean: [
        { name: 'Fish',           size: 16, speed: 1.2, canFly: true,  color: '#ff6f5e', color2: '#ff9a86', draw: Fish.draw },
        { name: 'Jellyfish',      size: 18, speed: 0.5, canFly: true,  color: '#ff7e6a', color2: '#ffa090', draw: Jellyfish.draw },
        { name: 'Crab',           size: 17, speed: 0.7, canFly: false, color: '#ff5a47', color2: '#ff8a75', draw: Crab.draw },
        { name: 'Seahorse',       size: 15, speed: 0.6, canFly: true,  color: '#ff8a75', color2: '#ffb4a4', draw: Seahorse.draw },
        { name: 'Turtle',         size: 21, speed: 0.5, canFly: true,  color: '#ff8a75', color2: '#ffb4a4', draw: Turtle.draw },
        { name: 'Shark',          size: 23, speed: 1.5, canFly: true,  color: '#ff7e6a', color2: '#ffa090', draw: Shark.draw },
    ],
    space: [
        { name: 'Alien',          size: 17, speed: 1.3, canFly: true,  color: '#ff7e6a', color2: '#ffa090', draw: Alien.draw },
        { name: 'Robot Bug',      size: 19, speed: 1.0, canFly: true,  color: '#ff9a86', color2: '#ffcaba', draw: RobotBug.draw },
        { name: 'UFO',            size: 21, speed: 1.8, canFly: true,  color: '#ff6f5e', color2: '#ff9a86', draw: UFO.draw },
        { name: 'Space Worm',     size: 23, speed: 0.6, canFly: true,  color: '#ff7e6a', color2: '#ffa090', draw: SpaceWorm.draw },
    ],
    candy: [
        { name: 'Donut',          size: 18, speed: 1.1, canFly: false, color: '#e8a45c', color2: '#ff8ab8', draw: Donut.draw },
        { name: 'Gummy Bear',     size: 17, speed: 0.7, canFly: false, color: '#ff4c5c', color2: '#ff8a75', draw: GummyBear.draw },
        { name: 'Lollipop',       size: 16, speed: 1.3, canFly: false, color: '#ff6ec0', color2: '#f4ecd8', draw: Lollipop.draw },
        { name: 'Candy Corn',     size: 15, speed: 1.2, canFly: false, color: '#ffa23c', color2: '#ffe066', draw: CandyCorn.draw },
        { name: 'Jellybean',      size: 12, speed: 1.7, canFly: false, color: '#6ee6a0', color2: '#8ae8d0', draw: JellyBean.draw },
        { name: 'Marshmallow',    size: 17, speed: 0.6, canFly: false, color: '#fff8f0', color2: '#ffd6ec', draw: Marshmallow.draw },
    ],
    cyber: [
        { name: 'Circuit Crawler', size: 17, speed: 0.8, canFly: false, color: '#4ce06a', color2: '#e858c8', draw: CircuitCrawler.draw },
        { name: 'Glitch Bot',      size: 19, speed: 1.0, canFly: false, color: '#3ce0e0', color2: '#e858c8', draw: GlitchBot.draw },
        { name: 'Nano Drone',      size: 15, speed: 1.9, canFly: true,  color: '#e858c8', color2: '#3ce0e0', draw: NanoDrone.draw },
        { name: 'Spam Bot',        size: 18, speed: 0.9, canFly: false, color: '#ffa03c', color2: '#3ce0e0', draw: SpamBot.draw },
        { name: 'Virus Byte',      size: 16, speed: 1.4, canFly: true,  color: '#a858f0', color2: '#3ce0e0', draw: VirusByte.draw },
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
        if (creatures === bugTypes) { return theme; }
    }
    return 'mud';
}
