// implement a stack using a class
// use WeakMap() to keep the properties of the class private
// it will have three methods, push(), pop() and peek()
// push() will push an element to the end of the stack
// pop() will pop an element from the end of the stack
// peek() will return and show the last element
// it will have a count property which will be read only

// declaring variable to keep weakmap object
let _items = new WeakMap();

class Stack{
    constructor(){
        // using set method to initialize empty array
        _items.set(this, []) //declaring private array 
    }

    push(value){
        // using get method to get the private array 
        _items.get(this).push(value);
    }

    pop(){
        if(_items.get(this).length===0) throw new Error("stack is empty");
        return _items.get(this).pop();
    }

    peek(){
        if(_items.get(this).length===0) throw new Error("stack is empty");
        return _items.get(this)[_items.get(this).length-1];
    }

    // using getter to get count property
    get count(){
        return _items.get(this).length;
    }
}

const stack = new Stack();