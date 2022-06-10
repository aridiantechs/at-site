// file upload text change JQuery
$("form").on("change", "#file-upload", function () {
    $(this)
        .parent(".file-upload-wrapper")
        .attr(
            "data-text",
            $(this)
                .val()
                .replace(/.*(\/|\\)/, "")
        );
});
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "zakria.aamir@aridiantechnologies.com",
        Password: "63CCA234F0735BC4375843F014C81F564FEF",
        Server: "smtp.elasticemail.com",
        port: "2525",
        To: "zakria.aamir@aridiantechnologies.com",
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body:
            "Name: " +
            document.getElementById("name").value +
            "<br> Eamil: " +
            document.getElementById("email").value +
            "<br> Phone no: " +
            document.getElementById("phone").value +
            "<br> File Upload: " +
            document.getElementById("file-upload").value +
            "<br> Message: " +
            document.getElementById("validationTextarea").value,
    }).then((message) => alert("Message Sent Succesfully"));
};


