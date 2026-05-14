// ============================================================
// BUG REGISTRY - All bug types with their drawing classes
// ============================================================

const bugTypes = [
    { 
        name: 'Beetle', 
        size: 15, 
        speed: 1.1, 
        canFly: false,
        color: '#6B4226', 
        color2: '#8B6914', 
        draw: Beetle.draw 
    },
    { 
        name: 'Ladybug', 
        size: 13, 
        speed: 0.95, 
        canFly: true,
        color: '#E01010', 
        color2: '#FF2020', 
        draw: Ladybug.draw 
    },
    { 
        name: 'Fire Ant', 
        size: 10, 
        speed: 1.8, 
        canFly: false,
        color: '#1A0A00', 
        color2: '#2D1A00', 
        draw: FireAnt.draw 
    },
    { 
        name: 'Spider', 
        size: 14, 
        speed: 0.7, 
        canFly: false,
        color: '#2D1A0A', 
        color2: '#3D2B1A', 
        draw: Spider.draw 
    },
    { 
        name: 'Caterpillar', 
        size: 12, 
        speed: 0.55, 
        canFly: false,
        color: '#388E3C', 
        color2: '#4CAF50', 
        draw: Caterpillar.draw 
    },
    { 
        name: 'Dragonfly', 
        size: 14, 
        speed: 2.2, 
        canFly: true,
        color: '#5D3A1A', 
        color2: '#7B5230', 
        draw: Dragonfly.draw 
    },
];

// ============================================================
// Bug Factory Function
// ============================================================
function createBug(type, isWarning) {
    return new Bug(type, isWarning);
}