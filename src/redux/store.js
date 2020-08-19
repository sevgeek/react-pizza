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
	pizzas: [
		{
			type: 'meaty',
			config: {
				size: 'small',
				dough: 'standart',
			},
			img: 'https://cdn.dodostatic.net/static/Img/Products/1e414bf6663645f592d166329e1fec83_292x292.jpeg',
			title: 'Карбонара',
			content: ['бекон', 'сыры чеддер и пармезан', 'моцарелла', 'томаты черри', 'красный лук', 'чеснок', 'сливочный соус', 'итальянские травы'],
			price: 395
		},
		{
			type: 'meaty',
			config: {
				size: 'small',
				dough: 'standart',
			},
			img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dd59dcd5-cbf7-44e9-a5bd-1654ef06e6a3.jpg',
			title: 'Ветчина и сыр',
			content: ['ветчина', 'увеличенная порция моцареллы', 'сливочный соус'],
			price: 295
		},
		{
			type: 'meaty',
			config: {
				size: 'small',
				dough: 'standart',
			},
			img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dcc14f3c-0bcd-4e22-9c94-d694750a790b.jpg',
			title: 'Кисло-сладкий цыпленок',
			content: ['цыпленок', 'томатный соус', 'моцарелла', 'кисло-сладкий соус'],
			price: 295
		},
		{
			type: 'chesee',
			config: {
				size: 'small',
				dough: 'standart',
			},
			img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/c2da53ec-00e2-4446-a4e6-74b83ed0b357.jpg',
			title: 'Сырная',
			content: ['увеличенная порция моцареллы', 'томатный соус'],
			price: 245
		},
		{
			type: 'chesee',
			config: {
				size: 'small',
				dough: 'standart',
			},
			img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/baf084f4-fc94-443c-a646-fdeff9f301a6.jpg',
			title: 'Четыре сыра',
			content: ['увеличенная порция моцареллы', 'смесь сыров чеддер и пармезан', 'сыр блю чиз', 'сливочный соус'],
			price: 445
		},
		{
			type: 'chesee',
			config: {
				size: 'small',
				dough: 'standart',
			},
			img: 'https://cdn.dodostatic.net/static/Img/Products/ce8362cdf445460685ddad21118db566_292x292.jpeg',
			title: 'Маргарита',
			content: ['увеличенная порция моцареллы', 'томаты', 'итальянские травы', 'томатный соус'],
			price: 445
		},
		{
			type: 'spicy',
			config: {
				size: 'small',
				dough: 'standart',
			},
			img: 'https://cdn.dodostatic.net/static/Img/Products/ce8362cdf445460685ddad21118db566_292x292.jpeg',
			title: 'Мексиканская',
			content: ['томатный соус', 'сладкий перец', 'красный лук', 'моцарелла', 'острый перец халапеньо', 'томаты', 'соус сальса', 'острый цыпленок'],
			price: 445
		},
		{
			type: 'spicy',
			config: {
				size: 'small',
				dough: 'standart',
			},
			img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dcc14f3c-0bcd-4e22-9c94-d694750a790b.jpg',
			title: 'Кисло-сладкий цыпленок',
			content: ['острый цыпленок', 'томатный соус', 'моцарелла', 'кисло-сладкий соус'],
			price: 295
		},
		{
			type: 'spicy',
			config: {
				size: 'small',
				dough: 'standart',
			},
			img: 'https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/4df905b0-0a43-4e95-a096-8e470918a267.jpg',
			title: 'Пепперони',
			content: ['пикантная пепперони', 'увеличенная порция моцареллы', 'томатный соус'],
			price: 395
		}
	],
	selectedPizzaType: undefined,
}