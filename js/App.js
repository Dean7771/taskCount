const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrcnl3YnBvZ2F5ZHZncm9obGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTYxMTcsImV4cCI6MTk5Mjk3MjExN30.c4CdhOgUpswYjL6VLzIkYhzvssO4xkS4jPDQN61vvZw";

const url = "https://lkrywbpogaydvgrohlje.supabase.co";

const database = supabase.createClient(url, key);

let save = document.querySelector("#save");
save.addEventListener("click", async (e) => {
  e.preventDefault();
  let Name_Org = document.getElementById("1").value;
  let Name_Base = document.getElementById("2").value;
  let Lvl_priority = document.getElementById("3").value;
  let All_Text = document.getElementById("4").value;

  if (
    Name_Org == "" ||
    Name_Base == "" ||
    Lvl_priority == "" ||
    All_Text == ""
  ) {
    alert("Заполните поля.");
  } else {
    if ((inputLevel = 1)) {
      inputLevel = "Низкий";
    } else if ((inputLevel = 2)) {
      inputLevel = "Обычный";
    } else if ((inputLevel = 2)) {
      inputLevel = "Срочно";
    }

    let windowConfirm = confirm(
      "Организация: " +
        Name_Org +
        "\nНазвание базы данных: " +
        Name_Base +
        "\nПриоритет задачи: " +
        Lvl_priority +
        "\nОписание задачи: " +
        All_Text
    );

    if (windowConfirm) {
      let res = await database.from("taskcount").insert({
        Name_Org: Name_Org,
        Name_Base: Name_Base,
        Lvl_priority: Lvl_priority,
        All_Text: All_Text,
      });

      let inputFile = document.getElementById("image");
      let file = inputFile.files[0];

      const { data, error } = await database.storage
        .from("images")
        .upload("public/" + file?.name, file);

      /*      if (data) {
        console.log(data);
      } else if (error) {
        console.log(error);
      } */

      alert("Мы отправили все данные.");
      document.getElementById("1").value = "";
      document.getElementById("2").value = "";
      document.getElementById("3").value = "";
      document.getElementById("image").value = "";
      document.getElementById("4").value = "";
    } else if (!windowConfirm) {
      alert("Данные не были отправлены.");
    }
  }
});
