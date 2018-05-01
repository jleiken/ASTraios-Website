$(document).ready(() => {
    // elements
    let main = $("#main-content");
    let finalize = $("#finalize-content");
    let bookContent = $("#book-content");
    let cats = $("#category-picker");
    let planets = $("#planet-picker");
    let moons = $("#moon-picker");
    let stars = $("#star-picker");
    let extra = $("#more-info");
    let go = $("#look-button");
    let back = $(".back-button");
    let book = $("#book-button");
    let fov = $("#fov-picker");
    let exposure = $("#exposure-picker");
    
    // hiding setup
    planets.hide();
    moons.hide();
    stars.hide();
    extra.hide();
    book.hide();
    main.hide(); // comment out for prod
    finalize.hide();
    //bookContent.hide();

    $("#datetimepicker").datetimepicker();

    // event handlers
    cats.on('change', () => {
        let val = cats.val();
        extra.show();
        if (val == 0) {
            planets.show();
            moons.hide();
            stars.hide();
        } else if (val == 1) {
            planets.hide();
            moons.show();
            stars.hide();
        } else if (val == 2) {
            planets.hide();
            moons.hide();
            stars.show();
        } else {
            planets.hide();
            moons.hide();
            stars.hide();
            extra.hide();
        }
    });

    go.on('click', () => {
        main.hide();
        finalize.fadeIn();
        bookContent.hide();
    });

    back.on('click', () => {
        main.show();
        finalize.hide();
        bookContent.hide();
    });

    function checkRadios() {
        let userExp = $('input[name="exposure"]:checked').val();
        let userFov = $('input[name="fov"]:checked').val();
        if (userExp && userFov) {
            book.show();
        } else {
            book.hide();
        }
    }

    fov.on('change', () => {
        checkRadios();
    });

    exposure.on('change', () => {
        checkRadios();
    });

    book.on('click', () => {
        main.hide();
        finalize.hide();
        bookContent.fadeIn();
    });
});

