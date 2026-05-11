// ─── BUG REGISTRY: Maps bug types to their drawing classes ────────
const bugTypes = [
    { name:'Jewel Beetle', size:15, speed:1.1, draw: JewelBeetle.draw },
    { name:'Ladybug',      size:13, speed:0.95, draw: Ladybug.draw },
    { name:'Fire Ant',     size:10, speed:1.8, draw: FireAnt.draw },
    { name:'Tarantula',    size:17, speed:0.65, draw: Tarantula.draw },
    { name:'Caterpillar',  size:12, speed:0.55, draw: Caterpillar.draw },
    { name:'Dragonfly',    size:14, speed:2.2, draw: Dragonfly.draw },
];

function createBug(type, isWarning) {
    return new Bug(type, isWarning);
}