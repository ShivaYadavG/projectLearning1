function clearAlert() {
    alert('you clicked on the clear button')
}

function clearForm() {
    document.getElementById("contactForm").reset();
}

function hidePTags() {
    let PTags = document.getElementsByTagName('p');
    for (let item of PTags) {
        // item.style.visibility = 'hidden'; // Removes elements , leaves space
        item.style.display = 'none';
    }
}

$('#jQueryBtn').click(function () {
    $('p').hide();
})