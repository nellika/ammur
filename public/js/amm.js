function setStep0(){
  toggleInput('hide');
  $('.title').text('Szép jó reggelt Ammur (26)!');
  $('.long-text').html('<p>Úgy látszik, megértél egy kis kalandra...</p>' +
                       '<p>Készen állsz?</p>');
  $('.next-btn').text("I'm in!");
  $('.prev-btn').text("Nah...");
  $('.text-img img').attr("src","img/hi.jpg");
  $('.text-img img').attr("alt","Link says hi to your birthday");

}

function setStep1(){
  $('.title').text('Éhes vándor nem jut messzire...');
  $('.long-text').html('<p>Indulnál már, tudom,</p>' +
                       '<p>De mi lesz így az úton?</p><br>' +
                       '<p>Szükség van energiára</p>' +
                       '<p>Vadászat ennek az ára!</p><br>' +
                       '<p>Konyhában az eszköz, s a vad</p>' +
                       '<p>A szekrényből el nem szalad.</p>'
                     );
  $('.next-btn').text("Jelentem, ettem!");
  $('.prev-btn').text("Nah...");
  $('.text-img img').attr("src","img/hungry.jpg");
  $('.text-img img').attr("alt","Hungry adventurer");

}

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
  $('.step-holder').text(next);
  var getNextStep = "setStep" + next;
  var fn = window[getNextStep];
  toggleInput('show');
  fn();
}

function negativeStep(){
  setOneButton();
  toggleInput('hide');
  $('.title').text('Something went wrong...');
  $('.long-text').html('<p>Hm... talán még nem értél meg a kalandra?</p>' +
                       '<p></p>');
  $('.back-btn').text("Folytatom!");
  $('.text-img img').attr("src","img/wrong2.jpg");
  $('.text-img img').attr("alt","Not a good direction");
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
      var currentStep = $('.step-holder').text();
      var resetStep = 'setStep' + currentStep;
      var fn = window[resetStep];
      setTwoButtons();
      fn();
  });
}



$(function() {
    console.log( "Page is ready! ^^" );
    setTwoButtons();
    setStep0();
});
