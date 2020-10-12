var i = 1;
    var clicks = 0;
    document.addEventListener("DOMContentLoaded",
        function (event) {

        
        document.querySelector(".header1")
                .addEventListener("click", function () {
                clicks = clicks + 1;
                $ajaxUtils
                        .sendGetRequest("https://reqres.in/api/users/"+i,
                                function (request) {
                                console.log(request.responseText);
                                        var personObject = JSON.parse(request.responseText);
                                        document.querySelector("#header1")
                                        .innerHTML = "<h1>" + personObject.data['first_name']
                                        + ' ' + personObject.data['last_name'] + "</h1>"+"<p>"+personObject.data['email']+"</p>"+"<img src="+personObject.data['avatar']+">";
                                        
                                        i=i+1;
                                        
                                     if(clicks%5==0){
                                         document.querySelector("#header1")
                                        .innerHTML ='<h1>Nikita Sitar</h1><p>nikita_sitar@ukr.net</p><img src="img.png" alt=""/>';
                                      
                                     }else if (i > 12){
                                         
                                         i = 1;
                                         document.querySelector("#header1")
                                        .innerHTML = "<h1>" + personObject.data['first_name']
                                        + ' ' + personObject.data['last_name'] + "</h1>"+"<p>"+personObject.data['email']+"</p>"+"<img src="+personObject.data['avatar']+">";
                                     }                       
                                     
                                });
                });
        }
);
