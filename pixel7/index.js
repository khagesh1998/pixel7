

$(document).ready(function () {
  const writeToClipboard =  async (value) => {
    document.execCommand("copy")
    // alert("copy")
    // navigator.permissions.query({name: "clipboard-write"}).then((result) => {
    //   if (result.state === "granted" || result.state === "prompt") {
    //     /* write to the clipboard now */
    //     navigator.clipboard.writeText(value).then(() => {
    //       alert("successfully copied");
    //     }).catch(() => {
    //         alert("something went wrong");
    //       })
    //   }
    // });
    navigator.clipboard.writeText(value)
      .then(() => {
        alert("successfully copied");
      }).catch(() => {
        alert("something went wrong");
      })

    // try {
    //   const x = await navigator.clipboard.writeText("ljljlkjlk");
    //   console.log('Page URL copied to clipboard', x, navigator.clipboard);
    // } catch (err) {
    //   console.error('Failed to copy: ', err);
    // }

    // document.execCommand("copy")
  }

  // console.log("Hello World!");
  $('#userAgent').text(navigator.userAgent)
  // $('#platform').text(navigator.platform)
  // console.log(navigator)

  $('#userAgentButton').click(()=>{
    writeToClipboard(navigator.userAgent)
  })

  $('#urlButton').click(()=>{
    writeToClipboard("https://khagesh1998.github.io/pixel7/pixel7")
  })
});
