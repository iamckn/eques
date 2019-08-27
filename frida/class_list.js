console.log("Script loaded successfully ");
Java.perform(function x() { 
    
    Java.enumerateLoadedClasses(
      {
      "onMatch": function(className){ 
            if(className.includes("eques")){
                console.log(className);
            }            
        },
      "onComplete":function(){}
      }
    );
});
