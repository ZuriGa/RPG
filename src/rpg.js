export const createCharacter = (name, health, attack, defense, level = 1) => ({
    name, 
    health, 
    attack,
    defense,
    level,
});

export const calculateDamage = (attacker, defender) => {
    let damage = Math.max(0, attacker.attack - defender.defense);
    
    if (attacker.spell) {
        if (attacker.spell === 'Lightning') {
            damage += 10;
        }
        
    } else if (attacker.weapon) {
        if (attacker.weapon === 'Sword') {
            damage += 5;
        }
    }
    return damage;
};

export const levelUp = (character) => {
    const newLevel = character.level + 1;
    const newHealth = character.health + 10;
    const newAttack = character.attack + 5;
    const newDefense = character.defense + 3;
    return {
        ...character, 
        level: newLevel,
        health: newHealth, 
        attack: newAttack, 
        defense: newDefense,
    };

};

export const createWizard = (name) => {
    const baseStats = createCharacter(name, 110, 35, 25, 2);
    return {
        ...baseStats, 
        spell: 'Lightning',
    };
};

export const createWarrior = (name) => {
    const baseStats = createCharacter(name, 100, 25, 20, 2);
    return {
        ...baseStats, 
        weapon: 'Sword',
    };
};

export const combat = (attacker, defender) => {
    const damage = calculateDamage(attacker, defender);
    const updateDefenderHealth = Math.max(0, defender.health - damage);
    return {
        ...defender, 
        health: updateDefenderHealth,
    };
};

