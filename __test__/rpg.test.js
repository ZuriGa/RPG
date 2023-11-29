import { createCharacter, calculateDamage, combat, levelUp, createWizard, createWarrior } from "../src/rpg.js";

describe('createCharacter', () => {

    test('It should create a character object with name, health, attack and defense', () => {
        const character = createCharacter ('Wade Watts', 100, 20, 15);
        expect(character).toEqual({ name: 'Wade Watts', health: 100, attack: 20, defense: 15});
    });

    test('calculateDamage should calculate damage correctly', () => {
        const attacker = createCharacter('Attacker', 100, 20, 15);
        const defender = createCharacter('Defender', 100, 15, 10);
        const damage = calculateDamage(attacker, defender);
        expect(damage).toBe(10);
    });

    test('It should correctly use combat function to inflict damage on the defender', () => {
        const attacker = createCharacter('Attacker', 100, 20, 15);
        const defender = createCharacter('Defender', 100, 15, 10);
        const updateDefender = combat(attacker, defender);
        expect(updateDefender.health).toBe(90);
    });

    test('It should correctly use levelUp function to increase character stats', () => {
        const character = createCharacter ('Wade Watts', 100, 20, 15);
        const levelUpCharacter = levelUp(character);
        expect(levelUpCharacter.attack).toBe(25);
        expect(levelUpCharacter.defense).toBe(18);
        expect(levelUpCharacter.health).toBe(110);
    });

    test('createWizard should create a wizard character with special powers', () => {
        const wizard = createWizard('Art3mis');
        expect(wizard).toEqual({name: 'Art3mis', health: 110, attack: 35, defense: 25, spell: 'Lightning'});
    });

    test('createWarrior should create a warrior character with special powers', () => {
        const warrior = createWarrior('Tyra');
        expect(warrior).toEqual({name: 'Tyra', health:100, attack: 25, defense: 20, weapon: 'Sword'});
    });
});

