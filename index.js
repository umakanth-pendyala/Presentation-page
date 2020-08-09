$("#navbar a, .btn").on("click", function (event) {
  if (this.hash != "") {
    // alert("i am in loop");
    event.preventDefault();
    const hash = this.hash;
    console.log(hash);

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
