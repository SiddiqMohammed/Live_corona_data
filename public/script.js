const counters = document.querySelectorAll('.counter');
const speed = 80; // The lower the slower
const api_url = "https://corona.lmao.ninja/all"

var myVar = setInterval(myTimer, 1000);

async function getData(){
	const response = await fetch(api_url)
	const data = await response.json();
	const { cases, deaths, recovered} = data;

	

	document.getElementById('cas').textContent = cases.toLocaleString();
	document.getElementById('ded').textContent = deaths.toLocaleString();
	document.getElementById('rec').textContent = recovered.toLocaleString();
}

function myTimer() {
	getData();
  } 





// var x = 0;
// var ID_of_element = "";

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		if(x == 0){
// 			ID_of_element = cas;
// 		}
// 		else if(x == 1){
// 			ID_of_element = ded;
// 		}
// 		else{
// 			ID_of_element = rec;
// 		}
// 		const target = +counter.getElementById(ID_of_element);
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = Math.ceil(count + inc);
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 		x++
// 		if(x == 3){
// 			x = 0;
// 		}
// 	};

// 	updateCount();
// });
