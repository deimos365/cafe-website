
$(document).ready(function () {

    const menuItems = $("[data-menu-item]");
    let selectedCategory = "all";

    function filterMenu() {

        const searchText = $("#menuSearch")
            .val()
            .trim()
            .toLowerCase();

        let visibleCount = 0;

        menuItems.each(function () {

            const item = $(this);

            const itemName = item.find("h3").text().toLowerCase();

            const itemDescription = item
                .find(".menu-desc-text")
                .text()
                .toLowerCase();

            const itemCategory = item.attr("data-category");

            const matchesSearch =
                itemName.includes(searchText) ||
                itemDescription.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                itemCategory === selectedCategory;

            const shouldShow = matchesSearch && matchesCategory;

            item.toggleClass("search-hidden", !shouldShow);

            if (shouldShow) {
                visibleCount++;
            }
        });

        // Update the result counter.
        $("#searchCount").text(
            visibleCount +
            (visibleCount === 1 ? " item found" : " items found")
        );

        // Show or hide the no-results message.
        $("#noResults").prop("hidden", visibleCount !== 0);

        // Hide sections that have no matching cards.
        $(".section").each(function () {

            const section = $(this);

            const hasVisibleItems =
                section.find(".menu-item:not(.search-hidden)").length > 0;

            section.toggleClass("search-hidden", !hasVisibleItems);
        });
    }

    // Search while typing.
    $("#menuSearch").on("input", filterMenu);

    // Category filters.
    $(".category-btn").on("click", function () {

        $(".category-btn").removeClass("active");

        $(this).addClass("active");

        selectedCategory = $(this).attr("data-category");

        filterMenu();
    });

    // Clear search.
    $("#clearSearch").on("click", function () {

        $("#menuSearch").val("");

        filterMenu();
    });

    // Initial state.
    filterMenu();

});
