export const allRaceData = {
    "count": 9,
    "results": [
        {
            "index": "dragonborn",
            "name": "Dragonborn",
            "url": "/api/races/dragonborn"
        },
        {
            "index": "dwarf",
            "name": "Dwarf",
            "url": "/api/races/dwarf"
        },
        {
            "index": "elf",
            "name": "Elf",
            "url": "/api/races/elf"
        },
        {
            "index": "gnome",
            "name": "Gnome",
            "url": "/api/races/gnome"
        },
        {
            "index": "half-elf",
            "name": "Half-Elf",
            "url": "/api/races/half-elf"
        },
        {
            "index": "half-orc",
            "name": "Half-Orc",
            "url": "/api/races/half-orc"
        },
        {
            "index": "halfling",
            "name": "Halfling",
            "url": "/api/races/halfling"
        },
        {
            "index": "human",
            "name": "Human",
            "url": "/api/races/human"
        },
        {
            "index": "tiefling",
            "name": "Tiefling",
            "url": "/api/races/tiefling"
        }
    ]
}

export const raceDetailData = {
    "_id": "5ecc9ad50b1bb138c5432295",
    "index": "dragonborn",
    "name": "Dragonborn",
    "speed": 30,
    "ability_bonuses": [
        {
            "name": "STR",
            "url": "/api/ability-scores/str",
            "bonus": 2
        },
        {
            "name": "CHA",
            "url": "/api/ability-scores/cha",
            "bonus": 1
        }
    ],
    "alignment": " Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
    "age": "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
    "size": "Medium",
    "size_description": "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
    "starting_proficiencies": [],
    "languages": [
        {
            "url": "/api/languages/common",
            "name": "Common"
        },
        {
            "url": "/api/languages/draconic",
            "name": "Draconic"
        }
    ],
    "language_desc": "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
    "traits": [
        {
            "name": "Draconic Ancestry",
            "url": "/api/traits/draconic-ancestry"
        },
        {
            "name": "Breath Weapon",
            "url": "/api/traits/breath-weapon"
        },
        {
            "name": "Damage Resistance",
            "url": "/api/traits/damage-resistance"
        }
    ],
    "trait_options": {
        "choose": 1,
        "from": [
            {
                "name": "Breath Weapon (Black)",
                "url": "/api/traits/breath-weapon"
            },
            {
                "name": "Breath Weapon (Blue)",
                "url": "/api/traits/breath-weapon"
            },
            {
                "name": "Breath Weapon (Brass)",
                "url": "/api/traits/breath-weapon"
            },
            {
                "name": "Breath Weapon (Bronze)",
                "url": "/api/traits/breath-weapon"
            },
            {
                "name": "Breath Weapon (Copper)",
                "url": "/api/traits/breath-weapon"
            },
            {
                "name": "Breath Weapon (Gold)",
                "url": "/api/traits/breath-weapon"
            },
            {
                "name": "Breath Weapon (Green)",
                "url": "/api/traits/breath-weapon"
            },
            {
                "name": "Breath Weapon (Red)",
                "url": "/api/traits/breath-weapon"
            },
            {
                "name": "Breath Weapon (Silver)",
                "url": "/api/traits/breath-weapon"
            },
            {
                "name": "Breath Weapon (White)",
                "url": "/api/traits/breath-weapon"
            }
        ],
        "type": "trait"
    },
    "subraces": [],
    "url": "/api/races/dragonborn"
}

export const allClassData = {
    "count": 12,
    "results": [
        {
            "index": "barbarian",
            "name": "Barbarian",
            "url": "/api/classes/barbarian"
        },
        {
            "index": "bard",
            "name": "Bard",
            "url": "/api/classes/bard"
        },
        {
            "index": "cleric",
            "name": "Cleric",
            "url": "/api/classes/cleric"
        },
        {
            "index": "druid",
            "name": "Druid",
            "url": "/api/classes/druid"
        },
        {
            "index": "fighter",
            "name": "Fighter",
            "url": "/api/classes/fighter"
        },
        {
            "index": "monk",
            "name": "Monk",
            "url": "/api/classes/monk"
        },
        {
            "index": "paladin",
            "name": "Paladin",
            "url": "/api/classes/paladin"
        },
        {
            "index": "ranger",
            "name": "Ranger",
            "url": "/api/classes/ranger"
        },
        {
            "index": "rogue",
            "name": "Rogue",
            "url": "/api/classes/rogue"
        },
        {
            "index": "sorcerer",
            "name": "Sorcerer",
            "url": "/api/classes/sorcerer"
        },
        {
            "index": "warlock",
            "name": "Warlock",
            "url": "/api/classes/warlock"
        },
        {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        }
    ]
}

export const classDetailData = {
    "_id": "5ecc9ace0b1bb138c5431c0a",
    "index": "barbarian",
    "name": "Barbarian",
    "hit_die": 12,
    "proficiency_choices": [
        {
            "choose": 2,
            "type": "proficiencies",
            "from": [
                {
                    "url": "/api/proficiencies/skill-animal-handling",
                    "name": "Skill: Animal Handling"
                },
                {
                    "url": "/api/proficiencies/skill-athletics",
                    "name": "Skill: Athletics"
                },
                {
                    "url": "/api/proficiencies/skill-intimidation",
                    "name": "Skill: Intimidation"
                },
                {
                    "url": "/api/proficiencies/skill-nature",
                    "name": "Skill: Nature"
                },
                {
                    "url": "/api/proficiencies/skill-perception",
                    "name": "Skill: Perception"
                },
                {
                    "url": "/api/proficiencies/skill-survival",
                    "name": "Skill: Survival"
                }
            ]
        }
    ],
    "proficiencies": [
        {
            "name": "Light armor",
            "url": "/api/proficiencies/light-armor"
        },
        {
            "name": "Medium armor",
            "url": "/api/proficiencies/medium-armor"
        },
        {
            "name": "Shields",
            "url": "/api/proficiencies/shields"
        },
        {
            "name": "Simple weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "name": "Martial weapons",
            "url": "/api/proficiencies/martial-weapons"
        }
    ],
    "saving_throws": [
        {
            "name": "STR",
            "url": "/api/ability-scores/str"
        },
        {
            "name": "CON",
            "url": "/api/ability-scores/con"
        }
    ],
    "starting_equipment": {
        "url": "/api/starting-equipment/1",
        "class": "Barbarian"
    },
    "class_levels": {
        "url": "/api/classes/barbarian/levels",
        "class": "Barbarian"
    },
    "subclasses": [
        {
            "url": "/api/subclasses/berserker",
            "name": "Berserker"
        }
    ],
    "url": "/api/classes/barbarian"
}

