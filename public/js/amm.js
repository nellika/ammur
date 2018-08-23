var steps = [
  {step: 0,
  title: 'Szép jó reggelt Ammur (26)!',
  instruction: '<p>Úgy látszik, megértél egy kis kalandra...</p>' +
               '<p>Készen állsz?</p>',
  btnTxt: "I'm in!",
  img: {src: 'img/hi-50.jpg', alt:"Link says hi to your birthday"},
  pwd: 'null'},

  {step: 1,
  title: 'Éhes vándor nem jut messzire...',
  instruction: '<p>Indulnál már, tudom,</p>' +
               '<p>De mi lesz így az úton?</p><br>' +
               '<p>Szükség van energiára</p>' +
               '<p>Vadászat ennek az ára!</p><br>' +
               '<p><span class="location">Konyhá</span>ban az eszköz, s a vad</p>' +
               '<p>A <span class="location">szekrény</span>ből el nem szalad.</p>',
  btnTxt: 'Jelentem, ettem!',
  img: {src: 'img/hungry-50.jpg', alt:"Hungry adventurer"},
  pwd: 'null'},

  {step: 2,
  title: 'No de a felszerelés?',
  instruction: '<p>Mielőtt kilépnél a házból,</p>' +
               '<p>A <span class="location">kamrá</span>t nézd meg jól!</p><br>' +
               '<p>Találsz ott foltos zsákot</p>' +
               '<p>Rakhatod bele kis kardod.</p>',
  btnTxt: 'Megvan!',
  img: {src: 'img/bpack-50.jpg', alt:"Adventurer with backpack"},
  pwd: 'Mario'},

  {step: 3,
  title: 'Nehéz a munka...',
  instruction: '<p>Neki vághatsz most már!</p>' +
               '<p>A vonat ugyan nem vár...</p><br>' +
               '<p><span class="location">Munkahely</span>ed üresnek tűnhet.</p>' +
               '<p>Kis szekrényed azért nézd meg!</p><br>' +
               '<p>Az <span class="location">alsó fiók</span>ban tán?</p>' +
               '<p>Ajándék nem terem a fán...</p>',
  btnTxt: 'Indul a munka!',
  img: {src: 'img/work-50.jpg', alt:"The hero starts working"},
  pwd: 'lifeIsRunning'},

  {step: 4,
  title: 'Harc a munkában...',
  instruction: '<p>Dolgozni sokat kell...</p>' +
               '<p>Délután 5-ig a harcos csak gépel.</p><br>' +
               '<p>Amint vége az izgalmaknak,</p>' +
               '<p>Adj egy esélyt egy kis <span class="location">japán</span>nak.</p><br>' +
               '<p>Van egy hely, hol sok az étel,</p>' +
               '<p>SZÉP kártyánknak ez nem tétel.</p>' +
               '<p>5-kor keresd vacsorádat</p>' +
               '<p>Addig végezd csak a munkádat.</p>',
  btnTxt: 'Megvacsiztam.',
  img: {src: 'img/fight-50.jpg', alt:"The hero is fighting"},
  pwd: 'littlePrince'},

  {step: 5,
  title: 'A harcos el nem fárad!',
  instruction: '<p>A vacsora kissé felpörgetett,</p>' +
               '<p>Ideje megnézni a desszertet.</p><br>' +
               '<p>Kérd hűséges <span class="location">társ</span>ad segítségét.</p>' +
               '<p>Mutassa meg a kis sütikéjét.</p>',
  btnTxt: 'Desszerthas',
  img: {src: 'img/zelda-50.jpg', alt:"Loyal buddy"},
  pwd: 'pizza'},

  {step: 6,
  title: 'Indulás haza!',
  instruction: '<p>Bár jó volt kint,</p>' +
               '<p>Nézzük meg, otthon, hogy, s mint</p><br>' +
               '<p>Lehet, hogy a <span class="location">TV mellett</span></p>' +
               '<p>Meg kéne nézni a <span class="location">szekrény</span>eket?</p>',
  btnTxt: 'Wááá!',
  img: {src: 'img/dance-50.jpg', alt:"Dancing buddy"},
  pwd: 'fincsi'},

  {step: 7,
  title: 'Végső próba',
  instruction: '<p>Hosszú nap, sok fáradalom,</p>' +
               '<p>Ideje már aludnom.</p><br>' +
               '<p>Vagy lehet meg kéne tekintenem,</p>' +
               '<p>Mit rejtettek az ingembe?</p>',
  btnTxt: 'Vége?',
  img: {src: 'img/sleep-50.jpg', alt:"Sleepy?"},
  pwd: 'GOT'},

  {step: 8,
  title: 'Itt a vége...!',
  instruction: '<p>Boldog születésnapot kalandorom, Ammurom!</p>',
  btnTxt: '',
  img: {src: 'img/happy-50.jpg', alt:"Happy adventurer"},
  pwd: 'boldog'}
];

