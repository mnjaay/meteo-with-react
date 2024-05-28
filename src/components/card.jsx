import React from 'react'

function Card({ Ville, temperature, temp_min, temp_max, humidity, speed }) {
	return (
		<div>
			<div class="max-w-md p-8 mx-auto mt-16 rounded-lg bg-slate-100 text-gray-800 border shadow-md">
				<div class="">
					<div class="flex flex-col items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-24 h-24 p-2 text-yellow-500 fill-current">
							<path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
							<rect width="32" height="48" x="240" y="16"></rect>
							<rect width="32" height="48" x="240" y="448"></rect>
							<rect width="48" height="32" x="448" y="240"></rect>
							<rect width="48" height="32" x="16" y="240"></rect>
							<rect width="32" height="45.255" x="400" y="393.373" transform="rotate(-45 416 416)"></rect>
							<rect width="32.001" height="45.255" x="80" y="73.373" transform="rotate(-45 96 96)"></rect>
							<rect width="45.255" height="32" x="73.373" y="400" transform="rotate(-45.001 96.002 416.003)"></rect>
							<rect width="45.255" height="32.001" x="393.373" y="80" transform="rotate(-45 416 96)"></rect>
						</svg>
						<h1 class="text-xl font-semibold">{Ville}</h1>
					</div>
					<span class="font-bold text-8xl items-center flex justify-center">{temperature}°C</span>
				</div>
				<div class="flex justify-between mt-8 space-x-4 text-gray-600">
					<div class="flex flex-col items-center space-y-1">
						<span class="uppercase">Temp max</span>
						<svg width="25" height="25" fill="#757575" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.625 20.25H5.437c-1.517 0-2.823-.402-3.777-1.161C.574 18.224 0 16.94 0 15.375c0-2.698 1.969-4.246 4.104-4.723a.75.75 0 0 0 .569-.58c.36-1.72 1.146-3.195 2.305-4.313A7.199 7.199 0 0 1 12 3.75c1.664 0 3.199.548 4.438 1.584A7.323 7.323 0 0 1 18.41 7.96a.75.75 0 0 0 .533.43c1.266.263 2.394.812 3.243 1.587C23.372 11.057 24 12.536 24 14.25c0 1.688-.674 3.229-1.898 4.34-1.179 1.07-2.769 1.66-4.477 1.66Z"></path>
						</svg>
						<span>{temp_max}°C</span>
					</div>
					<div class="flex flex-col items-center space-y-1">
						<span class="uppercase">Temp Min</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-8 h-8 fill-current">
							<path d="M382.76,432H136c-30.732,0-61.371-12.725-84.061-34.912-23.221-22.707-36.009-52.35-36.009-83.469A109.4,109.4,0,0,1,49.136,235.2a122.281,122.281,0,0,1,62.794-32.707V200c0-79.4,64.6-144,144-144s144,64.6,144,144v1.453c55.716,7.939,96,53.729,96,112.166,0,31.27-11.375,60.72-32.031,82.927A109.747,109.747,0,0,1,382.76,432ZM255.93,88a112.127,112.127,0,0,0-112,112v31.405l-14.864,1.059c-45.5,3.239-81.136,38.887-81.136,81.155C47.93,359.635,89.084,400,136,400H382.76c45.515,0,81.17-37.943,81.17-86.381,0-46.566-33.731-80.791-80.2-81.379l-15.8-.2V200A112.127,112.127,0,0,0,255.93,88Z"></path>
						</svg>
						<span>{temp_min}°C </span>
					</div>
					<div class="flex flex-col items-center space-y-1">
						<span class="uppercase">Humidité</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-8 h-8 fill-current">
							<path d="M399.667,264.875v-3.813c0-79.4-64.6-144-144-144-2.2,0-4.391.057-6.569.156A116.689,116.689,0,1,0,112.315,247.444c-.422,4.484-.648,9.025-.648,13.618v3.813A116.633,116.633,0,0,0,132.287,496.3H379.046a116.633,116.633,0,0,0,20.621-231.427ZM48.75,132.688a84.677,84.677,0,0,1,168.705-10.47,144.606,144.606,0,0,0-98.59,93.876A84.807,84.807,0,0,1,48.75,132.688ZM379.046,464.3H132.287a84.619,84.619,0,0,1-3.9-169.148l15.277-.69v-33.4a112,112,0,1,1,224,0v33.4l15.277.69a84.619,84.619,0,0,1-3.9,169.148Z"></path>
						</svg>
						<span>{humidity}% </span>
					</div>
					<div class="flex flex-col items-center space-y-1">
						<span class="uppercase">Vitesse</span>
						<svg width="25" height="25" fill="#757575" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.954 5.545a11.25 11.25 0 0 0-16.377 15.41l.009.01.047.048c.034.04.074.084.12.13a1.93 1.93 0 0 0 2.83-.019 7.365 7.365 0 0 1 10.84 0 1.931 1.931 0 0 0 2.843.003l.15-.164.009-.01a11.247 11.247 0 0 0-.469-15.41l-.002.002Zm-8.704.457a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM6 14.252H4.5a.75.75 0 1 1 0-1.5H6a.75.75 0 1 1 0 1.5Zm2.287-4.463a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 1 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06Zm6.999 1.083-2.227 3.54a1.455 1.455 0 0 1-.328.327 1.412 1.412 0 0 1-1.64-2.297l3.539-2.226a.48.48 0 0 1 .548 0 .472.472 0 0 1 .108.656Zm1.487-1.083a.75.75 0 0 1-1.06-1.06l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06Zm2.727 4.463H18a.75.75 0 1 1 0-1.5h1.5a.75.75 0 0 1 0 1.5Z"></path>
						</svg>
						<span> {speed}m/s</span>
					</div>

				</div>
			</div>

		</div>
	)
}

export default Card