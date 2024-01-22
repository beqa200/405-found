
// ბლოგების წამოღება
async function fetchData(){
    const response =  await fecth("https://api.blog.redberryinternship.ge/api/blogs");
    const data = await response.json();

    console.log(data);
}

fetchData();
