define([
    'core/js/adapt'
],function(Adapt) {



    $("body").on('click', '.js-generate-certificate', function() {
        var certConfig = Adapt.course.get('_certificate');

        var course = Adapt.course.get("displayTitle");
        var name = Adapt.offlineStorage.get('learnerinfo').name;
        var date = (new Date()).toLocaleDateString("en-GB");


        var domain = document.location.origin;
        var popup = window.open("assets/certificate.html", "bob");

        var message = _.extend(certConfig, {
            "course": course,
            "name": name,
            "date": date
        });

        window.addEventListener('message', function() {
            popup.postMessage(message, domain);
        });
    })            

 });
