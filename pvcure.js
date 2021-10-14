var L_DIGITS = "0123456789"
var L_EN_U = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var L_EN_L = "abcdefghijklmnopqrstuvwxyz"
var L_EN_UC = "BCDFGHJKLMNPQRSTVWXYZ"
var L_EN_LC = "bcdfghjklmnpqrstvwxyz"
var L_EN_UV = "AEIOU"
var L_EN_LV = "aeiou"
var L_TR_U = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ"
var L_TR_L = "abcçdefgğhıijklmnoöprsştuüvyz"
var L_TR_UC = "BCÇDFGĞHJKLMNPRSŞTVYZ"
var L_TR_LC = "bcçdfgğhjklmnprsştvyz"
var L_TR_UV = "AEIİOÖUÜ"
var L_TR_LV = "aeıioöuü"
var L_EO_U = "ABCĈDEFGĜHĤIJĴKLMNOPRSŜTUŬVZ"
var L_EO_L = "abcĉdefgĝhĥijĵklmnoprsŝtuŭvz"
var L_EO_UC = "BCĈDFGĜHĤJĴKLMNPRSŜTVZ"
var L_EO_LC = "bcĉdfgĝhĥjĵklmnprsŝtvz"
var L_EO_UV = "AEIOUŬ"
var L_EO_LV = "aeiouŭ"
var L_BG_U = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ"
var L_BG_L = "абвгдежзийклмнопрстуфхцчшщъьюя"
var L_BG_UC = "БВГДЖЗЙКЛМНПРСТФХЦЧШЩЬ"
var L_BG_LC = "бвгджзйклмнпрстфхцчшщь"
var L_BG_UV = "АЕИОУЪЮЯ"
var L_BG_LV = "аеиоуъю"

var pvcure = (function () {

	function add(arr, index, shift) {
		let newIndex = index + shift
		if (newIndex >= arr.length) {
			while (newIndex >= arr.length) {
				newIndex = newIndex - arr.length
			}
		} else if (newIndex < 0) {
			while (newIndex < 0) {
				newIndex = newIndex + arr.length
			}
		}
		return arr[newIndex]
	}

	function convert(c, shift, arr) {
		for (let i = 0; i < arr.length; i++) {
			let l = arr[i]
			let index = l.indexOf(c)
			if (index > -1) {
				return add(l, index, shift)
			}
		}
		return c
	}

	return function (input, shift, arr) {
		let output = []
		for (let i = 0; i < input.length; i++) {
			output.push(convert(input.charAt(i), shift, arr))
		}
		return output.join("")
	}

})()
