const counters = document.querySelectorAll('.counter');
const speed = 80; // The lower the slower
// const api_url = "https://pythondb-bfd79.firebaseio.com/"

var i = 0;
var something = 0;
text_list = ["Mild", "Serious", "Recovered", "Deaths", "Active", "Closed", "Total"];
var element_List = ["mild", "srs", "rec", "ded", "act", "clo", "cas"];
var value_List = [];
var counter = 0;
var percentRec = 0;
var counter2 = 0;
var percentRec2 = 0;


var firebaseConfig = { 
	apiKey: "AIzaSyAaYscy0rKtegr8YXF5Yg55CxBWV3fhukM",
    authDomain: "pythondb-bfd79.firebaseapp.com",
    databaseURL: "https://pythondb-bfd79.firebaseio.com",
    projectId: "pythondb-bfd79",
    storageBucket: "pythondb-bfd79.appspot.com",
    messagingSenderId: "1062085483064",
    appId: "1:1062085483064:web:73beca85cbdc18b9c564cd",
    measurementId: "G-8895CT8MHZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function goldenRetriever(i){
	

	// var database = firebase.database();

	db.collection('data').get().then(snapshot => {
		snapshot.docs.forEach(doc => {
			console.log(doc.data());
			renderVal(doc);
		});
	});

	function renderVal(doc){
		postElement = document.getElementById(element_List[0]);
		var rekt = doc.data().Mild;
		value_List[0] = rekt;
		postElement.textContent = rekt.toLocaleString();

		postElement = document.getElementById(element_List[1]);
		rekt = doc.data().Serious;
		value_List[1] = rekt;
		postElement.textContent = rekt.toLocaleString();

		postElement = document.getElementById(element_List[2]);
		rekt = doc.data().Recovered;
		value_List[2] = rekt;
		postElement.textContent = rekt.toLocaleString();

		postElement = document.getElementById(element_List[3]);
		rekt = doc.data().Deaths;
		value_List[3] = rekt;
		postElement.textContent = rekt.toLocaleString();

		postElement = document.getElementById(element_List[4]);
		rekt = doc.data().Active;
		value_List[4] = rekt;
		postElement.textContent = rekt.toLocaleString();

		postElement = document.getElementById(element_List[5]);
		rekt = doc.data().Closed;
		value_List[5] = rekt;
		postElement.textContent = rekt.toLocaleString();

		postElement = document.getElementById(element_List[6]);
		rekt = doc.data().Total;
		value_List[6] = rekt;
		postElement.textContent = rekt.toLocaleString();
		SecondTest();
	}


}

window.onload = function Start(){
	TestFunc();
}

// console.log("something:", something);

function SecondTest(){
	// console.log(i);
	// console.log(value_List);
	chartFunction(value_List);
	move();
	move2();
}
function TestFunc(){
	// for (i = 0; i < text_list.length; i++) {

		goldenRetriever();

	// }
}


// function myTimer() {
// 	getData();
// 	if( flag == 1){
// 		chartFunction();
	
// 	}

// } 
// console.log(element_List);


function chartFunction(value_List){
	if(value_List[0] > 0){
		new Chart(document.getElementById("myChart"), {
			type: 'pie',
			data: {
			labels: ['Mild Conditions', 'Critical Conditions', 'Recovered/Discharged', 'Deaths'],
			datasets: [{
				label: "Population (millions)",
				backgroundColor: [
					'rgba(110, 140, 206, 0.7)',
					'rgba(200, 50, 97, 0.7)',
					'rgba(34, 144, 76, 0.7)',
					'rgba(255, 0, 0, 0.7)',
				],
				data: [value_List[0], value_List[1], value_List[2], value_List[3]]
			}]
			},
			options: {
			title: {
				display: true,
				text: 'Visualised Data of Total Cases',
				fontSize: 25,
				fontFamily: 'Roboto'
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 10,
					bottom: 15
				}
			},
			legend: {
				position: 'bottom'
			}
			}
		});
	}
	// else {
	// 	// setTimeout(chartFunction(value_List), 60000);
	// }
}



function move() {
	percentRec = 100*(value_List[2]/value_List[5]);
	if(percentRec > 0){
		// console.log(percentRec.toFixed())
		if (counter == 0) {
			counter = 1;
			
			var elemded = document.getElementById("left-align1");
			var elem = document.getElementById("changer");
			var elemRec = document.getElementById("right-align1");
			var width = 30;
			
			var id = setInterval(frame, 30);
			function frame() {
				if (width >= percentRec) {
				clearInterval(id);
				counter = 0;
				} else {
				width++;
				elem.style.width = width + "%";
				elemded.innerHTML = "Recovered: " + width  + "%";
				var antiWidth = 100 - width;
				elemRec.innerHTML = "Deaths: " + antiWidth + "%";

				}
			}
		}
	}else {
		// setTimeout(move(), 5000);
	}
} 


function move2() {
	percentRec2 = 100*(value_List[0]/value_List[4]);
	if(percentRec2 > 0){
		// console.log(percentRec.toFixed())
		if (counter2 == 0) {
			counter2 = 1;
			
			var elemded2 = document.getElementById("left-align2");
			var elem2 = document.getElementById("changer2");
			var elemRec2 = document.getElementById("right-align2");
			var width2 = 10;
			
			var id2 = setInterval(frame2, 30);
			function frame2() {
				if (width2 >= percentRec2) {
				clearInterval(id2);
				counter2 = 0;
				} else {
				width2++;
				elem2.style.width = width2 + "%";
				elemded2.innerHTML = "Mild: " + width2  + "%";
				var antiWidth2 = 100 - width2;
				elemRec2.innerHTML = "Critical:  " + antiWidth2 + "%";

				}
			}
		}
	}else {
		// setTimeout(move(), 5000);
	}
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


// var bar = new ProgressBar.Line(container, {
// 	strokeWidth: 4,
// 	easing: 'easeInOut',
// 	duration: 1400,
// 	color: '#FFEA82',
// 	trailColor: '#eee',
// 	trailWidth: 1,
// 	svgStyle: {width: '100%', height: '100%'},
// 	text: {
// 	  style: {
// 		// Text color.
// 		// Default: same as stroke color (options.color)
// 		color: '#222',
// 		position: 'absolute',
// 		right: '0',
// 		top: '30px',
// 		padding: 0,
// 		margin: 0,
// 		transform: null
// 	  },
// 	  autoStyleContainer: false
// 	},
// 	from: {color: '#FFEA82'},
// 	to: {color: '#ED6A5A'},
// 	step: (state, bar) => {
// 	  bar.setText(Math.round(bar.value() * 100) + ' %');
// 	}
//   });
  
//   bar.animate(0.2);  // Number from 0.0 to 1.0