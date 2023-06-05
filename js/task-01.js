const menuItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItems.length}`);

const itemsEl = document.querySelectorAll(".item");
[...itemsEl].forEach((item)=>{
    const categoryName = item.querySelector("h2");
    console.log(`Category: ${categoryName.textContent}`);

    const elements = item.querySelectorAll("li");
    console.log(`Elements: ${elements.length}`);
})


