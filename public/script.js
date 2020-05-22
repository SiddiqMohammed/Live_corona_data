const counters = document.querySelectorAll('.counter');
const speed = 80; // The lower the slower

var i = 0;
var something = 0;
// text_list = ["Mild", "Serious", "Recovered", "Deaths", "Active", "Closed", "Total"];
// var element_List = ["mild", "srs", "rec", "ded", "act", "clo", "cas"];
var element_List = ["act", "clo", "ded", "mild", "rec", "srs", "cas"];
var value_List = [];
var counter = 0;
var percentRec = 0;
var counter2 = 0;
var percentRec2 = 0;
var rekt = 0;
var test_array = [];
var test_array2 = [];
var afg = "Afghanistan";



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function goldenRetriever() {



	db.collection("data").doc("mm")
		.onSnapshot(function (doc) {
			test_array = doc.data();
			fora(test_array);
		});


	function fora(test_array) {
		var result = [];

		for (var i in test_array)
			result.push([i, test_array[i]]);


		var myObj = {};
		for (var i = 0; i < result.length; i++) {
			var a = result[i][0];
			var b = result[i][1];
			myObj[a] = b;
		}

		showMap(myObj);
	}



	db.collection("data").doc("lgtq2xqlRv40YirvlJ8n")
		.onSnapshot(function (doca) {
			test_array2 = doca.data();
			renderVal(test_array2);
		});

	function renderVal(test_array2) {
		var result2 = [];

		for (var i in test_array2)
			result2.push([test_array2[i]]);


		for (var i = 0; i < element_List.length; i++) {

			postElement = document.getElementById(element_List[i]);
			console.log(value_List[i])
			rekt = result2[i];
			value_List[i] = rekt;
			postElement.textContent = rekt.toLocaleString();
		}
		SecondTest();
	}


}

window.onload = function Start() {
	TestFunc();
}


function SecondTest() {
	chartFunction(value_List);
	move();
	move2();
}
function TestFunc() {
	goldenRetriever();
}


// function myTimer() {
// 	getData();
// 	if( flag == 1){
// 		chartFunction();

// 	}

// } 
// console.log(element_List);


function chartFunction(value_List) {
	if (value_List[0] > 0) {
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
	percentRec = 100 * (value_List[4] / value_List[1]);
	// console.log(percentRec);
	if (percentRec > 0) {
		console.log(percentRec.toFixed())
		console.log(value_List)
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
					elemded.innerHTML = "Recovered: " + width + "%";
					var antiWidth = 100 - width;
					elemRec.innerHTML = "Deaths: " + antiWidth + "%";

				}
			}
		}
	} else {
		// setTimeout(move(), 5000);
	}
}


function move2() {
	// percentRec2 = 100 * (value_List[0][1] / value_List[4][1]);
	percentRec2 = 100 * (value_List[3] / value_List[0]);
	if (percentRec2 > 0) {
		// console.log(percentRec2.toFixed())
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
					elemded2.innerHTML = "Mild: " + width2 + "%";
					var antiWidth2 = 100 - width2;
					elemRec2.innerHTML = "Critical:  " + antiWidth2 + "%";

				}
			}
		}
	} else {
		// setTimeout(move(), 5000);
	}
}


function showMap(myObj) {

	$('#world-map').vectorMap({
		map: 'world_mill_en',
		series: {
			regions: [
				{
					values: myObj,
					scale: ['#C8EEFF', '#0071A4'],
					normalizeFunction: 'polynomial'
				}

			]
		},
		onRegionTipShow: function (e, el, code) {
			el.html(el.html() + ' (Total Cases - ' + myObj[code] + ')');
		}
	});
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