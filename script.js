function removeHide(id) {

    $(`#${id}`).removeAttr('hidden');
}

$("ul").on("click", (event) => {
    if (event.target.tagName != "LI") return;
    else { select(event.target); }
});

function select(li) {
    let selected = $("li.active");
    for (let elem of selected) {
        $(elem).removeClass('active');
        $(`#${elem.classList[1]}`).attr('hidden', 'true');
    }
    $(li).addClass('active');
    removeHide(li.classList[1]);
}