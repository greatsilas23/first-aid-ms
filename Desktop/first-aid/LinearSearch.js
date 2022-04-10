const search = (item, query) => {
    for(let i = 0; i < item.length - 1; i++){
        if(item[i] === query){
            return item[i]
        }
    }
}

module.exports.search = search