    $(function () {
      $("#btn").click(function () {
        var password = $("#pswrd_1").val();
        var confirmPassword = $("#pswrd_2").val();
        if (password != confirmPassword) {
          alert("Passwords do not match.");
          return false;
        }
        return true;
      });
    });
