import { createCharacter, calculateDamage, combat, levelUp, createWizard, createWarrior } from "../src/rpg.js";

describe('createCharacter', () => {

    test('It should create a character object with name, health, attack, defense and level 1', () => {
        const character = createCharacter ('Wade Watts', 100, 20, 15);
        expect(character).toEqual({ name: 'Wade Watts', health: 100, attack: 20, defense: 15, level: 1});
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
        expect(wizard).toEqual({name: 'Art3mis', health: 110, attack: 35, defense: 25, spell: 'Lightning', level: 2});
    });

    test('createWarrior should create a warrior character with special powers', () => {
        const warrior = createWarrior('Tyra');
        expect(warrior).toEqual({name: 'Tyra', health:100, attack: 25, defense: 20, weapon: 'Sword', level: 2});
    });

    test('levelUp should increase characters stats after winning battle', () => {
        const character = createCharacter ('Wade Watts', 100, 20, 15);
        const levelUpCharacter = levelUp(character);
        expect(levelUpCharacter).toEqual({name: 'Wade Watts', health: 110, attack: 25, defense: 18, level: 2});
    });

    test('calculateDamage should consider wizard spell in combat', () => {
        const wizard = createWizard('Art3mis');
        const warrior = createWarrior('Parzival');
        const damage = calculateDamage(wizard, warrior);
        expect(damage).toBe(35 - 10);
    });

    test('calculateDamage should consider warrior weapon in combat', () => {
        const wizard = createWizard('Art3mis');
        const warrior = createWarrior('Parzival');
        const damage = calculateDamage(warrior, wizard);
        expect(damage).toBe(5);
    });

    test('combat should handle defender health if it drops to zero', () => {
        const attacker = createCharacter('Attacker', 100, 20, 15);
        const defender = createCharacter('Defender', 10, 15, 10);
        const damage = calculateDamage(attacker, defender);
        const updateDefender = combat(attacker, defender);
        expect(updateDefender.health).toBe(0);
    });

    test('combat should handle defender surviving the attack', () => {
        const attacker = createCharacter('Attacker', 100, 20, 15);
        const defender = createCharacter('Defender', 100, 5, 10);
        const damage = calculateDamage(attacker, defender);
        const updateDefender = combat(attacker, defender);
        expect(updateDefender.health).toBeGreaterThan(0);
        expect(updateDefender.health).toBeLessThan(defender.health);
    });
});

