

const fs = require('fs');
const path = require('path');

module.exports.listJsFiles = async (filepath, ext) => {
    if (! filepath){
        console.log("Invalid path provided")
        process.exit(1);
    }
    try{
        fs.readdir(filepath, {withFileTypes: true}, (err, items) => {
            if (err){
                console.error("Error reading directory: ", err.message);
                return;
            }
        
        items.forEach(item => {
            const fullPath = path.join(filepath, item.name);
            if (item.isDirectory()){
                module.exports.listJsFiles(fullPath, ext);
            } else if (item.isFile()){
                if (path.extname(item.name) === ext){

                    const fileOp =  fs.readFile(fullPath, 'utf8', (err, data) => {
                        if (err){
                            console.error("Error reading file: ", err.message);
                            return;
                        }
                        const lines = data.split('\n').length;
                        console.log(`${fullPath} \t ${lines} lines`)
                    })
                    // console.log(fullPath);
                }
            }

        });
        // const filteredFile = files.filter(file => path.extname(file) === ext);
        // filteredFile.forEach(file => console.log(file) )

        });

    }catch(error){
        console.log(error)
    }

}