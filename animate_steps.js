function main() {
  $('.blobs').click(function () {
    $('#middle').addClass('animated');
    $('#blob1').addClass('animated');
    $('#blob2').addClass('animated');
    $('.blobs').addClass('float')
  })

  $('#blob1').bind('webkitAnimationEnd mozAnimationEnd animationend', function () {
    $('#blob1').removeClass('animatedR');
    $('#blob2').removeClass('animatedR');
  })

  $('.blobs .blob').on('click', function (e) {
    const baseArticleName = '.info-content'
    $('.info-content article').map((ind, el) => {
      el.classList.remove('active')
    });
    $(`${baseArticleName}-${e.target.name}`).addClass('active');
  })
}

window.addEventListener('load', function () {
  main();
})