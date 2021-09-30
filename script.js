//  Task1 ================

let task1Inp = document.getElementsByClassName('task1');

for (let i = 0; i < task1Inp.length; i++) {
	task1Inp[i].addEventListener('click', function () {
		if (task1Inp[i].classList.contains('lock')) {

		} else {
			alert(task1Inp[i].value);
			task1Inp[i].classList.add('lock');
		}
	})
}
//  Task2 ================
let task2Inp = document.getElementsByClassName('task2');

for (let i = 0; i < task2Inp.length; i++) {

	task2Inp[i].addEventListener('focusout', function () {

		if (!task2Inp[i].classList.contains('res')) {
			task2Inp[i].insertAdjacentHTML(
				'afterend',
				`<p class = "task2p">Вы ввели: ${task2Inp[i].value} </p>`
			)
			task2Inp[i].classList.add('res')
		} else {
			document.getElementsByClassName('task2p')[i].remove();
			task2Inp[i].insertAdjacentHTML(
				'afterend',
				`<p class = "task2p">Вы ввели: ${task2Inp[i].value} </p>`
			)
			task2Inp[i].classList.add('res')
		}
	})


}

//  Task3 ================


document.querySelector('#sum-form').addEventListener('submit', function (e) {
	e.preventDefault()
	let formInp = document.querySelectorAll('#sum-form>input');
	let res = 0;
	for (let i = 0; i < formInp.length; i++) {
		res += Number(formInp[i].value)
	}
	let p = document.querySelector('.res111');
	p.innerHTML = `Результат: ${res}`
})

//  Task4 ================

document.querySelector('#select').addEventListener('input', function () {
	let res = document.querySelector('#select').value;
	let option = document.querySelectorAll('#select>option');
	let inp = document.querySelector('#input');
	inp.value = option[res - 1].textContent.trim();
})
