'use strict';

class Element {
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(){
		this.first = null;
		this.size = 0;
	}
	push(element){
		let newElement = element;
		let checkElement = this.first;

		if (!checkElement){
			this.first = newElement;
			this.size++;
			return newElement;
		}

		while (checkElement.next){
			checkElement = checkElement.next;
		}

		checkElement.next = newElement;
		this.size++;

		return newElement;
	}

	pop(){
		let checkElement = this.first;
		
		if (!checkElement){
			return "LinkedList is empty";
		}

		if(!checkElement.newElement) {
			this.first = {};
			this.size--;
			return this.first;
		}

		while (checkElement.next){
			checkElement = checkElement.next;
		}

		checkElement.next = null;		
		this.size--;
		
		return checkElement;
	}
}

module.exports = {
	Element: Element,
	LinkedList: LinkedList
}
