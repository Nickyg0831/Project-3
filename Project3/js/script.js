$(document).ready(function(){
    var apiBase = "http://statenweb.mockable.io/conversions/";

    axios.get(apiBase).then(function(response){

        $('#In-Cen-Conv').on('click', function(){
            var conversion = "<p> Inches: " + $("#In-Cen-Input").val() + " <br> Centimeters: " + $("#In-Cen-Input").val() * response.data.inchesInCm + " </p>";
            console.log(conversion);
            $('#In-Cen-Output').html(conversion);
            return conversion;
        });

        $('#Cen-In-Conv').on('click', function(){
            var conversion = "<p> Centimeters: " + $("#Cen-In-Input").val() + " <br> Inches: " + $("#Cen-In-Input").val() * response.data.centimetersInInch + " </p>";
            console.log(conversion);
            $('#Cen-In-Output').html(conversion);
            return conversion;
        });

        document.getElementById("In-Cen-Conv").addEventListener("click", function(event){
            event.preventDefault();
        });

        document.getElementById("Cen-In-Conv").addEventListener("click", function(event){
            event.preventDefault();
        });
    });
});