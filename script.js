const data = [];
const app = document.querySelector("#app ul");
const btn = document.querySelector(".btn");
const value = document.querySelector("input");

btn.addEventListener("click", () => {
  addItem(value.value);
});

function addItem(item) {
  data.push(item);
  render();
}

function render() {
  app.innerHTML = "";

  const result = data.reduce((accu, item, index) => {
    item = `<li>${item} <button class="delete" data-id = ${index}>刪除</button></li>`;
    return (item += accu);
  }, "");

  app.innerHTML = result;
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((btnD) =>
    btnD.addEventListener("click", (e) => {
      deleteItem(e.target.dataset.id);
    })
  );

  value.value = "";
}

function deleteItem(target) {
  data.splice(target, 1);
  render(data);
}
