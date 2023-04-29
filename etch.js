function genDivs() {
  let e = document.body;
  for (let i = 0; i < 4; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j <= 4; j++) {
      let cell = document.createElement('div');
      cell.className = 'gridSquare';
      cell.innerText = (i * 4) + j;
      row.appendChild(cell);
    }
    e.appendChild(row);
  }
  document.getElementById("code").innerText = e.innerHTML;
}
genDivs();
