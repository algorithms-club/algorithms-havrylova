'use strict';

const algolib = require('../index.js');

describe.only('#linkedList', function(){
	it('should show name of element', function(){
		let data = 'elem first'
		let element = new algolib.linkedList.Element(data);
		element.data.should.be.eql(data);
	});
	it('should show the length of linked list', function(){
		let list = new algolib.linkedList.LinkedList();
		list.size.should.be.eql(0);
	});
	it('should add to end of linkedList elements and check the length of LL', function(){
		let list = new algolib.linkedList.LinkedList();
		list.size.should.be.eql(0);
		let element = new algolib.linkedList.Element('First element');
		list.push(element);
		list.size.should.be.eql(1);
		let element2 = new algolib.linkedList.Element('Second element');
		let element3 = new algolib.linkedList.Element('Third element');
		let element4 = new algolib.linkedList.Element('Fourth element');
		list.push(element2);
		list.push(element3);
		list.push(element4);
		list.size.should.be.eql(4);		
	});	
	it('should remove from linkedList last element and check the length of LL', function(){
		let list = new algolib.linkedList.LinkedList();
		list.size.should.be.eql(0);
		let element = new algolib.linkedList.Element('First element');
		list.push(element);
		list.size.should.be.eql(1);
		let element2 = new algolib.linkedList.Element('Second element');
		let element3 = new algolib.linkedList.Element('Third element');
		let element4 = new algolib.linkedList.Element('Fourth element');
		list.push(element2);
		list.push(element3);
		list.push(element4);
		list.size.should.be.eql(4);
		list.pop();
		list.size.should.be.eql(3);			
	});		
	it('should remove from linkedList last element and check the length of LL', function(){
		let list = new algolib.linkedList.LinkedList();
		list.size.should.be.eql(0);
		list.pop().should.be.eql("LinkedList is empty");			
	});	
	it('should remove from linkedList last element and check the length of LL', function(){
		let list = new algolib.linkedList.LinkedList();
		list.size.should.be.eql(0);
		let element = new algolib.linkedList.Element('First element');
		list.push(element);
		list.size.should.be.eql(1);
		list.pop();
		list.size.should.be.eql(0);					
	});					
})
