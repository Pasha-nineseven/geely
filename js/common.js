// Слайдер на главной
$('.nwmarkup.banner-s__slider').slick({
  arrows: false,
  slideToShow: 1,
  slideToScroll: 1,
  dots: true,
  speed: 1000
})

// Инициализация расхлопа в меню
$('#navigation #cars').on('click', function () {
  closeDropTech()
  toggleDropCars()
  $('body').toggleClass('overflow')
})

$('#navigation #tech').on('click', function () {
  closeDropCars()
  toggleDropTech()
  $('body').toggleClass('overflow')
})

$('.nwmarkup.drop-down__cross').on('click', function() {
  closeDrop()
  $('body').removeClass('overflow')
})


function toggleDropCars() {
  $('#dropDownCars').toggleClass('isopen').slideToggle()
  if ($('#dropDownCars').hasClass('isopen')) {
    $('#cars').next().addClass('show')
    $('#tech').next().removeClass('show')
  } else {
    $('#cars').next().removeClass('show')
  }
}

function toggleDropTech() {
  $('#dropDownTech').toggleClass('isopen').slideToggle()
  if ($('#dropDownTech').hasClass('isopen')) {
    $('#tech').next().addClass('show')
    $('#cars').next().removeClass('show')
  } else {
    $('#tech').next().removeClass('show')
  }
}

function closeDrop() {
  $('.nwmarkup.drop-down').removeClass('isopen').slideUp()
  $('.nwmarkup.drop-down-carret').removeClass('show')
}
function closeDropCars() {
  $('#dropDownCars').removeClass('isopen').slideUp()
  // $('.nwmarkup.drop-down-carret').removeClass('show')
}
function closeDropTech() {
  $('#dropDownTech').removeClass('isopen').slideUp()
  // $('.nwmarkup.drop-down-carret').removeClass('show')
}
// Фильтр расхлопа в меню
$('.drop-down__sidebar__link').on('click', function () {
  $('.drop-down__sidebar__item').removeClass('active')
  $(this).parent().addClass('active')

  if ($(this).attr('data-box') == 'all') {
    $('.drop-down__row__box').fadeIn()
    return false;
  }

  var attrValue = $(this).attr('data-box')
  $('.drop-down__row__box').hide()
  $(".drop-down__row__box[data-box=" + attrValue + "]").fadeIn()
})

// Аккордион
$("#accrodion .nwmarkup.news-s__accordion__content").hide().prev().click(function () {
  $(this).parents("#accrodion").find(".nwmarkup.news-s__accordion__content").not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
});


// Инициализация поиска
$('#search').on('click', function() {
  openSearch()
})

function openSearch() {
  $('.nwmarkup.search-down').fadeIn().addClass('show')
}

function closeSearch() {
  $('.nwmarkup.search-down').removeClass('show')
  setTimeout(function () {
    $('.nwmarkup.search-down').fadeOut()
  }, 300)
}

$('.nwmarkup.search-down__bg').on('click', function(e) {
  if(e.target == this) {
    closeSearch()
  }
})

$('.nwmarkup.search-down__cross').on('click', function() {
  closeSearch()
})

// Мобильное меню

$(".nwmarkup.burger").click(function () {
  if(!$(this).hasClass('back')) {
    $(this).toggleClass("on");
    $('.nwmarkup.mobile-nav').slideToggle()
    $('body').toggleClass("overflow-mobile");
  } else {
    showPrevItem()
  }
});

var prevItem = $('.mobile-nav__prev')

var windowWidth = $(window).outerWidth()

function showNextItem(item) {
  $('.mobile-nav__next').css('order', '3')
  var nextItem = $(".mobile-nav__next[data-link='"+ item +"']")
  prevItem.css('margin-left', -windowWidth + 'px')
  $('.mobile-nav__next:not([data-link=' + item + '])').css('order', '2')
  nextItem.addClass('active')
  $('.nwmarkup.burger').addClass('back')
}

function showPrevItem(item) {
  var nextItem = $('.mobile-nav__next')
  prevItem.css('margin-left', '0px')
  nextItem.removeClass('active')
  $('.nwmarkup.burger').removeClass('back')
}

$(window).on('resize', function () {
  var nextItem = $('.mobile-nav__next')
  windowWidth = $(window).width()

  prevItem.css('width', windowWidth)
  nextItem.css('width', windowWidth)

  if (nextItem.hasClass('active')) {
    prevItem.css('margin-left', -windowWidth + 'px')
    prevItem.addClass('no-transition')

    setTimeout(function(){
      prevItem.removeClass('no-transition')
    }, 100)
  }
})

$('.mobile-nav__link').on('click', function () {
  if(!$(this).attr('data-link')) {
    return false;
  }
  var item = $(this).attr('data-link')
  showNextItem(item)
})