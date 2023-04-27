import './App.css';
import { useState } from 'react';
// import useDrivePicker from 'react-google-drive-picker';

function App() {
  // LINK GOOGLE DRIVE
  // https://drive.google.com/drive/folders/1s4wkhHdwXQHT6ywjGOahaBWXdN_FEIuk?usp=sharing
  
  const [input, setInput] = useState();

  function uploadFile(e) {
    var file = e.target.files[0]
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = function (e) {
      var rawLog = reader.result.split(',')[1];
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" };
      fetch('https://script.google.com/macros/s/AKfycbzh8lGbHpp5LqzSB1-_my7_rPFBG9AYKz644HMy_BGEYwjKAcNfKTUr8OKxQQPE8YSLOw/exec',
        { method: "POST", body: JSON.stringify(dataSend) })
        .then(res => res.json()).then((a) => {
          console.log(a)
        }).catch(e => console.log(e))
    }
  }

  function uploadFileSubmit() {
    var reader = new FileReader()
    reader.readAsDataURL(input)
    reader.onload = function (e) {
      var rawLog = reader.result.split(',')[1];
      var dataSend = { dataReq: { data: rawLog, name: input.name, type: input.type }, fname: "uploadFilesToGoogleDrive" };
      fetch('https://script.google.com/macros/s/AKfycbzh8lGbHpp5LqzSB1-_my7_rPFBG9AYKz644HMy_BGEYwjKAcNfKTUr8OKxQQPE8YSLOw/exec',
        { method: "POST", body: JSON.stringify(dataSend) })
        .then(res => res.json()).then((a) => {
          console.log(a)
        }).catch(e => console.log(e))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadFileSubmit();
  }

  return (
    <div className="App">
      <div>
        <p>On Change</p>
        <input type="file" id="customFile" name="customFile" onChange={(e) => uploadFile(e)} />
      </div>
      <form onSubmit={handleSubmit}>
        <p>On Submit</p>
        <input type="file" id="submitFile" name="submitFile" onChange={(e) => setInput(e.target.files[0])}/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;