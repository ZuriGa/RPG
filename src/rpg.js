export const createCharacter = (name, health, attack, defense) => ({
    name, 
    health, 
    attack,
    defense,
});

export const calculateDamage = (attacker, defender) => {
    const damage = Math.max(0, attacker.attack - defender.defense);
    return damage;
};

export const createWizard = (name) => {
    const baseStats = createCharacter(name, 110, 35, 25);
    return {...baseStats, spell: 'Lightning'};
};

export const createWarrior = (name) => {
    const baseStats = createCharacter(name, 100, 25, 20);
    return {...baseStats, weapon: 'Sword'};
};

export const combat = (attacker, defender) => {
    const damage = calculateDamage(attacker, defender);
    const updateDefenderHealth = Math.max(0, defender.health - damage);
    return {...defender, health: updateDefenderHealth};
};

export const levelUp = (character) => {
    const newAttack = character.attack + 5;
    const newDefense = character.defense + 3;
    return {...character, health: character.health + 10, attack: newAttack, defense: newDefense};


};