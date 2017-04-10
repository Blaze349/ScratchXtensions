( (ext) => {
    ext._shutdown = () => {
        
    };
    
    ext._getStatus = () => {
        return {status: 2, msg: "Fetch is operational"};
    };
    
    /* All functions should take a url of type String and a header */
    
    ext.get = (url) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors'
        };
        
        //fetch get
        
        fetch(url, options).then(response => {
            
            return response.text()
            
        });
        
    };
    ext.post = (url) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors'
        };
        
        //fetch post
        
        fetch(url, options).then(response => {
            
            return response.text()
            
        });
       
    };
    
    ext.put = (url) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'PUT',
            headers: myHeaders,
            mode: 'cors'
        };
        
        //fetch put
        
        fetch(url, options).then(response => {
            
            return response.text()
            
        });
    };
    
    ext.delete = (url) => {
        let myHeaders = new Headers();
        
        let options = {
            method: 'DELETE',
            headers: myHeaders,
            mode: 'cors'
        };
        
        //fetch delete
        
        fetch(url, options).then(response => {
            
            return response.text()
            
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