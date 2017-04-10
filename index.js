( function(ext){
    ext._shutdown = function() {
        
    };
    
    ext._getStatus = function() {
        return {status: 2, msg: "Fetch is operational"};
    };
    
    /* All functions should take a url of type String and a header */
    
    ext.get = function() {
        //fetch get
    };
    ext.post = function() {
        //fetch post
    };
    
    ext.put = function() {
        //fetch put
    };
    
    ext.delete = function() {
        //fetch delete
    };
    
    //Description of my new block types
    var descriptor = {
        blocks: [
            ['R', 'get', 'get'],
            ['R', 'post', 'post'],
            ['R', 'put', 'put'],
            ['R', 'delete', 'delete']
            
        ]
    };
    
    ScratchExtensions.register('Fetch', descriptor, ext);
})({});