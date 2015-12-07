var images = ["recipe/images/snack1.jpg", "recipe/images/snack2.jpg", "recipe/images/snack3.jpg", "recipe/images/snack4.jpg",
    "recipe/images/snack5.jpg", "recipe/images/dessert1.jpg", "recipe/images/dessert2.jpg", "recipe/images/dessert3.jpg", "recipe/images/dessert4.jpg",
    "recipe/images/dessert5.jpg", "recipe/images/bread1.jpg", "recipe/images/bread2.jpg", "recipe/images/bread3.jpg", "recipe/images/bread4.jpg"];
var i = 0;
var votes = [];
function previousImage() {
    i > 0 ? changeImage(--i) : 0;
}
function nextImage() {
    i + 1 < images.length ? changeImage(++i) : calculateVotes();
}
function changeImage() {
    $("#image-to-vote-on").attr("src", images[i]);
    $("#your-vote>option").prop("selected", false);
}
function calculateVotes() {
    var ave = 0;
    if (votes.length !== 0) {
        votes.forEach(function (element) {
            ave += parseInt(element);
        });
        ave = (Math.round((ave / votes.length) * 100) / 100).toFixed(2);
    }
    $("#image-to-vote-on+div").text("You have reached the end. Total deliciousness score was: " + ave);
}
$(document).ready(function () {
    $("#your-vote").on("change", function () {
        if (i < images.length) {
            votes[i] = $("#your-vote").val();
            nextImage();
        }
    });
    $("#buttons-wrapper .btn[value='Skip']").on("click", nextImage);
    $("#buttons-wrapper .btn[value='Back']").on("click", previousImage);
});