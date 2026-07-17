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
const manifestPage = document.getElementById("manifestingPage");
const excellentTastePage = document.getElementById("excellentTastePage");
const voiceNotePage = document.getElementById("voiceNotePage");
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
const voiceNoteBtn = document.getElementById("voiceNoteBtn");
const kissNoteBtn = document.getElementById("kissNoteBtn");
const manifestIntro = manifestPage.querySelector(".manifesting-intro");
const manifestCards = Array.from(manifestPage.querySelectorAll(".manifesting-video-card"));
const manifestVideos = manifestCards.map((card) => card.querySelector("video"));

const pages = [
  introPage,
  messageOnePage,
  voiceNotePage,
  trustPage,
  gifPage,
  choicePage,
  splitPage,
  cutePage,
  revealPage,
  dogGifPage,
  laterPage,
  manifestPage,
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
      showPage(voiceNotePage);
    }, 5000);
  }, 5000);
});

function playAudio(fileName, onEnded) {
  const audio = new Audio(fileName);
  audio.addEventListener("ended", () => {
    if (onEnded) onEnded();
  });
  audio.play().catch(() => {
    console.log(`Audio file not available yet. Add a file named ${fileName} to the project folder.`);
    if (onEnded) onEnded();
  });
}

voiceNoteBtn.addEventListener("click", () => {
  playAudio("voice-note.mp3", () => {
    showPage(trustPage);
  });
});

kissNoteBtn.addEventListener("click", () => {
  playAudio("kiss.mp3");
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

function resetManifestSequence() {
  manifestIntro.classList.remove("is-visible");
  manifestCards.forEach((card) => card.classList.remove("is-visible"));
  manifestVideos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}

function playManifestSequence() {
  resetManifestSequence();
  manifestIntro.classList.add("is-visible");

  let stageIndex = 0;

  function showStage(index) {
    manifestCards.forEach((card, cardIndex) => {
      card.classList.toggle("is-visible", cardIndex === index);
    });

    manifestVideos.forEach((video) => {
      video.classList.remove("is-visible");
    });

    const currentVideo = manifestVideos[index];
    if (!currentVideo) return;

    currentVideo.currentTime = 0;

    const finishStage = () => {
      currentVideo.removeEventListener("ended", finishStage);
      currentVideo.removeEventListener("error", failStage);
      currentVideo.classList.remove("is-visible");
      if (index < manifestCards.length - 1) {
        setTimeout(() => showStage(index + 1), 900);
      } else {
        setTimeout(() => {
          showPage(proposalPage);
        }, 2000);
      }
    };

    const failStage = () => {
      currentVideo.removeEventListener("ended", finishStage);
      currentVideo.removeEventListener("error", failStage);
      currentVideo.classList.remove("is-visible");
      if (index < manifestCards.length - 1) {
        setTimeout(() => showStage(index + 1), 900);
      } else {
        setTimeout(() => {
          showPage(proposalPage);
        }, 2000);
      }
    };

    currentVideo.addEventListener("ended", finishStage);
    currentVideo.addEventListener("error", failStage);

    setTimeout(() => {
      currentVideo.classList.add("is-visible");
      currentVideo.play().catch(() => {
        failStage();
      });
    }, 700);
  }

  setTimeout(() => {
    showStage(stageIndex);
  }, 1600);
}

revealBtn.addEventListener("click", () => {
  showPage(dogGifPage);
  setTimeout(() => {
    showPage(laterPage);
    setTimeout(() => {
      showPage(manifestPage);
      setTimeout(() => {
        playManifestSequence();
      }, 300);
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
