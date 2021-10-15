var pvcure = {
	alphabets: {
		digits: {
			a: "0123456789"
		},
		en: {
			u: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			l: "abcdefghijklmnopqrstuvwxyz",
			uc: "BCDFGHJKLMNPQRSTVWXYZ",
			lc: "bcdfghjklmnpqrstvwxyz",
			uv: "AEIOU",
			lv: "aeiou"
		},
		tr: {
			u: "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ",
			l: "abcçdefgğhıijklmnoöprsştuüvyz",
			uc: "BCÇDFGĞHJKLMNPRSŞTVYZ",
			lc: "bcçdfgğhjklmnprsştvyz",
			uv: "AEIİOÖUÜ",
			lv: "aeıioöuü"
		},
		eo: {
			u: "ABCĈDEFGĜHĤIJĴKLMNOPRSŜTUŬVZ",
			l: "abcĉdefgĝhĥijĵklmnoprsŝtuŭvz",
			uc: "BCĈDFGĜHĤJĴKLMNPRSŜTVZ",
			lc: "bcĉdfgĝhĥjĵklmnprsŝtvz",
			uv: "AEIOUŬ",
			lv: "aeiouŭ"
		},
		bg: {
			u: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ",
			l: "абвгдежзийклмнопрстуфхцчшщъьюя",
			uc: "БВГДЖЗЙКЛМНПРСТФХЦЧШЩЬ",
			lc: "бвгджзйклмнпрстфхцчшщь",
			uv: "АЕИОУЪЮЯ",
			lv: "аеиоуъю"
		}
	},
	pvcure: (function () {

		function add(alphabet, index, shift) {
			var newIndex = index + shift
			if (newIndex >= alphabet.length) {
				while (newIndex >= alphabet.length) {
					newIndex = newIndex - alphabet.length
				}
			} else if (newIndex < 0) {
				while (newIndex < 0) {
					newIndex = newIndex + alphabet.length
				}
			}
			return alphabet[newIndex]
		}

		function convert(c, shift, alphabets) {
			for (var i = 0; i < alphabets.length; i++) {
				var alphabet = alphabets[i]
				var index = alphabet.indexOf(c)
				if (index > -1) {
					return add(alphabet, index, shift)
				}
			}
			return c
		}

		return function (input, shift, alphabets) {
			var output = []
			for (var i = 0; i < input.length; i++) {
				output.push(convert(input.charAt(i), shift, alphabets))
			}
			return output.join("")
		}

	})()
}
