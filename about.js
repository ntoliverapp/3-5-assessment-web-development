console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert('Your form has been submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const complimentList = document.querySelector('ul')
const catImage = document.getElementsByTagName('img')
//const catCompliments = document.querySelectorAll('li')
const catComplimentList = Array.from(document.querySelectorAll('li'))
//catCompliments = complimentList.children
//complimentList.appendChild(catCompliments)
//console.log(complimentList[i])

function picCompliment(event) {
    event.preventDefault();
	
	for( let i = 0; i > catComplimentList.length; i++) {
		console.log(catComplimentList[i])
		alert(catComplimentList)
	}
    // document.getElementById('image');
	// document.getElementById('ul')
	// alert(document.getElementById(li))
}
console.log(catComplimentList[i])
//document.querySelector('img').addEventListener('mouseover', picCompliment)
catImage.addEventListener('mouseover', picCompliment)