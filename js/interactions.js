// task 0: select elements and update content

const welcomeForm = document.getElementById("welcomeForm");
const visitorName = document.getElementById("visitorName");
const welcomeMessage = document.querySelector("#welcomeMessage");

welcomeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = visitorName.value.trim();

    if (name === "") {
        welcomeMessage.textContent =
            "Please enter your name before continuing.";
        return;
    }

    welcomeMessage.textContent =
        `Welcome to Yummy Cafe, ${name}! We hope you enjoy your visit.`;
});


// task 1: change appearance with classes

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    const isDarkTheme = document.body.classList.contains("dark-theme");

    if (isDarkTheme) {
        themeToggle.textContent = "Switch to Light Theme";
        themeToggle.setAttribute("aria-pressed", "true");
    } else {
        themeToggle.textContent = "Switch to Dark Theme";
        themeToggle.setAttribute("aria-pressed", "false");
    }
});


// task 2: show and hide information

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const answerId = question.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        const isCurrentlyExpanded =
            question.getAttribute("aria-expanded") === "true";

        // Reverse the current expanded state.
        question.setAttribute(
            "aria-expanded",
            String(!isCurrentlyExpanded)
        );

        answer.hidden = isCurrentlyExpanded;

        const icon = question.querySelector(".faq-icon");

        if (icon !== null) {
            icon.textContent = isCurrentlyExpanded ? "+" : "−";
        }
    });
});


// task 3: filter content as the user types

const menuSearch = document.getElementById("menuSearch");
const menuItems = document.querySelectorAll("[data-menu-item]");
const searchCount = document.getElementById("searchCount");
const noResults = document.getElementById("noResults");

function filterMenuItems() {
    const searchText = menuSearch.value.trim().toLowerCase();
    let matchingItems = 0;

    menuItems.forEach(function (item) {
        const titleElement = item.querySelector(".menu-item-title");
        const title = titleElement.textContent.trim().toLowerCase();

        const matches = title.includes(searchText);

        item.hidden = !matches;

        if (matches) {
            matchingItems++;
        }
    });

    searchCount.textContent =
        `${matchingItems} ${matchingItems === 1 ? "item" : "items"} found.`;

    noResults.hidden = matchingItems !== 0;
}

menuSearch.addEventListener("input", filterMenuItems);

// Initialize the count when the page loads.
filterMenuItems();


// task 4: create and remove elements

const favoriteForm = document.getElementById("favoriteForm");
const favoriteInput = document.getElementById("favoriteInput");
const favoriteList = document.getElementById("favoriteList");
const favoriteCount = document.getElementById("favoriteCount");
const favoriteFeedback = document.getElementById("favoriteFeedback");

function updateFavoriteCount() {
    const totalFavorites = favoriteList.children.length;

    favoriteCount.textContent =
        `Favorites: ${totalFavorites}`;
}

favoriteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const favoriteName = favoriteInput.value.trim();

    if (favoriteName === "") {
        favoriteFeedback.textContent =
            "Please enter the name of a menu item.";
        favoriteFeedback.style.color = "#c34c4c";
        return;
    }

    // Create the list item.
    const listItem = document.createElement("li");
    listItem.classList.add("favorite-item");

    // Create the name element.
    const nameElement = document.createElement("span");
    nameElement.classList.add("favorite-name");
    nameElement.textContent = favoriteName;

    // Create the remove button.
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute(
        "aria-label",
        `Remove ${favoriteName} from favorites`
    );

    // Remove only this specific list item.
    removeButton.addEventListener("click", function () {
        listItem.remove();

        updateFavoriteCount();

        favoriteFeedback.textContent =
            `${favoriteName} was removed from your favorites.`;
        favoriteFeedback.style.color = "var(--text-color)";
    });

    // Assemble and add the new item.
    listItem.append(nameElement, removeButton);
    favoriteList.append(listItem);

    // Update the page after adding the item.
    updateFavoriteCount();

    favoriteFeedback.textContent =
        `${favoriteName} was added to your favorites.`;
    favoriteFeedback.style.color = "var(--text-color)";

    favoriteForm.reset();
    favoriteInput.focus();
});

// Set the initial count.
updateFavoriteCount();