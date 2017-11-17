document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('step12').addEventListener('click', (e) => {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  });

  // can use jquery here too $('#step3456')
  document.getElementById('step3456').addEventListener('click', (e) => {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/ping",
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done((responseData) => {
      console.log(responseData);
      let p = document.createElement('p'); // create a paragraph tag
      p.innerText = responseData; // give the p tag responseData
      $("#step3456").append(p); // use jquery to select the id and append the p with the responseData
    }).fail( () => { // this will execute if there is a server error
      console.log("this request fucked up and broke, womp womp womp!");
      let fail = document.createElement('p');
      fail.innerText = "Oh Uh, SumTing dun Goof'd. Giv'r anod'r shawt! :P"; //error message that will display if there is an issue with the request
      $("#step3456").append(fail);
    }).always( () => {
      console.log("Hey the request finished!");
    });
  });

  document.getElementById('step7').addEventListener('click', (e) => {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done((responseData) => {
      console.log(responseData);
      let p = document.createElement('p');
      p.innerText = responseData;
      $("#step7").append(p);
    }).fail( () => {
      console.log("this request fucked up and broke, womp womp womp!");
      let fail = document.createElement('p');
      fail.innerText = "Oh Uh, SumTing dun Goof'd. Giv'r anod'r shawt! :P";
      $("#step7").append(fail);
    }).always( () => {
      console.log("Hey the request finished!");
    });
  });

  document.getElementById('step8').addEventListener('click', (e) => {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/time",
      method: 'GET',
      data: {timezone: 'Pacific/Honolulu'},
      dataType: 'text'
    }).done((responseData) => {
      let time = document.createElement('p');
      time.innerText = responseData
      $("#step8").append(time);
    });
  });

  document.getElementById('step9').addEventListener('click', (e) => {
    // console.log('clicked');
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: 'GET',
      data: {},
      dataType: 'html'
    }).done( (responseData) => {
      // console.log(responseData);
      $('#step9').append(responseData);
    });
  });

});
