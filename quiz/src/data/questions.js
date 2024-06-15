const data = [
    {
        id: 1,
        options: ["Rathian", "Seregios", "Nargacuga", "Legiana"],
        answer: 1,
    },

    {
        id: 2,
        options: ["Rathian", "Pink Rathian", "Gold Rathian", "Dreadking Rathalos"],
        answer: 2,
    },

    {
        id: 3,
        options: ["Asthalos", "Dreadqueen Rathian", "Gold Rathian", "Rathian"],
        answer: 3,
    },

    {
        id: 4,
        options: ["Rathalos", "Apex Rathian", "Pink Rathian", "Dreadqueen Rathian"],
        answer: 4,
    },
    {
        id: 5,
        options: ["Apex Rathian", "Flame Rathalos", "Dreadking Rathalos", "Pink Rathian"],
        answer: 1,
    },

    {
        id: 6,
        options: ["Asthalos", "Rathalos", "Rathian", "Seregios"],
        answer: 2,
    },

    {
        id: 7,
        options: ["Dreadking Rathalos", "Destruction Rathalos", "Azure Rathalos", "Flame Rathalos"],
        answer: 3,
    },

    {
        id: 8,
        options: ["Flame Rathalos", "Asthalos", "Seregios", "Silver Rathalos"],
        answer: 4,
    },
    {
        id: 9,
        options: ["Dreadking Rathalos", "Silver Rathalos", "Rathian", "Flame Rathalos"],
        answer: 1,
    },

    {
        id: 10,
        options: ["Dreadqueen Rathian", "Apex Rathalos", "Seregios", "Asthalos"],
        answer: 2,
    },

    {
        id: 11,
        options: ["Chameleos", "Qurupeco", "Khezu", "Kirin"],
        answer: 3,
    },

    {
        id: 12,
        options: ["Plesioth", "Green Plesioth", "Gypceros", "Red Khezu"],
        answer: 4,
    },
    {
        id: 13,
        options: ["Basarios", "Monoblos", "Shara Ishvalda", "Diablos"],
        answer: 1,
    },

    {
        id: 14,
        options: ["Basarios", "Ruby Basarios", "Diablos", "Zorah Magdaros"],
        answer: 2,
    },

    {
        id: 15,
        options: ["Diablos", "Monoblos", "Gravios", "Glavenus"],
        answer: 3,
    },

    {
        id: 16,
        options: ["Akantor", "Black Diablos", "Basarios", "Black Gravios"],
        answer: 4,
    },
    {
        id: 17,
        options: ["Monoblos", "Diablos", "Black Diablos", "Deviljho"],
        answer: 1,
    },

    {
        id: 18,
        options: ["Basarios", "White Monoblos", "Plesioth", "Diablos"],
        answer: 2,
    },

    {
        id: 19,
        options: ["Monoblos", "Basarios", "Diablos", "Barroth"],
        answer: 3,
    },

    {
        id: 20,
        options: ["Bloodbath Diablos", "Gilded Diablos", "Apex Diablos", "Black Diablos"],
        answer: 4,
    },

    {
        id: 21,
        options: ["Bloodbath Diablos", "Monoblos", "Tetsucabra", "Black Diablos"],
        answer: 1,
    },

    {
        id: 22,
        options: ["Monoblos", "Apex Diablos", "Black Diablos", , "Magnamalo"],
        answer: 2,
    },

    {
        id: 23,
        options: ["Kulu-Ya-Ku", "Qurupeco", "Yian Kut-Ku", "Yian Garuga"],
        answer: 3,
    },

    {
        id: 24,
        options: ["Qurupeco", "Tzitzi-Ya-Ku", "Scarred Yian Garuga", "Blue Yian Kut-Ku"],
        answer: 4,
    },
    {
        id: 25,
        options: ["Gypceros", "Yian Garuga", "Gajau", "Iodrome"],
        answer: 1,
    },

    {
        id: 26,
        options: ["Kulu-Ya-Ku", "Purple Gypceros", "Scarred Yian Garuga", "Yian Kut-Ku"],
        answer: 2,
    },

    {
        id: 27,
        options: ["Jyuratodus", "Lavasioth", "Plesioth", "Beotodos"],
        answer: 3,
    },

    {
        id: 28,
        options: ["Lavasioth", "Jyuratodus", "Great Jagras", "Green Plesioth"],
        answer: 4,
    },
    {
        id: 29,
        options: ["Kirin", "Kelbi", "Oroshi Kirin", "Namielle"],
        answer: 1,
    },

    {
        id: 30,
        options: ["Kirin", "Oroshi Kirin", "Velkhana", "Black Kirin"],
        answer: 2,
    },

    {
        id: 31,
        options: ["Kushala Daora", "Basarios", "Lao-Shan Lung", "Fatalis"],
        answer: 3,
    },

    {
        id: 32,
        options: ["Dalamadur", "Dire Miralis", "Rusted Kushala Daora", "Ashen Lao-Shan Lung"],
        answer: 4,
    },
    {
        id: 33,
        options: ["Fatalis", "Crimson Fatalis", "Ashen Lao-Shan Lung", "Alatreon"],
        answer: 1,
    },

    {
        id: 34,
        options: ["Lao-Shan Lung", "Crimson Fatalis", "Dire Miralis", "Garuba Daora"],
        answer: 2,
    },

    {
        id: 35,
        options: ["Dire Miralis", "Oltura", "Old Fatalis", "Crimson Fatalis"],
        answer: 3,
    },

    {
        id: 36,
        options: ["Jaggi", "Wroggi", "Jaggia", "Velocidrome"],
        answer: 4,
    },
    {
        id: 37,
        options: ["Gendrome", "Anjanath", "Jagras", "Iodrome"],
        answer: 1,
    },

    {
        id: 38,
        options: ["Shamos", "Iodrome", "Jagras", "Girros"],
        answer: 2,
    },

    {
        id: 39,
        options: ["Raphinos", "Noios", "Cephadrome", "Remobra"],
        answer: 3,
    },

    {
        id: 40,
        options: ["Yian Kut-Ku", "Kulu-Ya-Ku", "Qurupeco", "Yian Garuga"],
        answer: 4,
    },
    {
        id: 41,
        options: ["Deadeye Yian Garuga", "Nightshade Paolumu", "Black Yian Kut-Ku", "Qurupeco"],
        answer: 1,
    },

    {
        id: 42,
        options: ["Yian Kut-Ku", "Scarred Yian Garuga", "Yian Garuga", "Blue Yian Kut-Ku"],
        answer: 2,
    },

    {
        id: 43,
        options: ["Hermitaur", "Vespoid", "Daimyo Hermitaur", "Anteka"],
        answer: 3,
    },

    {
        id: 44,
        options: ["Nerscylla", "Hornetaur", "Great Thunderbug", "Plum Daimyo Hermitaur"],
        answer: 4,
    },
    {
        id: 45,
        options: ["Stonefist Hermitaur", "Nerscylla", "Rachnoid", "Ceanataur"],
        answer: 1,
    },

    {
        id: 46,
        options: ["Hornetaur", "Shogun Ceanataur", "Vespoid", "Monoblos"],
        answer: 2,
    },

    {
        id: 47,
        options: ["teste1", "teste2", "Terra Shogun Ceanataur", "teste3"],
        answer: 3,
    },

    {
        id: 48,
        options: ["Rachnoid", "Hermitaur", "Nerscylla", "Rustrazor Ceanataur"],
        answer: 4,
    },
    {
        id: 49,
        options: ["Congalala", "Blangonga", "Maccao", "Rajang"],
        answer: 1,
    },

    {
        id: 50,
        options: ["Rajang", "Emerald Congalala", "Blango", "Blangonga"],
        answer: 2,
    },
    /*
        {
            id: 51,
            options: ["Blangonga", "Rajang", "Congalala", "Conga"],
            answer: 3,
        },
    
        {
            id: 52,
            options: ["Copper Blangonga","1","2","3"],
            answer: 4,
        },
        {
            id: 53,
            options: ["Conga", "Rajang", "Congalala", "Blangonga"],
            answer: 1,
        },
    
        {
            id: 54,
            options: ["Blangonga", "Rajang", "Furious Rajang", "Enma Rajang"],
            answer: 2,
        },
    
        {
            id: 55,
            options: ["Kushala Daora", "Lao-Shan Lung", "Rusted Kushala Daora", "Garuba Daora"],
            answer: 3,
        },
    
        {
            id: 56,
            options: ["Lao-Shan Lung", "Kushala Daora", "Garuba Daora", "Rusted Kushala Daora"],
            answer: 4,
        },
        {
            id: 57,
            options: ["Risen Kushala Daora","1","2","3"],
            answer: 1,
        },
    
        {
            id: 58,
            options: ["Gore Magala", "Khezu", "Chameleos", "Cephadrome"],
            answer: 2,
        },
    
        {
            id: 59,
            options: ["1","2""Risen Chameleos","4"],
            answer: 3,
        },
    
        {
            id: 60,
            options: ["Oltura", "Teostra", "Lunastra", "Versa Pietru"],
            answer: 4,
        },
        {
            id: 61,
            options: ["Oltura", "Versa Pietru", "Teostra", "Lunastra"],
            answer: 1,
        },
    
        {
            id: 62,
            options: ["1","Risen Teostra","3","4"],
            answer: 2,
        },
    
        {
            id: 63,
            options: ["Dalamadur", "Amatsu", "Shen Gaoren", "Kushala Daora"],
            answer: 3,
        },
    
        {
            id: 64,
            options: [Oltura", "Yama Tsukami", "Shagaru Magala", "Dire Miralis"],
            answer: 4,
        },
        {
            id: 65,
            options: ["Bulldrome", "Bullfango", "Musgoin", "Banbaro"],
            answer: 1,
        },
    
        {
            id: 66,
            options: ["King Shakalaka"],
            answer: 2,
        },
    
        {
            id: 67,
            options: ["Tigrex", "Nargacuga", "Tigerstripe Zamtrios", "Zamtrios"],
            answer: 3,
        },
    
        {
            id: 68,
            options: ["Flame Tigrex", "Brute Tigrex", "Tigerstripe Zamtrios", "Grimclaw Tigrex"],
            answer: 4,
        },
        {
            id: 69,
            options: ["Sand Barioth", "Steel Uragaan", "Molten Tigrex", "Tigerstripe Zamtrios"],
            answer: 1,
        },
    
        {
            id: 70,
            options: ["Lucent Nargacuga", "Grimclaw Tigrex", "Brute Tigrex", "Molten Tigrex"],
            answer: 2,
        },
    
        {
            id: 71,
            options: ["Monoblos", "Apceros", "Akantor", "Basarios"],
            answer: 3,
        },
    
        {
            id: 72,
            options: ["Giadrome"],
            answer: 4,
        },
        {
            id: 73,
            options: ["Doom Estrellian", "Destruction Rathalos", "Hypnocatrice", "Estrellian"],
            answer: 1,
        },
    
        {
            id: 74,
            options: ["Plesioth", "Lavasioth", "Green Plesioth", "Jyuratodus"],
            answer: 2,
        },
    
        {
            id: 75,
            options: ["Nargaruga", "Yian Garuga", "Nargacuga", "Yian Naruga"],
            answer: 3,
        },
    
        {
            id: 76,
            options: ["Green Nargacuga", "Lucent Nargacuga", "Nargaruga", "Sand Barioth"],
            answer: 4,
        },
        {
            id: 77,
            options: ["Green Nargacuga", "Lucent Nargacuga", "Nargacuga", "Fiercewater Nargacuga"],
            answer: 1,
        },
    
        {
            id: 78,
            options: ["Grimclaw Tigrex", "Green Nargacuga", "Silverwind Nargacuga", "Lucent Nargacuga"],
            answer: 2,
        },
    
        {
            id: 79,
            options: ["Ukanlos"],
            answer: 3,
        },
    
        {
            id: 80,
            options: ["Vespoid Queen"],
            answer: 4,
        },
        {
            id: 81,
            options: ["Yian Garuga", "Yian Kut-Ku", "Qurupeco", "Gargwa"],
            answer: 1,
        },
    
        {
            id: 82,
            options: ["Plesioth", "Yian Garuga", "Yian Kut-Ku", "Crimson Qurupeco"],
            answer: 2,
        },
    
        {
            id: 83,
            options: ["Chameleos", "Khezu", "Gigginox", "Cephalos"],
            answer: 3,
        },
    
        {
            id: 84,
            options: ["Noios", "Chameleos", "Khezu", "Baleful Gigginox"],
            answer: 4,
        },
        {
            id: 85,
            options: ["Barioth", "Sand Barioth", "Frozen Barioth", "Shrieking Legiana"],
            answer: 1,
        },
    
        {
            id: 86,
            options: ["Sand Barioth", "Frostfang Barioth", "Sandstone Basarios", "Frozen Barioth"],
            answer: 2,
        },
    
        {
            id: 87,
            options: ["Frozen Barioth", "Frostfang Barioth", "Sand Barioth", "Barioth"],
            answer: 3,
        },
    
        {
            id: 88,
            options: ["Savage Deviljho", "Deviljho", "Aberrant Deviljho", "Demonic Seregios"],
            answer: 4,
        },
        {
            id: 89,
            options: ["Ebony Odogaron", "Savage Deviljho", "Raging Brachydios", "Aberrant Deviljho"],
            answer: 1,
        },
    
        {
            id: 90,
            options: ["Diablos", "Jyuratodus", "Basarios", "Barroth"],
            answer: 2,
        },
    
        {
            id: 91,
            options: ["Beotodos", "Barioth", "Oroshi Kirin", "Jade Barroth"],
            answer: 3,
        },
    
        {
            id: 92,
            options: ["Uragaan", "Dodogama", "Duramboros", "Radobaan"],
            answer: 4,
        },
        {
            id: 93,
            options: ["Radobaan", "Basarios", "Steel Uragaan", "Lavasioth"],
            answer: 1,
        },
    
        {
            id: 94,
            options: ["Uragaan", "Radobaan", "Crystalbeard Uragaan", "Seething Bazelgeuse"],
            answer: 2,
        },
    
        {
            id: 95,
            options: ["Lagiacrus", "Lavasioth", "Beotodos", "Jyuratodus"],
            answer: 3,
        },
    
        {
            id: 96,
            options: ["Plesioth", "Ivory Lagiacrus", "Lavasioth", "Beotodos"],
            answer: 4,
        },
        {
            id: 97,
            options: ["Gajau", "Plesioth", "Jyuratodus", "Abyssal Lagiacrus"],
            answer: 1,
        },
    
        {
            id: 98,
            options: ["Royal Ludroth", "Yian Garuga", "Volvidon", "Qurupeco"],
            answer: 2,
        },
    
        {
            id: 99,
            options: ["Yian Kut-Ku", "Purple Ludroth", "Crimson Qurupeco", "Viper Tobi-Kadachi"],
            answer: 3,
        },
    
        {
            id: 100,
            options: ["Great Jagras", "Gobul", "Khezu", "Chameleos"],
            answer: 4,
        },
    
        {
            id: 101,
            options: [],
            answer: 1,
        },
    
        {
            id: 102,
            options: [],
            answer: 2,
        },
    
        {
            id: 103,
            options: [],
            answer: 3,
        },
    
        {
            id: 104,
            options: [],
            answer: 4,
        },
        {
            id: 105,
            options: [],
            answer: 1,
        },
    
        {
            id: 106,
            options: [],
            answer: 2,
        },
    
        {
            id: 107,
            options: [],
            answer: 3,
        },
    
        {
            id: 108,
            options: [],
            answer: 4,
        },
        {
            id: 109,
            options: [],
            answer: 1,
        },
    
        {
            id: 110,
            options: [],
            answer: 2,
        },
    
        {
            id: 111,
            options: [],
            answer: 3,
        },
    
        {
            id: 112,
            options: [],
            answer: 4,
        },
        {
            id: 113,
            options: [],
            answer: 1,
        },
    
        {
            id: 114,
            options: [],
            answer: 2,
        },
    
        {
            id: 115,
            options: [],
            answer: 3,
        },
    
        {
            id: 116,
            options: [],
            answer: 4,
        },
        {
            id: 117,
            options: [],
            answer: 1,
        },
    
        {
            id: 118,
            options: [],
            answer: 2,
        },
    
        {
            id: 119,
            options: [],
            answer: 3,
        },
    
        {
            id: 120,
            options: [],
            answer: 4,
        },
        {
            id: 121,
            options: [],
            answer: 1,
        },
    
        {
            id: 122,
            options: [],
            answer: 2,
        },
    
        {
            id: 123,
            options: [],
            answer: 3,
        },
    
        {
            id: 124,
            options: [],
            answer: 4,
        },
        {
            id: 125,
            options: [],
            answer: 1,
        },
    
        {
            id: 126,
            options: [],
            answer: 2,
        },
    
        {
            id: 127,
            options: [],
            answer: 3,
        },
    
        {
            id: 128,
            options: [],
            answer: 4,
        },
        {
            id: 129,
            options: [],
            answer: 1,
        },
    
        {
            id: 130,
            options: [],
            answer: 2,
        },
    
        {
            id: 131,
            options: [],
            answer: 3,
        },
    
        {
            id: 132,
            options: [],
            answer: 4,
        },
        {
            id: 133,
            options: [],
            answer: 1,
        },
    
        {
            id: 134,
            options: [],
            answer: 2,
        },
    
        {
            id: 135,
            options: [],
            answer: 3,
        },
    
        {
            id: 136,
            options: [],
            answer: 4,
        },
        {
            id: 137,
            options: [],
            answer: 1,
        },
    
        {
            id: 138,
            options: [],
            answer: 2,
        },
    
        {
            id: 139,
            options: [],
            answer: 3,
        },
    
        {
            id: 140,
            options: [],
            answer: 4,
        },
        {
            id: 141,
            options: [],
            answer: 1,
        },
    
        {
            id: 142,
            options: [],
            answer: 2,
        },
    
        {
            id: 143,
            options: [],
            answer: 3,
        },
    
        {
            id: 144,
            options: [],
            answer: 4,
        },
        {
            id: 145,
            options: [],
            answer: 1,
        },
    
        {
            id: 146,
            options: [],
            answer: 2,
        },
    
        {
            id: 147,
            options: [],
            answer: 3,
        },
    
        {
            id: 148,
            options: [],
            answer: 4,
        },
        {
            id: 149,
            options: [],
            answer: 1,
        },
    
        {
            id: 150,
            options: [],
            answer: 2,
        },
    
        {
            id: 151,
            options: [],
            answer: 3,
        },
    
        {
            id: 152,
            options: [],
            answer: 4,
        },
        {
            id: 153,
            options: [],
            answer: 1,
        },
    
        {
            id: 154,
            options: [],
            answer: 2,
        },
    
        {
            id: 155,
            options: [],
            answer: 3,
        },
    
        {
            id: 156,
            options: [],
            answer: 4,
        },
        {
            id: 157,
            options: [],
            answer: 1,
        },
    
        {
            id: 158,
            options: [],
            answer: 2,
        },
    
        {
            id: 159,
            options: [],
            answer: 3,
        },
    
        {
            id: 160,
            options: [],
            answer: 4,
        },
        {
            id: 161,
            options: [],
            answer: 1,
        },
    
        {
            id: 162,
            options: [],
            answer: 2,
        },
    
        {
            id: 163,
            options: [],
            answer: 3,
        },
    
        {
            id: 164,
            options: [],
            answer: 4,
        },
        {
            id: 165,
            options: [],
            answer: 1,
        },
    
        {
            id: 166,
            options: [],
            answer: 2,
        },
    
        {
            id: 167,
            options: [],
            answer: 3,
        },
    
        {
            id: 168,
            options: [],
            answer: 4,
        },
        {
            id: 169,
            options: [],
            answer: 1,
        },
    
        {
            id: 170,
            options: [],
            answer: 2,
        },
    
        {
            id: 171,
            options: [],
            answer: 3,
        },
    
        {
            id: 172,
            options: [],
            answer: 4,
        },
        {
            id: 173,
            options: [],
            answer: 1,
        },
    
        {
            id: 174,
            options: [],
            answer: 2,
        },
    
        {
            id: 175,
            options: [],
            answer: 3,
        },
    
        {
            id: 176,
            options: [],
            answer: 4,
        },
        {
            id: 177,
            options: [],
            answer: 1,
        },
    
        {
            id: 178,
            options: [],
            answer: 2,
        },
    
        {
            id: 179,
            options: [],
            answer: 3,
        },
    
        {
            id: 180,
            options: [],
            answer: 4,
        },
        {
            id: 181,
            options: [],
            answer: 1,
        },
    
        {
            id: 182,
            options: [],
            answer: 2,
        },
    
        {
            id: 183,
            options: [],
            answer: 3,
        },
    
        {
            id: 184,
            options: [],
            answer: 4,
        },
        {
            id: 185,
            options: [],
            answer: 1,
        },
    
        {
            id: 186,
            options: [],
            answer: 2,
        },
    
        {
            id: 187,
            options: [],
            answer: 3,
        },
    
        {
            id: 188,
            options: [],
            answer: 4,
        },
        {
            id: 189,
            options: [],
            answer: 1,
        },
    
        {
            id: 190,
            options: [],
            answer: 2,
        },
    
        {
            id: 191,
            options: [],
            answer: 3,
        },
    
        {
            id: 192,
            options: [],
            answer: 4,
        },
        {
            id: 193,
            options: [],
            answer: 1,
        },
    
        {
            id: 194,
            options: [],
            answer: 2,
        },
    
        {
            id: 195,
            options: [],
            answer: 3,
        },
    
        {
            id: 196,
            options: [],
            answer: 4,
        },
        {
            id: 197,
            options: [],
            answer: 1,
        },
    
        {
            id: 198,
            options: [],
            answer: 2,
        },
    
        {
            id: 199,
            options: [],
            answer: 3,
        },
    
        {
            id: 200,
            options: [],
            answer: 4,
        },
    
        {
            id: 201,
            options: [],
            answer: 1,
        },
    
        {
            id: 202,
            options: [],
            answer: 2,
        },
    
        {
            id: 203,
            options: [],
            answer: 3,
        },
    
        {
            id: 204,
            options: [],
            answer: 4,
        },
        {
            id: 205,
            options: [],
            answer: 1,
        },
    
        {
            id: 206,
            options: [],
            answer: 2,
        },
    
        {
            id: 207,
            options: [],
            answer: 3,
        },
    
        {
            id: 208,
            options: [],
            answer: 4,
        },
        {
            id: 209,
            options: [],
            answer: 1,
        },
    
        {
            id: 210,
            options: [],
            answer: 2,
        },
    
        {
            id: 211,
            options: [],
            answer: 3,
        },
    
        {
            id: 212,
            options: [],
            answer: 4,
        },
        {
            id: 213,
            options: [],
            answer: 1,
        },
    
        {
            id: 214,
            options: [],
            answer: 2,
        },
    
        {
            id: 215,
            options: [],
            answer: 3,
        },
    
        {
            id: 216,
            options: [],
            answer: 4,
        },
        {
            id: 217,
            options: [],
            answer: 1,
        },
    
        {
            id: 218,
            options: [],
            answer: 2,
        },
    
        {
            id: 219,
            options: [],
            answer: 3,
        },
    
        {
            id: 220,
            options: [],
            answer: 4,
        },
        {
            id: 221,
            options: [],
            answer: 1,
        },
    
        {
            id: 222,
            options: [],
            answer: 2,
        },
    
        {
            id: 223,
            options: [],
            answer: 3,
        },
    
        {
            id: 224,
            options: [],
            answer: 4,
        },
        {
            id: 225,
            options: [],
            answer: 1,
        },
    
        {
            id: 226,
            options: [],
            answer: 2,
        },
    
        {
            id: 227,
            options: [],
            answer: 3,
        },
    
        {
            id: 228,
            options: [],
            answer: 4,
        },
        {
            id: 229,
            options: [],
            answer: 1,
        },
    
        {
            id: 230,
            options: [],
            answer: 2,
        },*/
];

export default data;