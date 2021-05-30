window.onload = function()
{
    let digitalDisplay;
    document.querySelector('#lcdDisplay').textContent = "0123456789";

    let saisieNombre = document.querySelector("#saisie");
    saisieNombre.addEventListener("click", function(event)
    {
        digitalDisplay = prompt("Veuillez saisir un nombre pour l'afficher en LCD sur l'écran");
        if(isNaN(digitalDisplay) == true || digitalDisplay == "")
        {
            alert("Vous devez saisir uniquement des chiffres pour pouvoir imprimer le nombre en LCD display");
            document.querySelector('#lcdDisplay').textContent = "0123456789";
        }
        else if (digitalDisplay == null)
        {
            alert("Aucune saisie détectée");
            document.querySelector('#lcdDisplay').textContent = "0123456789";
        }
        else
        {
            document.querySelector('#lcdDisplay').textContent = digitalDisplay;
        }
    });

}