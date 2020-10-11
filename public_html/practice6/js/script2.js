document.addEventListener("DOMContentLoaded",
        function (event) {

        // Unobtrusive event binding
        document.querySelector(".button2")
                .addEventListener("click", function () {




                // Call server to get the name
                $ajaxUtils
                        .sendGetRequest("https://reqres.in/api/users/1",
                                        $('#button1').click(function(){
	                                var value = $('#select').val();
                                function (request) {
                                console.log(request.responseText);
                                        var personObject = JSON.parse(request.responseText);
                                        document.querySelector("#content")
                                        .innerHTML = "<h2>Hello " + personObject.data['first_name']
                                        + ' ' + personObject.data['last_name'] + "!</h2>";
                                });
                });
        }
);
