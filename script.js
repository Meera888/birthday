const introPage = document.getElementById("intro");
const messageOnePage = document.getElementById("messageOne");
const trustPage = document.getElementById("trustPage");
const proposalPage = document.getElementById("proposal");
const gifPage = document.getElementById("gifPage");
const choicePage = document.getElementById("choicePage");
const splitPage = document.getElementById("splitPage");
const cutePage = document.getElementById("cutePage");
const revealPage = document.getElementById("revealPage");
const dogGifPage = document.getElementById("dogGifPage");
const laterPage = document.getElementById("laterPage");
const excellentTastePage = document.getElementById("excellentTastePage");
const letterPage = document.getElementById("letterPage");
const planPage = document.getElementById("planPage");
const acceptPage = document.getElementById("acceptPage");
const birthdayPage = document.getElementById("birthdayPage");
const maybeBtn = document.getElementById("maybeBtn");
const yesBtn = document.getElementById("yesBtn");
const notReallyBtn = document.getElementById("notReallyBtn");
const riskBtn = document.getElementById("riskBtn");
const revealBtn = document.getElementById("revealBtn");
const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");
const viewPlanBtn = document.getElementById("viewPlanBtn");
const acceptBtn = document.getElementById("acceptBtn");

const pages = [
  introPage,
  messageOnePage,
  trustPage,
  gifPage,
  choicePage,
  splitPage,
  cutePage,
  revealPage,
  dogGifPage,
  laterPage,
  proposalPage,
  excellentTastePage,
  letterPage,
  planPage,
  acceptPage,
  birthdayPage,
];

function showPage(page) {
  pages.forEach((item) => item.classList.remove("active"));
  page.classList.add("active");
}

function moveButton(button, container) {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const maxLeft = Math.max(0, containerRect.width - buttonRect.width - 24);
  const maxTop = Math.max(0, containerRect.height - buttonRect.height - 24);

  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop;

  button.style.left = `${left}px`;
  button.style.top = `${top}px`;
}

window.addEventListener("load", () => {
  setTimeout(() => {
    showPage(messageOnePage);
    setTimeout(() => {
      showPage(trustPage);
    }, 5000);
  }, 5000);
});

notReallyBtn.addEventListener("mouseenter", () => {
  moveButton(notReallyBtn, trustPage.querySelector(".card"));
});

riskBtn.addEventListener("click", () => {
  showPage(gifPage);
  setTimeout(() => {
    showPage(choicePage);
    setTimeout(() => {
      showPage(splitPage);
      setTimeout(() => {
        showPage(cutePage);
        setTimeout(() => {
          showPage(revealPage);
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
});

revealBtn.addEventListener("click", () => {
  showPage(dogGifPage);
  setTimeout(() => {
    showPage(laterPage);
    setTimeout(() => {
      showPage(proposalPage);
    }, 5000);
  }, 5000);
});

maybeBtn.addEventListener("mouseenter", () => {
  moveButton(maybeBtn, proposalPage.querySelector(".card"));
});

yesBtn.addEventListener("click", () => {
  showPage(excellentTastePage);
});

openEnvelopeBtn.addEventListener("click", () => {
  showPage(letterPage);
});

viewPlanBtn.addEventListener("click", () => {
  showPage(planPage);
});

acceptBtn.addEventListener("click", () => {
  showPage(acceptPage);
  setTimeout(() => {
    showPage(birthdayPage);
  }, 5000);
});
