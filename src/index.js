const content = document.querySelector("#content");

const myArr = [
  { id: 1, name: "Điều hoà Toshiba", price: 10000000 },
  { id: 2, name: "Điều hoà LG", price: 7000000 },
  { id: 3, name: "Điều hoà Hitachi", price: 7000000 },
];

const newPersons = myArr
  .map(function (product) {
    return `<th>
                <tr>${product.id}</tr>
                <tr>${product.name}</tr>
                <tr>${product.price}</tr>
            </th>`;
  })
  .join("");

content.innerHTML = newPersons;
