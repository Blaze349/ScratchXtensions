( (ext) => {
    ext._shutdown = () => {
        
    };
    
    ext._getStatus = () => {
        return {status: 2, msg: "Fetch is operational"};
    };
    
    /* All functions should take a url of type String and a header */
    
    ext.get = (url, callback) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'GET',
            headers: myHeaders
        };
        
        //fetch get
        
        fetch(url, options).then(response => {
            console.log(response.json());
            callback(response.json());
            
        }).catch(err => {
            callback(err);
        });
        
    };
    ext.post = (url, callback) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'POST',
            headers: myHeaders
        };
        
        //fetch post
        
        fetch(url, options).then(response => {
            console.log(response.json());
            callback(response.json());
            
        }).catch(err => {
            callback(err);
        });
       
    };
    
    ext.put = (url, callback) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'PUT',
            headers: myHeaders
        };
        
        //fetch put
        
        fetch(url, options).then(response => {
            console.log(response.json());
            callback(response.json());
            
        }).catch(err => {
            callback(err);
        });
    };
    
    ext.delete = (url, callback) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'DELETE',
            headers: myHeaders
        };
        
        //fetch delete
        
        fetch(url, options).then(response => {
            console.log(response.json());
            callback(response.json());
            
        }).catch(err => {
            callback(err);
        });
    };
    
    //Description of my new block types
    var descriptor = {
        blocks: [
            ['R', 'get %s', 'get'],
            ['R', 'post %s', 'post'],
            ['R', 'put %s', 'put'],
            ['R', 'delete %s', 'delete']
            
        ]
    };
    
    ScratchExtensions.register('Fetch', descriptor, ext);
})({});