function toggleInput(action){
  var inputField = $('.input-pwd');
  if(action == 'hide'){
    inputField.css('display','none');
  }else{
    inputField.css('display','block');
  }
}

function nextStep(){
  var next = + $('.step-holder').text() +1;
  var nextStep = steps[next];
  var pwdNeeded = steps[next+1]?steps[next+1].pwd:'null';

  if(nextStep.pwd == 'null'){
    setStep(nextStep,pwdNeeded);
  }else{
    var inputValue = $('.input-pwd #pwd').val();
    if(nextStep.pwd == inputValue){
      setStep(nextStep,pwdNeeded);
    }else{
      $(".invalid-pwd").removeClass('initial no-show').addClass("show");
    }
  }

}

function negativeStep(){
  scrollTop();
  setOneButton();
  toggleInput('hide');
  $('.title').text('Something went wrong...');
  $('.long-text').html('<p>Hm... talán még nem értél meg a kalandra?</p>' +
                       '<p>Ha segítség kell, hívj! ^^</p>' +
                       '<p></p>');
  $('.back-btn').text("Folytatom!");
  changeImage("img/wrong2-50.jpg","Not a good direction");
}

function setTwoButtons(){
  $('.actions').html('<button class="next-btn" type="button"></button><button class="prev-btn" type="button"></button>');

  $( ".next-btn" ).click(function() {
    nextStep();
  });

  $( ".prev-btn" ).click(function() {
    negativeStep();
  });
}

function setOneButton(){
  $('.actions').html('<button class="back-btn" type="button"></button>');
  $( ".back-btn" ).click(function() {
      var currentStep = $('.step-holder').text()*1;
      var nextPwd = steps[currentStep+1]?steps[currentStep+1].pwd:'null';
      setTwoButtons();
      setStep(steps[currentStep],nextPwd);
  });
}

function addClickToAlert(){
  $( ".retry" ).click(function() {
    $(".invalid-pwd").removeClass('show').addClass("no-show");
  });
}

function setupInputField(){
  var input = $("#pwd");

  input.keyup(function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      $( ".next-btn" ).click();
    }
  });
}

function scrollTop(){
  $("html, body").animate({
        scrollTop: 0
    }, 400);
}

$(function() {
  letsDoIt();
})

function letsDoIt(){
  $('.wrapper').css('display','block');
  $('.guards').css('display','none');
  setupInputField();
  setTwoButtons();
  nextStep();
  addClickToAlert();
}

function changeText(txt){
  $('.title').fadeOut(500, function() {
        $(this).text(txt).fadeIn(500);
  });
}

function changeHTML(html){
  $('.long-text').fadeOut(500, function() {
        $(this).html(html).fadeIn(500);
  });
}

function changeBtnText(nextTxt){
  $('.next-btn').text(nextTxt);
  $('.prev-btn').text("Nah...");
}

function changeImage(src, alt){
  $('.text-img img').attr("src",src);
  $('.text-img img').attr("alt",alt);
}

function setStep(stepObj,pwdNeeded){
  scrollTop();
  changeText(stepObj.title);
  changeHTML(stepObj.instruction);
  changeBtnText(stepObj.btnTxt);
  if(stepObj.step == steps.length-1){
    $('.actions').css('display','none');
    $('.text-img img').css('max-width','100%');
  }
  changeImage(stepObj.img.src,stepObj.img.alt);
  $('.input-pwd #pwd').val('');

  if(pwdNeeded == 'null'){
    toggleInput('hide');
  }else{
    toggleInput('show');
  }

  $('.step-holder').text(stepObj.step);
}
