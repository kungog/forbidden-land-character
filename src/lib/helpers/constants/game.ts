export const PLAYER_REACH = {
	sv: [
		{ id: 'arm', text: 'Armslängd' },
		{ id: 'close', text: 'Nära' },
		{ id: 'short', text: 'Kort' },
		{ id: 'long', text: 'Långt' }
	],
	en: [
		{ id: 'arm', text: "Arm's length" },
		{ id: 'close', text: 'Close' },
		{ id: 'short', text: 'Short' },
		{ id: 'long', text: 'Long' }
	]
};

export const DICE_TYPES = [
	{ id: 4, text: 'T4' },
	{ id: 6, text: 'T6' },
	{ id: 8, text: 'T8' },
	{ id: 10, text: 'T10' },
	{ id: 12, text: 'T12' },
	{ id: 16, text: 'T16' },
	{ id: 18, text: 'T18' }
];

export const QUALITIES = {
	sv: [
		{ id: 1, text: 'Lätt' },
		{ id: 2, text: 'Spets' },
		{ id: 3, text: 'Egg' },
		{ id: 4, text: 'Parerande' },
		{ id: 5, text: 'Tung' },
		{ id: 6, text: 'Krok' },
		{ id: 7, text: 'Trubbig' },
		{ id: 8, text: 'Lätt vapen' },
		{ id: 9, text: 'Ladda är lång handling' }
	],
	en: [
		{ id: 1, text: 'Light' },
		{ id: 2, text: 'Lace' },
		{ id: 3, text: 'Edge' },
		{ id: 4, text: 'Parrying' },
		{ id: 5, text: 'Heavy' },
		{ id: 6, text: 'Hook' },
		{ id: 7, text: 'Obtuse' },
		{ id: 8, text: 'Light weapon' },
		{ id: 9, text: 'Loading is a long process' }
	]
};

export const CLOSE_WEAPONS_LABELS = {
	sv: [
		{ id: 1, text: 'Kniv' },
		{ id: 2, text: 'Dolk' },
		{ id: 3, text: 'Huggare' },
		{ id: 4, text: 'Kortsvärd' },
		{ id: 5, text: 'Bredsvärd' },
		{ id: 6, text: 'Slagsvärd' },
		{ id: 7, text: 'Tvåhandssvärd' },
		{ id: 8, text: 'Kroksabel' },
		{ id: 9, text: 'Handyxa' },
		{ id: 10, text: 'Stridsyxa' },
		{ id: 11, text: 'Tvåhandsyxa' },
		{ id: 12, text: 'Stridsklubba' },
		{ id: 13, text: 'Morgonstjärna' },
		{ id: 14, text: 'Stridshammare' },
		{ id: 15, text: 'Stridsgissel' },
		{ id: 16, text: 'Träklubba' },
		{ id: 17, text: 'Stor träklubba' },
		{ id: 18, text: 'Tung stridshammare' },
		{ id: 19, text: 'Trästav' },
		{ id: 20, text: 'Kortspjut' },
		{ id: 21, text: 'Långspjut' },
		{ id: 22, text: 'Pik' },
		{ id: 23, text: 'Hillebard' },
		{ id: 24, text: 'Treudd' }
	],
	en: [
		{ id: 1, text: 'Kniv' },
		{ id: 2, text: 'Dolk' },
		{ id: 3, text: 'Huggare' },
		{ id: 4, text: 'Kortsvärd' },
		{ id: 5, text: 'Bredsvärd' },
		{ id: 6, text: 'Slagsvärd' },
		{ id: 7, text: 'Tvåhandssvärd' },
		{ id: 8, text: 'Kroksabel' },
		{ id: 9, text: 'Handyxa' },
		{ id: 10, text: 'Stridsyxa' },
		{ id: 11, text: 'Tvåhandsyxa' },
		{ id: 12, text: 'Stridsklubba' },
		{ id: 13, text: 'Morgonstjärna' },
		{ id: 14, text: 'Stridshammare' },
		{ id: 15, text: 'Stridsgissel' },
		{ id: 16, text: 'Träklubba' },
		{ id: 17, text: 'Stor träklubba' },
		{ id: 18, text: 'Tung stridshammare' },
		{ id: 19, text: 'Trästav' },
		{ id: 20, text: 'Kortspjut' },
		{ id: 21, text: 'Långspjut' },
		{ id: 22, text: 'Pik' },
		{ id: 23, text: 'Hillebard' },
		{ id: 24, text: 'Treudd' }
	]
};

