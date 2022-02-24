// fetch('./data.json')
// .then(function(res){
// 	return res.json()
// })
// .then(function)

//fetch data from server or file//
//then assign data to UI i.e our html //
//add an event that will handle the change of data//

let data;
let currentTime = 'weekly'

// fetch data//
fetch('data.json')
	.then(response => response.json())
	.then((newdata) => {
		data = newdata
		changer()
	})

// const title = document.querySelector('.title')
// const timeframe = document.querySelector('.timeframe')
// const previous = document.querySelector('.previous')
const container = document.getElementById("container")

function changer (){
	// title.innerHTML = data[1].title;
	// timeframe.innerHTML = data[0].timeframes.weekly.current + "hrs";
	// previous.innerHTML = "previous - " + data[0].timeframes.weekly.previous + "hrs";


for (let i = 0; i < data.length; i++) {
	let div = document.createElement('div')
	div.setAttribute("class", "card " + data[i].title.toLowerCase().replace(' ',''))
	div.innerHTML = `<div class="card-bottom">
	<div class="title-div">
	  <p class="title">${data[i].title}</p>
	</div>
	<div class="current-div">
	<h3 class="timeframe">${data[i].timeframes[currentTime].current}hrs</h3>
	<p class="previous">${prev(currentTime)} - ${data[i].timeframes[currentTime].previous}hrs</p>
	</div>
  </div>`

  container.appendChild(div)
}

}
const calenda = document.querySelectorAll('.calenda')
console.log(calenda)

calenda.forEach((item)=> {
	item.addEventListener('click', ()=>{
		currentTime = item.innerText.toLowerCase()
		const cards = document.querySelectorAll('.card');
		const main = document.getElementById('container');

		cards.forEach(card => {
			main.removeChild(card)
		})

		changer()
		calenda.forEach(val => {
			val.classList.remove('active')
		})
		item.classList.add("active")
	})
})

function prev(ct){
	switch (ct){
		case 'daily':
			return "Yesterday";
			break;
		case 'weekly':
			return "Last week";
			break;
		case 'monthly':
			return "Last month";
			break;
		default:
			return "error"
	}
}











// let arr = ["a", "b", "c"]
// for (let i = 0; i < arr.length; i++){
// 	console.log(arr[i])
// }
// arr.forEach(i=> console.log(arr(i))




