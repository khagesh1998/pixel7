
$(document).ready(function () {
  // console.log("Hello World!");
  $('#userAgent').text(navigator.userAgent)
  // $('#platform').text(navigator.platform)
  // console.log(navigator)

  $('#userAgentButton').click(()=>{
    navigator.clipboard.writeText(navigator.userAgent);
  })

  $('#urlButton').click(()=>{
    navigator.clipboard.writeText("https://khagesh1998.github.io/pixel7/");
  })
});
