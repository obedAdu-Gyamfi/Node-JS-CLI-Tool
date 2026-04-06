#!/usr/bin/env node

// import { getPath } from "./utils/filePath.js";
// import { listJsFiles } from "./components/listJS.js";

const list = require('./components/listJS.js');
const getPath = require('./utils/filePath.js');


const mypath = getPath.getPath();

list.listJsFiles(mypath.path, mypath.ext)
// console.log(mypath);



