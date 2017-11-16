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
    });
  });



});
