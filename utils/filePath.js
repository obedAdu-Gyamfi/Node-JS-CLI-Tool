



module.exports.getPath = () => {

    const path = 
    {
      "path":  process.argv[2],
      "ext": process.argv[3],
    }
        
    if (! path ){
        console.log("Usage: cli <path> ");
        process.exit(1);
    }
    return path;
}