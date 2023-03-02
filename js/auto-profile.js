const d=document;

//Using event delegation for executing when the document loads
d.addEventListener("DOMContentLoaded", (e)=>{
    const $img = d.querySelector(".cv-img");
    const $name = d.querySelector(".profile-name-nombre");
    const $surname = d.querySelector(".profile-name-apellido");
    const $user = d.querySelector(".user");
    const $phone = d.querySelector(".phone");
    const $email = d.querySelector(".email");
    const $location = d.querySelector(".location");
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data.results[0]);
            console.log($img)
            $img.style.backgroundImage=`url(${data.results[0].picture.large})`
            $name.textContent=`${data.results[0].name.first}`;
            $surname.textContent=`${data.results[0].name.last}`
            $user.textContent=`@${data.results[0].name.first}${data.results[0].dob.age}`;
            $phone.textContent=`${data.results[0].cell}`;
            $email.textContent=`${data.results[0].email}`;
            $location.textContent=`${data.results[0].location.state}, ${data.results[0].location.country}`;
        }
    });
})