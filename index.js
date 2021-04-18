class SortedList {
  constructor() {
    this.items=[],
    this.length=this.items.length
  }
  
  add(item) {
    this.items.push(item);
    this.length=this.items.length;
    this.items.sort(function(a, b){return a - b});   
  }
  
  get(pos) {
    if (pos < 0) throw new Error('OutOfBounds');
    if (pos > this.items.length) throw new Error('OutOfBounds');
    try {
      return this.items[pos];
    }
    catch(error){
      throw new Error(error);
    }
  }

  max() {

    if (this.items.length==0) throw new Error('EmptySortedList');
    try {
      const maximo=(Math.max(...this.items));
      return maximo;
    }
    catch(error){
      throw new Error(error);
    }
  }

  min() {
    if (this.items.length==0) throw new Error('EmptySortedList');
    try {
      const minimo=(Math.min(...this.items));
      return minimo;
    }
    catch(error){
      throw new Error(error);
    }
  }

  sum() {
    if (this.items.length==0) {
      //throw new Error('EmptySortedList');
      return 0;
    }
    try {
      const total=this.items.reduce((a,b)=>a+b);
      return total;
    }
    catch(error){
      throw new Error(error);
    }
  }

  avg() {
    if (this.items.length==0) throw new Error('EmptySortedList');
    try {
      const total=this.items.reduce((a,b)=>a+b);
      return total/this.items.length;
    }
    catch(error){
      throw new Error(error);
    }

  }
}

module.exports = SortedList;
