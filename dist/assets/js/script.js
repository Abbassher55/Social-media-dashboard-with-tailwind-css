// ********* Dark Mode Code Start

const userPrefersDark = localStorage.getItem("theme") === "dark";
const htmlElement = document.documentElement;
const darkModeToggle = document.getElementById("dark_mode");

if (userPrefersDark) {
  htmlElement.classList.add("dark");
  darkModeToggle.checked = true;
}

// Toggle dark mode
const toggleDarkMode = () => {
  const isDarkMode = htmlElement.classList.toggle("dark");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};

// Event listener for the checkbox
darkModeToggle.addEventListener("change", toggleDarkMode);
// ********* Dark Mode Code End

// ********* Followers card section Start
const followerCards = document.getElementById("followerCardsArea");
const followerCardsData = [
  {
    logo: "./assets/imgs/icon-facebook.svg",
    platform: "facebook",
    accountName: "@nathanf",
    followersCount: 1987,
    followers: "followers",
    todayCount: 12,
    borderTopGradient: "facebook-border",
  },
  {
    logo: "./assets/imgs/icon-twitter.svg",
    platform: "twitter",
    accountName: "@nathanf",
    followersCount: 1044,
    followers: "followers",
    todayCount: 99,
    borderTopGradient: "twitter-border",
  },
  {
    logo: "./assets/imgs/icon-instagram.svg",
    platform: "instagram",
    accountName: "@realnathanf",
    followersCount: 1044,
    followers: "followers",
    todayCount: 1099,
    borderTopGradient: "instagram-border",
  },
  {
    logo: "./assets/imgs/icon-youtube.svg",
    platform: "youtube",
    accountName: "@realnathanf",
    followersCount: 8239,
    followers: "Subscribers",
    todayCount: 1099,
    borderTopGradient: "youtube-border",
  },
];

followerCards.innerHTML = "";

followerCardsData.forEach((card) => {
  followerCards.innerHTML += `
    <div class="rounded-lg pt-2 bg-gradient-to-r ${card.borderTopGradient}">
      <div class="rounded-t-none rounded-md p-8 flex justify-center items-center flex-col bg-card-light-bg dark:bg-card-dark-bg">
        <div class="flex">
          <div class="icon mr-2">
            <img src="${card.logo}" alt="Comapny logo" />
          </div>
          <span class="platform font-bold text-custom-purple">${card.accountName}</span>
        </div>
        <p class="text-center mt-7 font-bold text-6xl dark:text-white">${card.followersCount}</p>
        <span class="inline-block uppercase tracking-[5px] mt-3 text-xs text-custom-purple font-inter">${card.followers}</span>
        <div class="mt-6">
          <div class="flex text-center items-center font-bold">
            <div class="caret mr-1">
              <img src="./assets/imgs/icon-up.svg" alt="Caret" />
            </div>
            <div class="text-custom-green">
              <span class="today-count">${card.todayCount}</span>
              <span>Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

// ********* Followers card section End

// ********* todayOverview card section Start
const todayOverview = document.getElementById("todayOverview");
const todayOverviewData = [
  {
    title: "Page Views",
    platformLogo: "./assets/imgs/icon-facebook.svg",
    count: 87,
    percentage: 3,
    increase: true,
    upCaret: "./assets/imgs/icon-up.svg",
    downCaret: "./assets/imgs/icon-down.svg",
  },
  {
    title: "likes",
    platformLogo: "./assets/imgs/icon-facebook.svg",
    count: 52,
    percentage: 2,
    increase: false,
    upCaret: "./assets/imgs/icon-up.svg",
    downCaret: "./assets/imgs/icon-down.svg",
  },
  {
    title: "likes",
    platformLogo: "./assets/imgs/icon-instagram.svg",
    count: 5462,
    percentage: 2257,
    increase: true,
    upCaret: "./assets/imgs/icon-up.svg",
    downCaret: "./assets/imgs/icon-down.svg",
  },
  {
    title: "Profile Views",
    platformLogo: "./assets/imgs/icon-instagram.svg",
    count: "52k",
    percentage: 1375,
    increase: true,
    upCaret: "./assets/imgs/icon-up.svg",
    downCaret: "./assets/imgs/icon-down.svg",
  },
  {
    title: "Retweets",
    platformLogo: "./assets/imgs/icon-twitter.svg",
    count: 117,
    percentage: 303,
    increase: true,
    upCaret: "./assets/imgs/icon-up.svg",
    downCaret: "./assets/imgs/icon-down.svg",
  },
  {
    title: "Likes",
    platformLogo: "./assets/imgs/icon-twitter.svg",
    count: 507,
    percentage: 553,
    increase: true,
    upCaret: "./assets/imgs/icon-up.svg",
    downCaret: "./assets/imgs/icon-down.svg",
  },
  {
    title: "Likes",
    platformLogo: "./assets/imgs/icon-youtube.svg",
    count: 107,
    percentage: 19,
    increase: false,
    upCaret: "./assets/imgs/icon-up.svg",
    downCaret: "./assets/imgs/icon-down.svg",
  },
  {
    title: "Total Views",
    platformLogo: "./assets/imgs/icon-youtube.svg",
    count: 1407,
    percentage: 12,
    increase: false,
    upCaret: "./assets/imgs/icon-up.svg",
    downCaret: "./assets/imgs/icon-down.svg",
  },
];

// ********* todayOverview card section End
todayOverview.innerHTML = "";
todayOverviewData.forEach((overviewCard) => {
  const caretImgSrc = overviewCard.increase ? overviewCard.upCaret : overviewCard.downCaret;
  todayOverview.innerHTML += `
    <div class="rounded-md p-6 bg-card-light-bg dark:bg-card-dark-bg">
      <div class="flex justify-between">
        <div class="font-bold dark:text-custom-purple capitalize text-custom-slate text-sm">${overviewCard.title}</div>
        <div class="platform-icon">
          <img src="${overviewCard.platformLogo}" alt="Platform logo image" />
        </div>
      </div>
      <div class="flex items-baseline justify-between mt-6">
        <p class="text-center font-bold text-3xl dark:text-white">${overviewCard.count}</p>
        <div class='${overviewCard.increase ? "text-custom-green" : "custom-red"} flex items-baseline font-bold'>
          <div class="caret mr-1">
            <img src='${caretImgSrc}' alt="Caret image" />
          </div>
          <span class="today-count">${overviewCard.percentage}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  `;
});
