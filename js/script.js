
let teacherForms = document.getElementsByClassName("teacher-contract");
for(let teacherForm of teacherForms){
    teacherForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let price = teacherForm.price.value;
        let hours = teacherForm.hours.value;
        let total = price * hours;
        alert(`O valor total do contrato é R$${total.toFixed(2)}`);

        teacherForm.hours.value = "";

    })
}

