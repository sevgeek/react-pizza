export default {
	pizzaTypes: [
		{
			title: "Все",
			value: "all",
			emoji: "em-pizza"
		},
		{
			title: "Мясные",
			value: "meaty",
			emoji: "em-cut_of_meat"
		},
		{
			title: "Сырные",
			value: "chesee",
			emoji: "em-cheese_wedge"
		},
		{
			title: "Острые",
			value: "spicy",
			emoji: "em-hot_pepper"
		},

	],
	pizzas: {
		meaty: [
			{
				id: 1,
				type: 'meaty',
				config: {
					size: 'small',
					dough: 'standart',
				},
				img: 'https://cdn.dodostatic.net/static/Img/Products/b34fe0f729174354b87251de9214e461_292x292.jpeg',
				title: 'Карбонара',
				content: ['бекон', 'сыры чеддер и пармезан', 'моцарелла', 'томаты черри', 'красный лук', 'чеснок', 'сливочный соус', 'итальянские травы'],
				defaultPrice: 395,
				price: 395
			},
			{
				id: 2,
				type: 'meaty',
				config: {
					size: 'small',
					dough: 'standart',
				},
				img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dd59dcd5-cbf7-44e9-a5bd-1654ef06e6a3.jpg',
				title: 'Ветчина и сыр',
				content: ['ветчина', 'увеличенная порция моцареллы', 'сливочный соус'],
				defaultPrice: 295,
				price: 295
			},
			{
				id: 3,
				type: 'meaty',
				config: {
					size: 'small',
					dough: 'standart',
				},
				img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dcc14f3c-0bcd-4e22-9c94-d694750a790b.jpg',
				title: 'Кисло-сладкий цыпленок',
				content: ['цыпленок', 'томатный соус', 'моцарелла', 'кисло-сладкий соус'],
				defaultPrice: 295,
				price: 295
			},
		],
		chesee: [
			{
				id: 1,
				type: 'chesee',
				config: {
					size: 'small',
					dough: 'standart',
				},
				img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/c2da53ec-00e2-4446-a4e6-74b83ed0b357.jpg',
				title: 'Сырная',
				content: ['увеличенная порция моцареллы', 'томатный соус'],
				defaultPrice: 245,
				price: 245
			},
			{
				id: 2,
				type: 'chesee',
				config: {
					size: 'small',
					dough: 'standart',
				},
				img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/baf084f4-fc94-443c-a646-fdeff9f301a6.jpg',
				title: 'Четыре сыра',
				content: ['увеличенная порция моцареллы', 'смесь сыров чеддер и пармезан', 'сыр блю чиз', 'сливочный соус'],
				defaultPrice: 445,
				price: 445
			},
			{
				id: 3,
				type: 'chesee',
				config: {
					size: 'small',
					dough: 'standart',
				},
				img: 'https://cdn.dodostatic.net/static/Img/Products/ce8362cdf445460685ddad21118db566_292x292.jpeg',
				title: 'Маргарита',
				content: ['увеличенная порция моцареллы', 'томаты', 'итальянские травы', 'томатный соус'],
				defaultPrice: 445,
				price: 445
			},
		],
		spicy: [
			{
				id: 1,
				type: 'spicy',
				config: {
					size: 'small',
					dough: 'standart',
				},
				img: 'https://cdn.dodostatic.net/static/Img/Products/ce8362cdf445460685ddad21118db566_292x292.jpeg',
				title: 'Мексиканская',
				content: ['томатный соус', 'сладкий перец', 'красный лук', 'моцарелла', 'острый перец халапеньо', 'томаты', 'соус сальса', 'острый цыпленок'],
				defaultPrice: 445,
				price: 445
			},
			{
				id: 2,
				type: 'spicy',
				config: {
					size: 'small',
					dough: 'standart',
				},
				img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dcc14f3c-0bcd-4e22-9c94-d694750a790b.jpg',
				title: 'Кисло-сладкий цыпленок',
				content: ['острый цыпленок', 'томатный соус', 'моцарелла', 'кисло-сладкий соус'],
				defaultPrice: 295,
				price: 295
			},
			{
				id: 3,
				type: 'spicy',
				config: {
					size: 'small',
					dough: 'standart',
				},
				img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/4df905b0-0a43-4e95-a096-8e470918a267.jpg',
				title: 'Пепперони',
				content: ['пикантная пепперони', 'увеличенная порция моцареллы', 'томатный соус'],
				defaultPrice: 395,
				price: 395
			}
		]
	},
	selectedPizzaType: undefined,
	cart: []
}