function submit() {
  let inputOrg = document.getElementById("1").value;
  let inputBase = document.getElementById("2").value;
  let inputLevel = document.getElementById("3").value;
  let inputText = document.getElementById("4").value;

  if (
    inputOrg == "" ||
    inputBase == "" ||
    inputLevel == "" ||
    inputText == ""
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

    var windowConfirm = confirm(
      "Организация: " +
        inputOrg +
        "\nНазвание базы данных: " +
        inputBase +
        "\nПриоритет задачи: " +
        inputLevel +
        "\nОписание задачи: " +
        inputText
    );

    if (windowConfirm) {
      alert("Мы отправили все данные.");
    } else if (!windowConfirm) {
      alert("Данные не были отправлены.");
    }
  }

  /*   console.log(inputOrg + " 1");
  console.log(inputBase + " 2");
  console.log(inputLevel + " 3");
  console.log(inputText + " 4"); */
}
