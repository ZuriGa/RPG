import { createCharacter } from "../src/rpg.js";

describe('createCharacter', () => {

    test('It should create a character object with name, health, attack and defense', () => {
        const character = createCharacter ('Wade Watts', 100, 20, 15);
        expect(character).toEqual({ name: 'Wade Watts', health: 100, attack: 20, defense: 15});
    });

    // test('calculateDamage should calculate damage correctly', () => {
    //     const attacker = createCharacter('Attacker', 100, 30, 10);
    //     const defender = createCharacter('Defender', 100, 15, 5);
    //     const damage = calculateDamage(attacker, defender);
    //     expect(damage).toBe(20);
    // });
})

