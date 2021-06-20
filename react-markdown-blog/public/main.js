const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
 let postList = [];

 const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
     if (err) {
       return console.log("Failed to list contents of directory: " + err);
     }
     
     files.forEach((file, i) => {
       let obj = {};
       let post;

       fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
         const getMetaDataIndex = (acc, element, i) => {
           if (/^---/.test(element)) {
             acc.push(i);
           }
           return acc;
         }
        const parseMetaData = ({lines, metaDataIndex}) => {
          if(metaDataIndex.length > 0) {
            let metaData = lines.slice(metaDataIndex[0] + 1, metaDataIndex[1]);
            metaData.forEach(line => {
              obj[line.split(": ")[0]] = line.split(": ")[1]
            });
            return obj;
          }
        }
        const parseContent = ({lines, metaDataIndex}) => {
          if(metaDataIndex.length > 0) {
            lines = lines.slice(metaDataIndex[1] + 1, lines.length)
          }
          return lines.join("\n");
        }
        const lines = contents.split("\n");
        const metaDataIndex = lines.reduce(getMetaDataIndex, [])
        const metaData = parseMetaData({lines, metaDataIndex});
        const content = parseContent({lines, metaDataIndex});

        post = {
          id: i + 1,
          title: metaData.title ? metaData.title : "No Title Given",
          date: metaData.date ? metaData.date : "No Date Given",
          content: content ? content : "No Content!"
        }
        postList.push(post);
        if (i === files.length - 1) {
          let data = JSON.stringify(postList);
          fs.writeFileSync("src/posts.json", data);
        }
        
       });
     });
   });

   
 }

 getPosts();