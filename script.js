async function postData(url = '', data = {}) {

  const response = await fetch(url, {
    method: 'POST', 
    // mode: 'cors', 
    // cache: 'no-cache', 
    // credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    // redirect: 'follow', 
    // referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return response.json();
}

document.getElementById('submit').addEventListener('click', () => {
    // let value = document.getElementById('file').files[0];

    var input = document.getElementById("file");
    console.log(input.value);

    const name = input.value;
    let filename = name.replace(/^.*\\/, "");
    filename = "./input/" + filename;
    let el = document.getElementById("input");
    let string = "<img src=" + filename + " >";
    el.innerHTML=string;
    // "<img src=\`http://placehold.it/350x350\` width=\"400px\" height=\"150px\">"

    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(event){
        var img = document.getElementById("file");
        img.src = event.target.result;
        console.log(img);
        postData('http://localhost:5000', { imagePath: input.value })
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
        });
        // console.log(img.src);
    }


    // console.log("value : ",value);

    // axios

    // const { exec } = require("child_process");

    // let file = input[counter];

    // exec(`python3 temp.py ${file}`, (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(`error: ${error.message}`);
    //         return;
    //     }
    //     if (stderr) {
    //         console.log(`stderr: ${stderr}`);
    //         return;
    //     }
    //     console.log(`stdout: ${stdout}`);
    // });;

})





























// const { exec } = require("child_process");

// let file = ''

// exec(`python3 temp.py ${file}`, (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });;


// setTimeout(()=>{
//     // exec cmd 

// },0)

