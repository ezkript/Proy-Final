const d=document;

//Using event delegation for executing when the document loads
d.addEventListener("DOMContentLoaded", (e)=>{
    const $img = d.querySelector(".cv-img"),
        $name = d.querySelector(".profile-name-nombre"),
        $surname = d.querySelector(".profile-name-apellido"),
        $user = d.querySelector(".user"),
        $phone = d.querySelector(".phone"),
        $email = d.querySelector(".email"),
        $location = d.querySelector(".location");

    //API CONNECTION (JQuery)
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
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