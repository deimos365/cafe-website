$(document).ready(function () {

    // TASK 0: Select elements and update content

    $("#welcomeForm").on("submit", function (event) {
        event.preventDefault();

        const name = $("#visitorName").val().trim();

        if (name === "") {
            $("#welcomeMessage").text(
                "Please enter your name before continuing."
            );
            return;
        }

        $("#welcomeMessage").text(
            `Welcome to Yummy Cafe, ${name}! We hope you enjoy your visit.`
        );
    });


    // TASK 1: Change appearance with classes

    $("#themeToggle").on("click", function () {
        $("body").toggleClass("dark-theme");

        const isDarkTheme = $("body").hasClass("dark-theme");

        if (isDarkTheme) {
            $(this).text("Switch to Light Theme");
            $(this).attr("aria-pressed", "true");
        } else {
            $(this).text("Switch to Dark Theme");
            $(this).attr("aria-pressed", "false");
        }
    });


// TASK 2: FAQ accordion

$(".faq-question").on("click", function () {
    const question = $(this);
    const faqItem = question.closest(".faq-item");
    const answer = faqItem.find(".faq-answer");

    const isExpanded = question.attr("aria-expanded") === "true";

    // Stop any animation currently running.
    answer.stop(true, true);

    if (isExpanded) {
        answer.slideUp(300);
        question.attr("aria-expanded", "false");
        question.find(".faq-icon").text("+");
    } else {
        answer.slideDown(300);
        question.attr("aria-expanded", "true");
        question.find(".faq-icon").text("−");
    }

    // Second animation required by the assignment.
    $("#faqStatus")
        .stop(true, true)
        .text("FAQ updated.")
        .fadeIn(200)
        .delay(1000)
        .fadeOut(300);
});


    // TASK 3: Filter content as the user types

    const menuItems = $("[data-menu-item]");

    function filterMenuItems() {
        const searchText = $("#menuSearch").val().trim().toLowerCase();

        let matchingItems = 0;

        menuItems.each(function () {
            const item = $(this);

            const title = item
                .find(".menu-item-title")
                .text()
                .trim()
                .toLowerCase();

            const matches = title.includes(searchText);

            item.toggle(matches);

            if (matches) {
                matchingItems++;
            }
        });

        $("#searchCount").text(
            `${matchingItems} ${matchingItems === 1 ? "item" : "items"} found.`
        );

        $("#noResults").prop("hidden", matchingItems !== 0);
    }

    $("#menuSearch").on("input", filterMenuItems);

    // Initialize the count when the page loads.
    filterMenuItems();


    // TASK 4: Create and remove elements

    function updateFavoriteCount() {
        const totalFavorites = $("#favoriteList").children().length;

        $("#favoriteCount").text(`Favorites: ${totalFavorites}`);

        $("#favoriteEmpty").prop("hidden", totalFavorites !== 0);
    }

    $("#favoriteForm").on("submit", function (event) {
        event.preventDefault();

        const favoriteName = $("#favoriteInput").val().trim();

        if (favoriteName === "") {
            $("#favoriteFeedback")
                .text("Please enter the name of a menu item.")
                .css("color", "#c34c4c");

            return;
        }

        // Create the list item and its contents.
        const listItem = $("<li>").addClass("favorite-item");

        const nameElement = $("<span>")
            .addClass("favorite-name")
            .text(favoriteName);

        const removeButton = $("<button>")
            .attr("type", "button")
            .addClass("remove-button")
            .attr("aria-label", `Remove ${favoriteName} from favorites`)
            .text("Remove");

        // Assemble the elements.
        listItem.append(nameElement, removeButton);

        // Add the item to the list.
        $("#favoriteList").append(listItem);

        updateFavoriteCount();

        $("#favoriteFeedback")
            .text(`${favoriteName} was added to your favorites.`)
            .css("color", "var(--text-color)");

        $("#favoriteForm")[0].reset();
        $("#favoriteInput").trigger("focus");
    });


    // Delegated event handler for dynamically created buttons.
    $("#favoriteList").on("click", ".remove-button", function () {
        const listItem = $(this).closest("li");
        const favoriteName = listItem.find(".favorite-name").text();

        listItem.remove();

        updateFavoriteCount();

        $("#favoriteFeedback")
            .text(`${favoriteName} was removed from your favorites.`)
            .css("color", "var(--text-color)");
    });

    // Set the initial count.
    updateFavoriteCount();

});