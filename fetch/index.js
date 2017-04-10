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
            mode: "no-cors"
        };
        
        //fetch get
        
        fetch(url, options).then(response => {
            return response.text();
        }).then(text => {
            callback(text);
        });
        
    };
    ext.post = (url, callback) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'POST',
            mode: "no-cors"
        };
        
        //fetch post
        
        fetch(url, options).then(response => {
            return response.text();
        }).then(text => {
            callback(text);
        });
       
    };
    
    ext.put = (url, callback) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'PUT',
            mode: "no-cors"
        };
        
        //fetch put
        
        fetch(url, options).then(response => {
            return response.text();
        }).then(text => {
            callback(text);
        });
    };
    
    ext.delete = (url, callback) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'DELETE',
            mode: "no-cors"
        };
        
        //fetch delete
        
        fetch(url, options).then(response => {
            return response.text();
        }).then(text => {
            callback(text);
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