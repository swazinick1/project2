

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  });

  $.ajax({
    url:'/api/patients',
    method: 'GET'
  }).then(function(response){
    for(let i = 0; i < response.length; i++){
      let data = response[i];
      $("#patient-dropdown").append(`<a class="single-patient" data-id=${data.id}>${data.name}</a>`)
      // $("#patient-dropdown").append(`<div>${data.birthdate}</div>`)
      // $("#patient-dropdown").append(`<div>${data.info}</div>`)
    }
    console.log(response)
  });

  $.ajax({
    url:'/api/known_seq',
    method: 'GET'
  }).then(function(response){
    for(let i = 0; i < response.length; i++){
      let data = response[i];
      $("#seq-dropdown").append(`<div>${data.name}</div>`)
      $("#seq-dropdown").append(`<div>${data.info}</div>`)
      // $("#seq-dropdown").append(`<div>${data.sequence}</div>`)
    }
    console.log(response)
  });

// $("#search").on('click', function(event) {
//  event.preventDefault();
//  console.log("hello");

//  Post.findAll({
//   where: {
//     [Op.contains]: [{name:req.params.name}]
//   }
// });



//  let currentPatient = {
//    name: $("#search").val(),
//  }
//  $.ajax({
//    url: `/api/patients/${name}`,
//    method: 'GET'
//  }).then(function(response){
//    for(let i = 0; i < response.length; i++){
//      console.log(response[i]);
//      const dataName = response[i].name;
//      console.log(dataName);
   
//     }
//  })
  //  for(let i = 0; i < response.length; i++){
  //  let dataset = response[i];
  //  $('#patientName').append(`<div>${dataset.name}</div>`)
  //  $('#birth').append(`<div>${dataset.birthdate}</div>`)
  //  $('#info').append(`<div>${dataset.info}</div>`)
  //  }
 
 $("#patient-dropdown").on('click', ".single-patient", function(event){
  event.preventDefault();
  let id = $(this).data("id", "name")
  
  console.log(id)
  $.ajax({
    url: '/api/patients/:id',
    method: 'GET'
  }).then(function(response){
    $('#patientName').append(id)
    
    
  })
})


 $("#addPatient").on('click', function(event){
  event.preventDefault();
  console.log('hello')
  let patient = {
    name:$("#recipient-name").val(),
    birthdate:$("#birth-date").val(),
    info:$("#message-text").val()
  }
  $.ajax({
    url: '/api/patients',
    method: 'POST',
   data:patient
  }).then(function(response){
      console.log(response)
  })
  });





