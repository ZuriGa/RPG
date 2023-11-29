export const createCharacter = (name, health, attack, defense) => ({
    name, 
    health, 
    attack,
    defense,
});

// const calculateDamage = (attacker, defender) => {
//     const damage = Math.max(0, attacker.attack - defender.defense);
//     return damage;
// };