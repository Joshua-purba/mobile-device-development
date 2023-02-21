//1. PROMISE

function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  async function messages() {
    let msg = await helloWorld();
    console.log(msg);
  }
  messages();
  
  //2. FETCH 
  
  function ambilDataUser() {
    const nama = prompt("Masukkan nama: ");
    const usia = prompt("Masukkan usia: ");
    const alamat = prompt("Masukkan alamat: ");
    const data_user = {
      nama,
      usia,
      alamat
    };
    return data_user;
  }
  
  const userData = ambilDataUser();
  console.log("Data user:", userData);
  
  async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  ambilDataUser()
    .then(data => {
      console.log("Data user:", data);
      return data.data;
    })
    .then(users => {
      console.log("Users:", users);
    })
    .catch(error => {
      console.error(error);
    });
    
//3 ASYNC AWAIT

async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log("Data user:", data);
      const users = data.data;
      console.log("Users:", users);
    } catch (error) {
      console.error(error);
    }
  }
  
  ambilDataUser();
  
  import {axios} from "axios";
  