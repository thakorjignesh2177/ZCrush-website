// ZCrußh Website


// ================= START BUTTON =================

const startButton = document.querySelector(".start-btn");

if (startButton) {

  startButton.addEventListener("click", function() {

    const features =
      document.querySelector(".features");

    if (features) {

      features.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

}


// ================= LOGIN =================

const loginButton =
  document.querySelector(".login");

const signupButton =
  document.querySelector(".signup");


const loginModal =
  document.querySelector("#loginModal");

const closeLogin =
  document.querySelector("#closeLogin");

const loginForm =
  document.querySelector("#loginForm");

const loginMessage =
  document.querySelector("#loginMessage");


if (loginButton && loginModal) {

  loginButton.addEventListener("click", function() {

    loginModal.style.display = "flex";

  });

}


if (closeLogin && loginModal) {

  closeLogin.addEventListener("click", function() {

    loginModal.style.display = "none";

  });

}


if (loginForm && loginMessage) {

  loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    loginMessage.textContent =
      "Login system will be connected to the database later.";

  });

}


if (loginModal) {

  loginModal.addEventListener("click", function(event) {

    if (event.target === loginModal) {

      loginModal.style.display = "none";

    }

  });

}


// ================= SIGN UP =================

const signupModal =
  document.querySelector("#signupModal");

const closeSignup =
  document.querySelector("#closeSignup");

const signupForm =
  document.querySelector("#signupForm");

const signupMessage =
  document.querySelector("#signupMessage");


if (signupButton && signupModal) {

  signupButton.addEventListener("click", function() {

    signupModal.style.display = "flex";

  });

}


if (closeSignup && signupModal) {

  closeSignup.addEventListener("click", function() {

    signupModal.style.display = "none";

  });

}


if (signupForm && signupMessage) {

  signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    signupMessage.textContent =
      "Account system will be connected to the database later.";

  });

}


if (signupModal) {

  signupModal.addEventListener("click", function(event) {

    if (event.target === signupModal) {

      signupModal.style.display = "none";

    }

  });

}


// ================= SHORTS VIEWER =================

const watchButtons =
  document.querySelectorAll(".watch-btn");

const shortViewer =
  document.querySelector("#shortViewer");

const closeShort =
  document.querySelector("#closeShort");

const likeButton =
  document.querySelector("#likeButton");

const commentButton =
  document.querySelector("#commentButton");

const shareButton =
  document.querySelector("#shareButton");

const viewerMessage =
  document.querySelector("#viewerMessage");


if (watchButtons.length && shortViewer) {

  watchButtons.forEach(function(button) {

    button.addEventListener("click", function() {

      shortViewer.style.display = "flex";

      if (viewerMessage) {

        viewerMessage.textContent = "";

      }

    });

  });

}


if (closeShort && shortViewer) {

  closeShort.addEventListener("click", function() {

    shortViewer.style.display = "none";

  });

}


if (shortViewer) {

  shortViewer.addEventListener("click", function(event) {

    if (event.target === shortViewer) {

      shortViewer.style.display = "none";

    }

  });

}


if (likeButton && viewerMessage) {

  likeButton.addEventListener("click", function() {

    viewerMessage.textContent =
      "❤️ Liked!";

  });

}


if (commentButton && viewerMessage) {

  commentButton.addEventListener("click", function() {

    viewerMessage.textContent =
      "💬 Comment feature coming soon!";

  });

}


if (shareButton && viewerMessage) {

  shareButton.addEventListener("click", function() {

    viewerMessage.textContent =
      "🔗 Share feature coming soon!";

  });

}


// =====================================================
//                    NOTIFICATIONS
// =====================================================

/*
  Notification system
  Used by social.html

  Data is currently stored in localStorage.
  Later, when database/cloud is added,
  this can be connected to the backend.
*/


function getNotifications() {

  try {

    const data =
      JSON.parse(
        localStorage.getItem(
          "zcrushNotifications"
        ) || "[]"
      );

    return Array.isArray(data)
      ? data
      : [];

  } catch (error) {

    return [];

  }

}


function saveNotifications(list) {

  localStorage.setItem(
    "zcrushNotifications",
    JSON.stringify(list)
  );

}


function addNotification(
  text,
  type = "general"
) {

  const notifications =
    getNotifications();

  notifications.unshift({

    id:
      "notification_" +
      Date.now() +
      "_" +
      Math.random()
        .toString(36)
        .substring(2, 8),

    text: text,

    type: type,

    read: false,

    time: Date.now()

  });


  /*
    Keep maximum 50 notifications
  */

  saveNotifications(
    notifications.slice(0, 50)
  );


  renderNotifications();

}


function toggleNotifications() {

  const panel =
    document.getElementById(
      "notificationPanel"
    );

  if (!panel) return;

  panel.classList.toggle("show");

  renderNotifications();

}


function markAllNotificationsRead() {

  const notifications =
    getNotifications();


  notifications.forEach(
    function(notification) {

      notification.read = true;

    }
  );


  saveNotifications(
    notifications
  );


  renderNotifications();

}


function escapeNotificationHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function escapeNotificationAttribute(value) {

  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");

}


function renderNotifications() {

  const list =
    document.getElementById(
      "notificationList"
    );

  const badge =
    document.getElementById(
      "notificationBadge"
    );


  /*
    Important:
    If notification HTML is not on the current page,
    simply stop.
  */

  if (!list || !badge) return;


  const notifications =
    getNotifications();


  const unread =
    notifications.filter(
      function(notification) {

        return !notification.read;

      }
    ).length;


  badge.textContent =
    unread > 99
      ? "99+"
      : unread;


  badge.style.display =
    unread > 0
      ? "flex"
      : "none";


  if (notifications.length === 0) {

    list.innerHTML = `

      <div class="noNotification">
        🔔 No notifications yet.
      </div>

    `;

    return;

  }


  list.innerHTML =
    notifications
      .map(function(notification) {

        const time =
          new Date(
            notification.time
          ).toLocaleString();


        return `

          <div
            class="notificationItem ${
              notification.read
                ? ""
                : "unread"
            }"
            data-notification-id="${escapeNotificationHTML(
              notification.id
            )}"
          >

            ${escapeNotificationHTML(
              notification.text
            )}

            <small>
              ${escapeNotificationHTML(
                time
              )}
            </small>

          </div>

        `;

      })
      .join("");


  /*
    Add click events safely
  */

  const items =
    list.querySelectorAll(
      ".notificationItem"
    );


  items.forEach(function(item) {

    item.addEventListener(
      "click",
      function() {

        readNotification(
          item.dataset.notificationId
        );

      }
    );

  });

}


function readNotification(id) {

  const notifications =
    getNotifications();


  const notification =
    notifications.find(
      function(item) {

        return item.id === id;

      }
    );


  if (!notification) return;


  notification.read = true;


  saveNotifications(
    notifications
  );


  renderNotifications();

}


// ================= CLOSE NOTIFICATION =================

document.addEventListener(
  "click",
  function(event) {

    const wrap =
      document.querySelector(
        ".notificationWrap"
      );

    const panel =
      document.getElementById(
        "notificationPanel"
      );


    if (
      wrap &&
      panel &&
      !wrap.contains(event.target)
    ) {

      panel.classList.remove(
        "show"
      );

    }

  }
);


// ================= INITIAL LOAD =================

renderNotifications();