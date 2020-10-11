document.addEventListener("DOMContentLoaded",
        function (event) {

        // Unobtrusive event binding
        document.querySelector(".button2")
                .addEventListener("click", function () {





                // Call server to get the name
                $ajaxUtils
                        .sendGetRequest("https://reqres.in/api/users/3",
                                function (request) {
                                console.log(request.responseText);
                                        var personObject = JSON.parse(request.responseText);
                                        document.querySelector("#content")
                                        .innerHTML = "<h2>test</h2>";
                                });
                });
        }
);
