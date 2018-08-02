var _ref, _ref2;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var optsWhsl = {
  type: 'line',
  data: {
    labels: ["April 10",,, "April 11",,, "April 12",,, "April 13",,, "April 14",,,],
    datasets: [(_ref = {

      label: 'Graphic A',
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#32A7EC",
      borderColor: "#32A7EC",
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [2, 2.1, 3, 2.5, 3, 2.7, 2.8, 2.3, 3, 4.7, 3.9, 4.3, 4.3, 3.7, 3] }, _defineProperty(_ref, "pointBorderColor",
    false), _defineProperty(_ref, "spanGaps",
    false), _ref)] },



  options: {
    responsive: false,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true } } } };





var optsTemp = {
  type: 'line',
  data: {
    labels: ["April 10",,, "April 11",,, "April 12",,, "April 13",,, "April 14",,,],
    datasets: [(_ref2 = {

      label: 'Graphic B',
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#5176E8",
      borderColor: "#5176E8",
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 3.2, 4, 3.4, 4.2, 2.9, 2.5, 2.8, 2.7, 3, 2.8, 3, 2.8, 3.5, 2.8] }, _defineProperty(_ref2, "pointBorderColor",
    false), _defineProperty(_ref2, "spanGaps",
    false), _ref2)] },



  options: {
    responsive: false,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true } } } };



(function() {
  var j, typex;

  typex = function() {
    var alpha, name, s, texty;
    alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_', '$', '$', '$', '$', '$', '$', '$', '$', '$', '$', '$', '$', '$', '$', '$', '$'];
    name = 'Log Real Time';
    texty = '$ _ ' + name;
    if (j < texty.length) {
      s = Math.floor(Math.random() * 70);
      document.getElementById('my-text').innerHTML = alpha[s];
      setTimeout(typex, 20);
      if (alpha[s] === texty.charAt(j)) {
        document.getElementById('my-texty').innerHTML += alpha[s];
        j++;
        document.getElementById('my-text').innerHTML = '';
        setTimeout(typex, 5);
      }
    }
  };

  $(document).ready(function() {
    typex();
  });

  j = 0;

}).call(this);
var datos;

var jqxhr = $.get( "https://img.adnerp.net/", function(data) {
  console.log( "success" );
})
  .done(function (data) {
    datos = data
    console.log( "second success",data );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "finished" );
  });
// Perform other work here ...
// Set another completion function for the request above
jqxhr.always(function() {
  console.log("second finished", datos);
  var processes = datos.processes 
  $('#uptime').append(datos.system_info.uptime)
  $('#hostname').append(datos.system_info.hostname)
  
  $('#ma01').append(processes[4].name)
  $('#ma02').append(processes[5].name)



  
});