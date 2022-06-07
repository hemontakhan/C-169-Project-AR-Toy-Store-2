AFRAME.registerComponent('buttons',{
 init: function(){
     var rate_button = document.createElement('button')
     rate_button.innerHTML = 'ORDER SUMMARY'
     rate_button.setAttribute('id','summary-button')
     rate_button.setAttribute('class','btn btn-warning');

     var buy_button = document.createElement('button')
     buy_button.innerHTML = 'BUY NOW'
     buy_button.setAttribute('id','purchasing-button')
     buy_button.setAttribute('class','btn btn-warning');

     var display_button = document.getElementById('button-div') 
     display_button.appendChild(rate_button);
     display_button.appendChild(buy_button)
 } 
})