let db;

onmessage = function(event) {
  switch (event.data.action) {
    case 'init': {
      console.log('initializing worker db "' + event.data.dbName + '" with version ' + event.data.dbVersion);
      let req = indexedDB.open(event.data.dbName, event.data.dbVersion);
      req.onsuccess = function(e) {
        db = req.result;
        postMessage('ready');
      };
      break;
    }
    case 'load': {
      console.log('loading data in ' + event.data.storeName);
      let rolls = event.data.rolls;
      let transaction = db.transaction([event.data.storeName], 'readwrite');
      
      transaction.oncomplete = function(event) {
        console.log('transaction complete');
        postMessage('loaded');
      };
      let store = transaction.objectStore(event.data.storeName);
      let clearRequest = store.clear();
      for (let key of Object.keys(rolls)) {
        store.put({
          ...rolls[key],
        }, key);
      }
      clearRequest.onsuccess = function(){
        console.log('cleared the db');
        postMessage('cleared');
      };
      break;
    }
  }
};

