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
			ua: "ABCDEFGHIJKLMNOPRSTUVYZ",
			un: "ÇĞİÖŞÜ",
			l: "abcçdefgğhıijklmnoöprsştuüvyz",
			la: "abcdefghijklmnoprstuvyz",
			ln: "çğıöşü",
			uc: "BCÇDFGĞHJKLMNPRSŞTVYZ",
			uca: "BCDFGHJKLMNPRSTVYZ",
			ucn: "ÇĞŞ",
			lc: "bcçdfgğhjklmnprsştvyz",
			lca: "bcdfghjklmnprstvyz",
			lcn: "çğş",
			uv: "AEIİOÖUÜ",
			uva: "AEIOU",
			uvn: "İÖÜ",
			lv: "aeıioöuü",
			lva: "aeiou",
			lvn: "ıöü"
		},
		eo: {
			u: "ABCĈDEFGĜHĤIJĴKLMNOPRSŜTUŬVZ",
			ua: "ABCDEFGHIJKLMNOPRSTUVZ",
			un: "ĈĜĤĴŜŬ",
			l: "abcĉdefgĝhĥijĵklmnoprsŝtuŭvz",
			la: "abcdefghijklmnoprstuvz",
			ln: "ĉĝĥĵŝŭ",
			uc: "BCĈDFGĜHĤJĴKLMNPRSŜTVZ",
			uca: "BCDFGHJKLMNPRSTVZ",
			ucn: "ĈĜĤĴŜ",
			lc: "bcĉdfgĝhĥjĵklmnprsŝtvz",
			lca: "bcdfghjklmnprstvz",
			lcn: "ĉĝĥĵŝ",
			uv: "AEIOUŬ",
			uva: "AEIOU",
			uvn: "Ŭ",
			lv: "aeiouŭ",
			lva: "aeiou",
			lvn: "ŭ"
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
