let table = document.querySelectorAll('td')
const dateTime = document.querySelector('.date-time')
const days = [[table[0],table[1],table[2],table[3],table[4],table[5],table[6]],
[table[7],table[8],table[9],table[10],table[11],table[12],table[13]],
[table[14],table[15],table[16],table[17],table[18],table[19],table[20]],
[table[21],table[22],table[23],table[24],table[25],table[26],table[27]],
[table[28],table[29],table[30],table[31],table[32],table[33],table[34]],
]
let c = new Date();
days[c.getDay()-1].forEach(cell =>{
    cell.classList.add("current");
})
const currentClassSpan = document.querySelector('.current-class-update');
setInterval(function () {
    let d = new Date();
    if(8-d.getHours()>-7){
        const period = Math.abs(8-d.getHours());
        days[c.getDay()-1][period].classList.add("ongoing");
        currentClassSpan.innerText=days[c.getDay()-1][period].innerText;
    }
    
    dateTime.innerText = d.getDate() + "/" + (d.getMonth()+1) + "/"+d.getFullYear();
},1000);



table.forEach((cell) => {
    cell.addEventListener('click',()=> {
        if(cell.classList[0] === "current" || cell.classList[1] === "current"){
            cell.classList.toggle("ongoing");
        }
        
    })
})
