var passwords = {setStep1:"bd", setStep2:"Mario", setStep3:"lifeIsRunning", setStep4:"littlePrince", setStep5:"pizza", setStep6:"fincsi",setStep7:"GOT",setStep8:"boldog"}

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

function setStep2(){
  $('.title').text('No de a felszerelés?');
  $('.long-text').html('<p>Mielőtt kilépnél a házból,</p>' +
                       '<p>A kamrát nézd meg jól!</p><br>' +
                       '<p>Találsz ott foltos zsákot</p>' +
                       '<p>Rakhatod bele kis kardod.</p><br>'
                     );
  $('.next-btn').text("Megvan!");
  $('.prev-btn').text("Nah...");
  $('.text-img img').attr("src","img/bpack.jpg");
  $('.text-img img').attr("alt","Adventurer with backpack");

}

function setStep3(){
  $('.title').text('Nehéz a munka...');
  $('.long-text').html('<p>Neki vághatsz most már!</p>' +
                       '<p>A vonat ugyan nem vár...</p><br>' +
                       '<p>Munkahelyed üresnek tűnhet.</p>' +
                       '<p>Kis szekrényed azért nézd meg!</p><br>' +
                       '<p>Az alsó fiókban tán?</p>' +
                       '<p>Ajándék nem terem a fán...</p>'
                     );
  $('.next-btn').text("Indul a munka!");
  $('.prev-btn').text("Nah...");
  $('.text-img img').attr("src","img/work.jpg");
  $('.text-img img').attr("alt","The hero starts working");

}

function setStep4(){
  $('.title').text('Harc a munkában...');
  $('.long-text').html('<p>Dolgozni sokat kell...</p>' +
                       '<p>Délután 5-ig a harcos csak gépel.</p><br>' +
                       '<p>Amint vége az izgalmaknak,</p>' +
                       '<p>Adj egy esélyt olaszunknak.</p><br>' +
                       '<p>Van egy hely, hol nagy az étel,</p>' +
                       '<p>SZÉP kártyánknak ez nem tétel.</p>' +
                       '<p>6-kor keresd vacsorádat</p>' +
                       '<p>Addig végezd csak a munkádat.</p>'
                     );
  $('.next-btn').text("Megvacsiztam.");
  $('.prev-btn').text("Nah...");
  $('.text-img img').attr("src","img/fight.jpg");
  $('.text-img img').attr("alt","The hero is fighting");

}

function setStep5(){
  $('.title').text('A harcos el nem fárad!');
  $('.long-text').html('<p>A vacsora kissé felpörgetett,</p>' +
                       '<p>Ideje megnézni a desszertet.</p><br>' +
                       '<p>Kérd hűséges társad segítségét.</p>' +
                       '<p>Mutassa meg a kis sütikéjét.</p><br>'
                     );
  $('.next-btn').text("Desszerthas.");
  $('.prev-btn').text("Nah...");
  $('.text-img img').attr("src","img/zelda.jpg");
  $('.text-img img').attr("alt","Loyal buddy");

}

function setStep6(){
  $('.title').text('Indulás haza!');
  $('.long-text').html('<p>Bár jó volt kint,</p>' +
                       '<p>Nézzük meg, otthon, hogy, s mint</p><br>' +
                       '<p>Lehet, hogy a TV mellett</p>' +
                       '<p>Meg kéne nézni a szekrényeket?</p><br>'
                     );
  $('.next-btn').text("Wááá!");
  $('.prev-btn').text("Nah...");
  $('.text-img img').attr("src","img/dance.jpg");
  $('.text-img img').attr("alt","Dancing buddy");

}

function setStep7(){
  $('.title').text('Végső próba');
  $('.long-text').html('<p>Hosszú nap, sok fáradalom,</p>' +
                       '<p>Ideje már aludnom.</p><br>' +
                       '<p>Vagy lehet meg kéne tekintenem,</p>' +
                       '<p>Mit rejtettek az ingembe?</p><br>'
                     );
  $('.next-btn').text("Vége?");
  $('.prev-btn').text("Nah...");
  $('.text-img img').attr("src","img/sleep.jpg");
  $('.text-img img').attr("alt","Dancing buddy");

}

function setStep8(){
  $('.title').text('Itt a vége...!');
  $('.long-text').html('<p>Boldog születésnapot kalandorom, Ammurom!</p>');
  $('.input-pwd').css('display','none');
  $('.actions').css('display','none');
  $('.text-img img').css('max-width','100%');
  $('.text-img img').attr("src","img/happy.jpg");
  $('.text-img img').attr("alt","Dancing buddy");

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
  var getNextStep = "setStep" + next;
  var inputValue = $('.input-pwd #pwd').val();

  if(passwords[getNextStep] == inputValue){
    $('.step-holder').text(next);
    var fn = window[getNextStep];
    toggleInput('show');
    fn();
    $('.input-pwd #pwd').val('');
  }else{
    alert("WTF?");
  }

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
