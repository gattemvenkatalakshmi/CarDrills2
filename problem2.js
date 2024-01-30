function lastId(inventory){
     let data = [];
    if (Array.isArray(inventory)) { 
 data =inventory.filter(value => value.id==inventory.length) ;
    }
     return data[0];
}
module.exports=lastId;
 