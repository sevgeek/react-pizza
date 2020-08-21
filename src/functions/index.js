/**
 * @name transfromPizzaContentToText
 * @description Перевод первого символа строки в верхний регистр
 * @param {String} string Описание состава пиццы
 * @returns {String} Единое описание состава пиццы
 */
export default function transfromPizzaContentToText(string) {
	return string[0].toUpperCase() + string.slice(1)
}