var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],

      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        //your code is here
        var col =hashFn(key, max)
        
       if(!this._storage[col]) {
        this._storage[col] = value;
                console.log("a" +this._storage[col]  )

        
        }
        for (var i = 0; i < this._storage.length; i++) {

        
          if(i===col){
            this._storage[col][0]=value;
          }else{

            this._storage[col] =value;
          }
        }
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};