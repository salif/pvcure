window.onload = function () {
	let encodeEl = document.getElementById("encode")
	let clearEl = document.getElementById("clear")
	let commentsEl = document.getElementById("comments")
	let inputEl = document.getElementById("input")
	let nEl = document.getElementById("n")
	let shiftIsNEl = document.getElementById("shiftIsN")
	let shiftIs1ToNEl = document.getElementById("shiftIs1ToN")
	let slDigitsEl = document.getElementById("slDigits")
	let slEnEl = document.getElementById("slEn")
	let slEnVcEl = document.getElementById("slEnVc")
	let slEnVEl = document.getElementById("slEnV")
	let slTrEl = document.getElementById("slTr")
	let slTrVcEl = document.getElementById("slTrVc")
	let slTrVEl = document.getElementById("slTrV")
	let slTrAEl = document.getElementById("slTrA")
	let slTrVcaEl = document.getElementById("slTrVca")
	let slEoEl = document.getElementById("slEo")
	let slEoVcEl = document.getElementById("slEoVc")
	let slEoVEl = document.getElementById("slEoV")
	let slEoAEl = document.getElementById("slEoA")
	let slEoVcaEl = document.getElementById("slEoVca")
	let slBgEl = document.getElementById("slBg")
	let slBgVcEl = document.getElementById("slBgVc")
	let slBgVEl = document.getElementById("slBgV")
	let slCustomEl = document.getElementById("slCustom")
	let sAlphabetEl = document.getElementById("sAlphabet")
	let alphabetEl = document.getElementById("alphabet")
	let outputEl = document.getElementById("output")
	let commentsDivEl = document.getElementById("commentsDiv")
	let pvcureSriptEl = document.getElementById("pvcureSript")
	let pvcureScriptSrcEl = document.getElementById("pvcureSriptSrc")

	function addRow(shift, output) {
		let row = outputEl.insertRow()
		let cell1 = row.insertCell(0)
		let cell2 = row.insertCell(1)
		cell1.textContent = shift
		cell2.style.whiteSpace = "pre-wrap"
		cell2.style.fontFamily = "monospace"
		cell2.style.overflowX = "auto"
		cell2.textContent = output
	}

	function clear() {
		while (outputEl.rows.length > 1) {
			outputEl.deleteRow(1)
		}
	}

	function checkVisible(elm) {
		let rect = elm.getBoundingClientRect()
		let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
		return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
	}

	function scrollToOutput() {
		if (!checkVisible(outputEl)) {
			outputEl.scrollIntoView(true)
		}
	}

	encodeEl.onclick = function () {
		clear()
		let input = inputEl.value
		if (input.length == 0) {
			inputEl.focus()
			return
		}
		let n = parseInt(nEl.value)
		if (isNaN(n)) {
			console.error("input is not a number")
			nEl.focus()
			return
		}
		let alphabets = []
		if (slDigitsEl.checked) {
			alphabets.push(pvcure.alphabets.digits.a)
		}
		if (slEnEl.checked) {
			alphabets.push(pvcure.alphabets.en.u, pvcure.alphabets.en.l)
		}
		if (slEnVcEl.checked) {
			alphabets.push(pvcure.alphabets.en.uc, pvcure.alphabets.en.lc,
				pvcure.alphabets.en.uv, pvcure.alphabets.en.lv)
		}
		if (slEnVEl.checked) {
			alphabets.push(pvcure.alphabets.en.uv, pvcure.alphabets.en.lv)
		}
		if (slTrEl.checked) {
			alphabets.push(pvcure.alphabets.tr.u, pvcure.alphabets.tr.l)
		}
		if (slTrVcEl.checked) {
			alphabets.push(pvcure.alphabets.tr.uc, pvcure.alphabets.tr.lc,
				pvcure.alphabets.tr.uv, pvcure.alphabets.tr.lv)
		}
		if (slTrVEl.checked) {
			alphabets.push(pvcure.alphabets.tr.uv, pvcure.alphabets.tr.lv)
		}
		if (slTrAEl.checked) {
			alphabets.push(pvcure.alphabets.tr.ua, pvcure.alphabets.tr.un,
				pvcure.alphabets.tr.la, pvcure.alphabets.tr.ln)
		}
		if (slTrVcaEl.checked) {
			alphabets.push(pvcure.alphabets.tr.uca, pvcure.alphabets.tr.ucn,
				pvcure.alphabets.tr.lca, pvcure.alphabets.tr.lcn,
				pvcure.alphabets.tr.uva, pvcure.alphabets.tr.uvn,
				pvcure.alphabets.tr.lva, pvcure.alphabets.tr.lvn)
		}
		if (slEoEl.checked) {
			alphabets.push(pvcure.alphabets.eo.u, pvcure.alphabets.eo.l)
		}
		if (slEoVcEl.checked) {
			alphabets.push(pvcure.alphabets.eo.uc, pvcure.alphabets.eo.lc,
				pvcure.alphabets.eo.uv, pvcure.alphabets.eo.lv)
		}
		if (slEoVEl.checked) {
			alphabets.push(pvcure.alphabets.eo.uv, pvcure.alphabets.eo.lv)
		}
		if (slEoAEl.checked) {
			alphabets.push(pvcure.alphabets.eo.ua, pvcure.alphabets.eo.un,
				pvcure.alphabets.eo.la, pvcure.alphabets.eo.ln)
		}
		if (slEoVcaEl.checked) {
			alphabets.push(pvcure.alphabets.eo.uca, pvcure.alphabets.eo.ucn,
				pvcure.alphabets.eo.lca, pvcure.alphabets.eo.lcn,
				pvcure.alphabets.eo.uva, pvcure.alphabets.eo.uvn,
				pvcure.alphabets.eo.lva, pvcure.alphabets.eo.lvn)
		}
		if (slBgEl.checked) {
			alphabets.push(pvcure.alphabets.bg.u, pvcure.alphabets.bg.l)
		}
		if (slBgVcEl.checked) {
			alphabets.push(pvcure.alphabets.bg.uc, pvcure.alphabets.bg.lc,
				pvcure.alphabets.bg.uv, pvcure.alphabets.bg.lv)
		}
		if (slBgVEl.checked) {
			alphabets.push(pvcure.alphabets.bg.uv, pvcure.alphabets.bg.lv)
		}
		if (slCustomEl.checked) {
			if (alphabetEl.value.length == 0) {
				console.error("alphabet is empty")
				alphabetEl.focus()
				return
			} else {
				alphabets.push(alphabetEl.value)
			}
		}
		if (shiftIsNEl.checked) {
			let output = pvcure.pvcure(input, n, alphabets)
			addRow(n, output)
			scrollToOutput()
		} else if (shiftIs1ToNEl.checked && n > 0) {
			for (let i = 1; i <= n; i++) {
				let output = pvcure.pvcure(input, i, alphabets)
				addRow(i, output)
			}
			scrollToOutput()
		} else if (shiftIs1ToNEl.checked && n < 0) {
			for (let i = -1; i >= n; i--) {
				let output = pvcure.pvcure(input, i, alphabets)
				addRow(i, output)
			}
			scrollToOutput()
		} else if (n === 0) {
			nEl.value = ""
			nEl.focus()
			return
		} else {
			console.error("not checked")
			return
		}
	}

	clearEl.onclick = function () {
		inputEl.value = ""
		clear()
	}

	commentsEl.onclick = function () {
		commentsEl.remove()
		commentsDivEl.classList.remove("d-none")
		let s = document.createElement('script')
		s.setAttribute('src', 'https://pvcure-salif-eu.disqus.com/embed.js')
		s.setAttribute('data-timestamp', +new Date())
		document.head.appendChild(s)
		if (!checkVisible(commentsDivEl)) {
			commentsDivEl.scrollIntoView(true)
		}
	}

	slCustomEl.onchange = function () {
		if (slCustomEl.checked) {
			sAlphabetEl.classList.remove("d-none")
		} else {
			sAlphabetEl.classList.add("d-none")
		}
	}

	pvcureScriptSrcEl.textContent = pvcureSriptEl.src
}
