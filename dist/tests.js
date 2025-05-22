document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("categoryDropdown");

  //   const allowedCategories = [
  //     "health",
  //     "education",
  //     "sports",
  //     "entertainment",
  //     "food",
  //     "technology",
  //   ];

  if (dropdown) {
    fetch("https://test.blockfuselabs.com/api/categories")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not OK");
        return response.json();
      })
      .then((result) => {
        const categories = result.data;

        console.log(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }
});

// if (Array.isArray(categories)) {
//   const filtered = categories.filter((cat) =>
//     allowedCategories.includes(cat.slug.toLowerCase())
//   );

//   if (filtered.length > 0) {
//     dropdown.innerHTML = `<option value="" disabled selected>Category</option>`;

//     filtered.forEach((category) => {
//       const option = document.createElement("option");
//       option.value = category.slug;
//       option.textContent = category.name;
//       dropdown.appendChild(option);
//     });

//     dropdown.addEventListener("change", function () {
//       const selected = dropdown.value;
//       if (selected) {
//         // Navigate and reload page to the selected category anchor
//         window.location.href = `/dist/index.html#${selected}`;
//       }
//     });
//  } else {
//     dropdown.innerHTML = `<option value="">No allowed categories found</option>`;
//   }
// } else {
//   dropdown.innerHTML = `<option value="">No categories available</option>`;
// }\

// dropdown.innerHTML = `<option value="">Failed to load categories</option>`;

fetch("https://test.blockfuselabs.com/api/posts/12", {
  method: "GET",
  headers: {
    "cache-control": "no-cache,private",
    "content-type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not OK");
    return response.json();
  })
  .then((result) => {
    console.log("Full post:", result);

    // Example: access the categories if they exist
    const categories = result.categories || "No categories found";
    console.log("Categories:", categories.title);
  })
  .catch((error) => {
    console.error("Error fetching post:", error);
  });
