( (ext) => {
    ext._shutdown = () => {
        
    };
    
    ext._getStatus = () => {
        return {status: 2, msg: "Fetch is operational"};
    };
    
    /* All functions should take a url of type String and a header */
    
    ext.get = () => {
        //fetch get
    };
    ext.post = () => {
        //fetch post
    };
    
    ext.put = () => {
        //fetch put
    };
    
    ext.delete = () => {
        //fetch delete
    };
    
    //Description of my new block types
    var descripter = {
        blocks: [
            ['R', 'get', 'get'],
            ['R', 'post', 'post'],
            ['R', 'put', 'put'],
            ['R', 'delete', 'delete']
            
        ]
    };
    
    
})({});