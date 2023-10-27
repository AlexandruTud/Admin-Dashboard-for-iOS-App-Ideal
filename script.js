

$(document).ready(function() {
  let sidebar = $(".sidebar");
  let closeBtn = $("#btn");

  closeBtn.click(function() {
    sidebar.toggleClass("open");
    menuBtnChange();
  });

  function menuBtnChange() {
    if (sidebar.hasClass("open")) {
      closeBtn.removeClass("bx-menu").addClass("bx-menu-alt-right");
    } else {
      closeBtn.removeClass("bx-menu-alt-right").addClass("bx-menu");
    }
  }

  const homeSection = $(".home-section");
  const commentsSection = $(".comments-section");
  const historySection = $(".history-section");
  const settingsSection = $(".settings-section");

  const loadHomeSection = async function() {
      try {
          const response = await fetch("home-section.html");
          if (response.ok) {
              const content = await response.text();
              homeSection.html(content);
          } else {
              console.error("Eroare la încărcarea conținutului.");
          }
      } catch (error) {
          console.error("Eroare la încărcarea conținutului:", error);
      }
  };

  const loadCommentsSection = async function() {
      try {
          const response = await fetch("comments-section.html");
          if (response.ok) {
              const content = await response.text();
              commentsSection.html(content);
          } else {
              console.error("Eroare la încărcarea conținutului.");
          }
      } catch (error) {
          console.error("Eroare la încărcarea conținutului:", error);
      }
  };

  const loadHistorySection = async function() {
      try {
          const response = await fetch("history-section.html");
          if (response.ok) {
              const content = await response.text();
              historySection.html(content);
          } else {
              console.error("Eroare la încărcarea conținutului.");
          }
      } catch (error) {
          console.error("Eroare la încărcarea conținutului:", error);
      }
  };

  const loadSettingsSection = async function() {
      try {
          const response = await fetch("settings-section.html");
          if (response.ok) {
              const content = await response.text();
              settingsSection.html(content);
          } else {
              console.error("Eroare la încărcarea conținutului.");
          }
      } catch (error) {
          console.error("Eroare la încărcarea conținutului:", error);
      }
  };

  commentsSection.hide();
  historySection.hide();
  settingsSection.hide();

  loadHomeSection();

  $("#dash").click(function() {
      homeSection.hide();
      commentsSection.hide();
      historySection.hide();
      settingsSection.hide();

      loadHomeSection();
      homeSection.show();
  });

  $("#comments").click(function() {
      homeSection.hide();
      commentsSection.hide();
      historySection.hide();
      settingsSection.hide();

      loadCommentsSection();
      commentsSection.show();
  });

  $("#history").click(function() {
      homeSection.hide();
      commentsSection.hide();
      historySection.hide();
      settingsSection.hide();

      loadHistorySection();
      historySection.show();
  });

  $("#settings").click(function() {
      homeSection.hide();
      commentsSection.hide();
      historySection.hide();
      settingsSection.hide();

      loadSettingsSection();
      settingsSection.show();
  });


commentsSection.hide();
historySection.hide();
settingsSection.hide();

$("#dash-navbar").click(function() {
    homeSection.hide();
    commentsSection.hide();
    historySection.hide();
    settingsSection.hide();

    loadHomeSection();
    homeSection.show();
});

$("#comments-navbar").click(function() {
    homeSection.hide();
    commentsSection.hide();
    historySection.hide();
    settingsSection.hide();

    loadCommentsSection();
    commentsSection.show();
});

$("#history-navbar").click(function() {
    homeSection.hide();
    commentsSection.hide();
    historySection.hide();
    settingsSection.hide();

    loadHistorySection();
    historySection.show();
});

$("#settings-navbar").click(function() {
    homeSection.hide();
    commentsSection.hide();
    historySection.hide();
    settingsSection.hide();

    loadSettingsSection();
    settingsSection.show();
});

});

