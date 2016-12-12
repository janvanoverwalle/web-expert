// oef01CarFactory.js
(function () {
	'use strict';

	// Definitie van de oef01CarFactory
	angular.module('apph05')
		.factory('oef01CarFactory', oef01CarFactory);

	// Implementatie van oef01CarFactory
	function oef01CarFactory() {
		// 1. Definieer (leeg) factory-object
		var factory = {};

		// 2. Definieer data voor deze factory (later zullen deze gegevens uit een database komen)
		var cars = [
			{ id: '1', description: 'A 180', price: 24.242, type: 'A' },
			{ id: '2', description: 'A 180 CDI BlueEFFICIENCY', price: 26.015, type: 'A' },
			{ id: '3', description: 'B 200 CDI BlueEFFICIENCY', price: 30.129, type: 'B' },
			{ id: '4', description: 'C 250 CGI BlueEFFICIENCY', price: 40.414, type: 'C' },
			{ id: '5', description: 'C 300 CDI 4Matic BlueEFFICIENCY', price: 48.642, type: 'C' },
			{ id: '6', description: 'C 350 CGI 4Matic BlueEFFICIENCY', price: 50.941, type: 'C' },
			{ id: '7', description: 'CL 500 CDI 4Matic BlueEFFICIENCY', price: 129.954, type: 'CL' },
			{ id: '8', description: 'CL 600', price: 170.489, type: 'CL' },
		];

		// 3. Defineer een API met methods voor deze factory
		factory.getCars = function () {
			return cars;
		}

		factory.getCarByIndex = function (index) {
			return cars[index];
		}
		
		factory.getCar = function (id) {
			for (car in cars) {
				if (car.id == id) {
					return car;
				}
			}
			return null;
		}

		factory.addCar = function (newCar) {
			// De nieuwe car heeft nog geen ID. Nu Quick&Dirty het hoogste huidige ID
			// uit de array opzoeken en deze toekennen aan newCar
			var maxId = 0;
			for (car in cars) {
				if (car.id > maxId) {
					maxId = car.id;
				}
			}
			newCar.id = maxId + 1;
			cars.push(newCar);
		}

		// 4. Tot slot: retourneer factory-object
		return factory;
	}
})();
