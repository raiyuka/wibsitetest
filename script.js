import { getAllposts } from "./api.js";

window.addEventListener("DOMContentLoaded", async()=>{

    const posts = await getAllposts()
    console.log(posts)
})