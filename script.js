
$(document).ready(function () {
    $("#input").submit(function (e) {
        e.preventDefault();
        setTimeout(function () {
            showSpinner();
        }, 200);
        $('#table').fadeOut();

        const angka = $("#angka").val();
        const teks = $("#teks").val();



        $.ajax({
            url: "form_B.php",
            type: "POST",
            data: {
                teks: teks,
                angka: angka,
            },
            dataType: "json",
            success: function (response) {
                stopSpinner();
                displayTable(response);
            },
            error: function (error) {
                console.log(error);
            },
        });
    });

    function displayTable(data) {

        var tbody = $("#table tbody");
        tbody.empty();

        $.each(data, function (index, item) {
            var row = "<tr>" +
                "<td>" + index + "</td>" +
                "<td>" + item + "</td>" +
                "</tr>";
            tbody.append(row);
        });

        $("#table").fadeIn();
    }


    function showSpinner() {
        document.getElementById('spinner').style.display = 'block';
    }
    function stopSpinner() {
        document.getElementById('spinner').style.display = 'none';
    }
});


