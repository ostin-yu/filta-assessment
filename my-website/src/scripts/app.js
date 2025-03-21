document.addEventListener('DOMContentLoaded', () => {
    // Log all anchors clicked to the console
    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            console.log(`Anchor clicked: ${anchor.href}`);
        });
    });

    // Log all clicked elements to the console
    document.addEventListener('click', (event) => {
        console.log('Element clicked:', event.target);
    });

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var images = document.getElementsByClassName("modal-image");

    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
});