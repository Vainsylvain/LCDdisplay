window.onload = function()
{
    let digitalDisplay;
    document.querySelector('#lcdDisplay').textContent = "0123456789";

    let saisieNombre = document.querySelector("#saisie");
    saisieNombre.addEventListener("click", function(event)
    {
        digitalDisplay = prompt("Veuillez saisir un chiffre pour l'afficher en LCD");
        if(isNaN(digitalDisplay) == true || digitalDisplay == "")
        {
            alert("Vous devez saisir un nombre pour l'afficher en LCD display");
        }
        else
        {
            document.querySelector('#lcdDisplay').textContent = digitalDisplay;
        }
    });

}

