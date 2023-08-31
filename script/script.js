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
    onclick="handleLoadMusics()"
    class="btn py-2 px-5 capitalize active:bg-[#FF1F3D] active:text-white"
  >
   ${buttonId.category}
  </button>
    `;
    buttonContainer.appendChild(div);
  });
};

const handleLoadMusics = async () => {
  console.log("clicked");
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await response.json();
};

handleCategoryButton();
