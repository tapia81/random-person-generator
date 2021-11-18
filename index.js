import axios from "axios";
import { appendContent, clearContent } from "./ui";


(() =>{

    const handleSearch = () => {

        clearContent();
        axios.get("https://randomuser.me/api/?results=10&fbclid=IwAR2dlRZ20VGvaqf3RqR3PW1PGFQ_-R4-vpSUs5dYMmO6avmLOGGgdbMvMPw")
        .then((response) => {
            console.log(response)
            appendContent(response.data.results[0].name.first + " " + response.data.results[0].name.last, response.data.results[0].picture.large);
            console.log("hello world")
        })
        .catch((error) => {
            console.error(error);
        })
    }

    window.addEventListener("load", ()=>{
        document.getElementById("find-person-btn")
        .addEventListener("click",handleSearch)
    })
})();