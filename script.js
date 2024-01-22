
async function postData() {
    const response = await fetch(" https://api.blog.redberryinternship.ge/api/blogs",{
        method: "POST",
        headers:{
            accept: "application/json",
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            email:"tamogagniashvili@redberry.ge",

        }),
    });

    const data = await response.json();
    console.log(data);
    let token = data.token;
    localStorage.setItem("token",token);
    await uploadBlog();

}


// ბლოგების წამოღება
async function fetchData(){
    const response =  await fecth("https://api.blog.redberryinternship.ge/api/blogs");
    const data = await response.json();

    console.log(data);
}

fetchData();

