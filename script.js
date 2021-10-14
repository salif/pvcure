(function () {
	let inputEl = document.getElementById("input")
	let nEl = document.getElementById("n")
	let shiftisnEl = document.getElementById("shiftisn")
	let shifti1tonEl = document.getElementById("shifti1ton")
	let slDigitsEl = document.getElementById("slDigits")
	let slEnEl = document.getElementById("slEn")
	let slEnVcEl = document.getElementById("slEnVc")
	let slBgEl = document.getElementById("slBg")
	let slBgVcEl = document.getElementById("slBgVc")
	let outputEl = document.getElementById("output")

	function addRow(shift, output) {
		let row = outputEl.insertRow()
		let cell1 = row.insertCell(0)
		let cell2 = row.insertCell(1)
		cell1.textContent = shift
		cell2.style.whiteSpace = "pre-wrap"
		cell2.style.fontFamily = "monospace"
		cell2.textContent = output
	}

	function clear() {
		while (outputEl.rows.length > 1) {
			outputEl.deleteRow(1)
		}
	}

	document.getElementById("encode").onclick = function () {
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
		let arr = []
		if (slDigitsEl.checked) {
			arr.push(L_DIGITS)
		}
		if (slEnEl.checked) {
			arr.push(L_EN_U, L_EN_L)
		}
		if (slEnVcEl.checked) {
			arr.push(L_EN_UC, L_EN_LC, L_EN_UV, L_EN_LV)
		}
		if (slBgEl.checked) {
			arr.push(L_BG_U, L_BG_L)
		}
		if (slBgVcEl.checked) {
			arr.push(L_BG_UC, L_BG_LC, L_BG_UV, L_BG_LV)
		}
		if (shiftisnEl.checked) {
			let output = pvcure(input, n, arr)
			addRow(n, output)
		} else if (shifti1tonEl.checked && n > 0) {
			for (let i = 1; i <= n; i++) {
				let output = pvcure(input, i, arr)
				addRow(i, output)
			}
		} else if (shifti1tonEl.checked && n < 0) {
			for (let i = -1; i >= n; i--) {
				let output = pvcure(input, i, arr)
				addRow(i, output)
			}
		} else if (n === 0) {
			nEl.value = ""
			nEl.focus()
			return
		} else {
			console.error("not checked")
			return
		}
	}

	document.getElementById("clear").onclick = function () {
		inputEl.value = ""
		clear()
	}
})()
