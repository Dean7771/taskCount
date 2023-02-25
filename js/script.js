function submit() {
  let inputOrg = document.getElementById("1").value;
  let inputBase = document.getElementById("2").value;
  let inputLevel = document.getElementById("3").value;
  let inputText = document.getElementById("4").value;

  if ((inputLevel = 1)) inputLevel_1 = "Легко";
  else if ((inputLevel = 2)) inputLevel_1 = "Средне";
  else if ((inputLevel = 2)) inputLevel_1 = "Срочно";

  var con = confirm(
    "Организация: " +
      inputOrg +
      "\nНазвание базы данных: " +
      inputBase +
      "\nПриоритет задачи: " +
      inputLevel_1 +
      "\nОписание задачи: " +
      inputText
  );

  if ((con = false)) {
    alert("Мы отправили все данные.");
  } else {
    alert("Заполните повторно, если допустили ошибку");
  }

  /*   console.log(inputOrg);
  console.log(inputBase);
  console.log(inputLevel_1);
  console.log(inputText); */
}
