const option = {
  method: "GET",
  header: { accept: "aplication/json" },
};
const endpoint = "https://fakestoreapi.com/products";
const app = document.querySelector("#app");
app.className = "max-w-7xl mx-auto flex flex-wrap justify-center gap-6 p-6";
fetch(endpoint, option)
  .then((res) => res.json())
  .then((api) => {
    const deepCopyAPI = api.map((item) => item);
    deepCopyAPI.forEach((element) => {
      app.insertAdjacentHTML(
        "beforeend",
        ` <div class="w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
   <img class="w-full h-56 object-contain p-4" src="${element.image}" alt="">

<div class="p-5">

<h3 class="font-bold text-lg h-14 overflow-hidden">
${element.title}
</h3>

<p class="text-gray-600 mt-3 h-20 overflow-hidden">
${element.description}
</p>

<p class="text-green-600 font-bold text-xl mt-4">
$${element.price}
</p>

<button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
Read More
</button>

</div>
</div>`,
      );
    });
  });

// آدرس جدید ما برای گرفتن کاربران
const endpoint1 = "http://localhost:3000/user";

fetch(endpoint1, option)
  .then((res) => res.json())
  .then((api1) => {
    const deepCopyAPI1 = api1.map((item) => item);

    deepCopyAPI1.forEach((element) => {
      app.insertAdjacentHTML(
        "beforeend",
        `
        <div class="w-80 bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition duration-300">
        <div class="flex justify-center">

<div class="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold">

${element.name.charAt(0)}

</div>

</div>

<h2 class="text-center text-xl font-bold mt-4">
${element.name}
</h2>

<hr class="my-4">

<p><span class="font-bold">Username:</span> ${element.username}</p>

<p><span class="font-bold">Email:</span> ${element.email}</p>

<p><span class="font-bold">City:</span> ${element.address.city}</p>

<p><span class="font-bold">Street:</span> ${element.address.street}</p>
           
        </div>
        `,
      );
    });
  });
