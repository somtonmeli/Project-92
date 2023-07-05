function save()
{
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;

    localStorage.setItem("number_1", number_1);
    localStorage.setItem("number_2", number_2);

}

function send()
{

    window.location = "answer_page.html";
}