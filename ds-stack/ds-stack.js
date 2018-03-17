var Stack = function() {
    this._storage ={}
    this.a;
    this.add = function(value){
      // write me
      this._storage[value] =value;

    };
    this.remove = function() {
      // write me
      
      
      this.a = Object.keys(this._storage).length
      console.log(this.a)
      delete this._storage[this.a]
      console.log(this._storage)
      return this.a
    };
  };