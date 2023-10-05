// Requiring the module

const fs=require("fs");

const dt=fs.readFileSync("student.json","utf-8");
const jsn=JSON.parse(dt);
var data='';
for (var i = 0; i < jsn.length; i++) {
    //console.log(jsn[i].Name);
    data=data+jsn[i].Name+'\t'+jsn[i].Age+'\t'+jsn[i].Gender+'\t'+jsn[i].City+'\n';
 }
fs.appendFile('marks.xls', data, (err) => {
    if (err) throw err;
    console.log('File created');
 });