export const CLOSE_WEAPONS = [
	{ id: 1, hands: '1H', bonus: 1, damage: 1, range: 'arm', additionals: [1, 2] },
	{ id: 2, hands: '1H', bonus: 1, damage: 1, range: 'arm', additionals: [1, 2, 3] },
	{ id: 3, hands: '1H', bonus: 1, damage: 2, range: 'arm', additionals: [2, 3] },
	{ id: 4, hands: '1H', bonus: 2, damage: 1, range: 'arm', additionals: [2, 3, 4] },
	{ id: 5, hands: '1H', bonus: 2, damage: 2, range: 'arm', additionals: [2, 3, 4] },
	{ id: 6, hands: '1H', bonus: 2, damage: 2, range: 'arm', additionals: [2, 3, 4, 5] },
	{ id: 7, hands: '2H', bonus: 2, damage: 3, range: 'arm', additionals: [2, 3, 4, 5] },
	{ id: 8, hands: '1H', bonus: 1, damage: 2, range: 'arm', additionals: [2, 3, 4, 6] },
	{ id: 9, hands: '1H', bonus: 2, damage: 2, range: 'arm', additionals: [3, 6] },
	{ id: 10, hands: '1H', bonus: 2, damage: 2, range: 'arm', additionals: [5, 3, 6] },
	{ id: 11, hands: '2H', bonus: 2, damage: 3, range: 'arm', additionals: [5, 3, 6] },
	{ id: 12, hands: '1H', bonus: 2, damage: 1, range: 'arm', additionals: [7] },
	{ id: 13, hands: '1H', bonus: 2, damage: 2, range: 'arm', additionals: [7] },
	{ id: 14, hands: '1H', bonus: 2, damage: 2, range: 'arm', additionals: [7, 6] },
	{ id: 15, hands: '1H', bonus: 1, damage: 2, range: 'close', additionals: [7] },
	{ id: 16, hands: '1H', bonus: 1, damage: 1, range: 'arm', additionals: [7] },
	{ id: 17, hands: '2H', bonus: 1, damage: 2, range: 'arm', additionals: [5, 7] },
	{ id: 18, hands: '2H', bonus: 2, damage: 3, range: 'arm', additionals: [5, 7, 6] },
	{ id: 19, hands: '2H', bonus: 1, damage: 1, range: 'close', additionals: [7, 6, 4] },
	{ id: 20, hands: '1H', bonus: 1, damage: 1, range: 'close', additionals: [2] },
	{ id: 21, hands: '2H', bonus: 2, damage: 1, range: 'close', additionals: [2] },
	{ id: 22, hands: '2H', bonus: 2, damage: 2, range: 'close', additionals: [5, 2] },
	{ id: 23, hands: '2H', bonus: 2, damage: 2, range: 'close', additionals: [5, 2, 3, 6] },
	{ id: 24, hands: '2H', bonus: 1, damage: 2, range: 'close', additionals: [2, 6] }
];

export const RANGE_WEAPONS_LABELS = {
	sv: [
		{ id: 1, text: 'Kastad sten' },
		{ id: 2, text: 'Kastkniv' },
		{ id: 3, text: 'Kastyxa' },
		{ id: 4, text: 'Kastspjut' },
		{ id: 5, text: 'Slunga' },
		{ id: 6, text: 'Kortbåge' },
		{ id: 7, text: 'Långbåge' },
		{ id: 8, text: 'Lätt armborst' },
		{ id: 9, text: 'Tungt armborst' }
	],
	en: [
		{ id: 1, text: 'Kastad sten' },
		{ id: 2, text: 'Kastkniv' },
		{ id: 3, text: 'Kastyxa' },
		{ id: 4, text: 'Kastspjut' },
		{ id: 5, text: 'Slunga' },
		{ id: 6, text: 'Kortbåge' },
		{ id: 7, text: 'Långbåge' },
		{ id: 8, text: 'Lätt armborst' },
		{ id: 9, text: 'Tungt armborst' }
	]
};

export const RANGE_WEAPONS = [
	{ id: 1, hands: '-', bonus: 0, damage: 1, range: 'short', additionals: [] },
	{ id: 2, hands: '1H', bonus: 1, damage: 1, range: 'short', additionals: [8] },
	{ id: 3, hands: '1H', bonus: 1, damage: 2, range: 'short', additionals: [] },
	{ id: 4, hands: '1H', bonus: 2, damage: 1, range: 'short', additionals: [] },
	{ id: 5, hands: '1H', bonus: 1, damage: 1, range: 'short', additionals: [8] },
	{ id: 6, hands: '2H', bonus: 2, damage: 1, range: 'short', additionals: [8] },
	{ id: 7, hands: '2H', bonus: 2, damage: 1, range: 'long', additionals: [] },
	{ id: 8, hands: '2H', bonus: 2, damage: 2, range: 'long', additionals: [9] },
	{ id: 9, hands: '2H', bonus: 1, damage: 3, range: 'long', additionals: [5, 9] }
];
