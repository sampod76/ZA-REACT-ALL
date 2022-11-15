
// ছবি নেওয়ার জন্য input tag এভাবে দিতে হবে
<input accept='image/*' type="file" id="img" />


// ফাংশনটি async হতে হবে

const onSubmitForm = async data => {

    const { email, name, password, image } = data

    // const image = data.image[0]
    // ভেতর থেকে আসা ইমেজ টা ভেতর থেকে আসা ইমেজ টা 

    console.log(image[0])
    // File {name: 'firebase.jpg', lastModified: 1667350557462, lastModifiedDate: Wed Nov 02 2022 06:55:57 GMT+0600 (Bangladesh Standard Time), webkitRelativePath: '', size: 45588, …}

    const formData = new FormData()
    formData.append('image', image[0])

    const url = `https://api.imgbb.com/1/upload?key=df414536c62b8278623aa0a114d75d61`
    const img = await fetch(url, {
        method: "POST",
        body: formData
    });
    const result = await img.json();
    console.log(result);
}