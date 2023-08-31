const handleCategoryButton = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const buttonContainer = document.getElementById("button-container");

  data.data.forEach((buttonId) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button
    onclick="handleLoadMusics('${buttonId.category_id}')"
    class="btn py-2 px-5 capitalize active:bg-[#FF1F3D] active:text-white"
  >
   ${buttonId.category}
  </button>
    `;
    buttonContainer.appendChild(div);
  });
};

const handleLoadMusics = async (categoryId) => {
  console.log(categoryId);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  const musicContainer = document.getElementById("music-container");

  musicContainer.innerHTML = "";

  data.data.forEach((music) => {
    console.log(music);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src="${music.thumbnail}"
      />
    </figure>
    <div class="card-body">
        <div class="avatar mr-4 flex">
            <div class="w-12 rounded-full mr-4">
                <img src='${music.authors[0].profile_picture}' />
            </div>
            <h2 class="card-title font-bold">${music.title}</h2>
        </div>  
        <p class="-mt-2 ml-16">${music.authors[0].profile_name}</p>
        <p class="ml-16">${music.others.views ? music.others.views : ""}</p>
    </div>
  </div>
    
    `;
    musicContainer.appendChild(div);
  });
};
handleLoadMusics(1000);
handleCategoryButton();
