$(function () {
  const socket = io();

  //getting the elements DOM from interface
  const messageForm =$('#message-form');
  const messageBox  =$('#message');
  const chat =$('#chat');

  //getting the elements DOM from NickForm
  const nickForm = $('#nickForm');
  const nickError = $('#nickError');
  const nickName = $('#nickname');

  const users = $('#usernames');

  //events

  nickForm.submit(e => {
    e.preventDefault();
      socket.emit('new user', nickName.val(), data => {
        if(data) {
          $('#userWrap').hide();
          $('#contentWrap').show();
        } else {
          nickError.html(`
            <div class="alert alert-danger">
              That username already Exists.
            </div>
          `);
        }
      });
      nickName.val('');
    });

  messageForm.submit( e => {
      e.preventDefault();
      socket.emit('send message',messageBox.val(), data =>{
        chat.append(`<p class="error"> ${data}</p>`)
      });
      messageBox.val('');
  });

  socket.on('new message', function(data){
    chat.append('<b/>'+data.nick+'</b>: '+ data.msg +'<br>');
  });

  socket.on('private', data => {
      chat.append(`<p class="private"><b>${data.user}:</b> ${data.msg}</p>`);
  });


  socket.on('usernames', data =>{
    let html='';
    for (let i = 0; i < data.length; i++) {
      html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`
    }
    users.html(html);
  });
  socket.on('load old msgs', data =>{
    for (let i = 0; i < data.length; i++) {
      displayMsg(data[i]);
    }
  });
function displayMsg(data) {
  chat.append(`<p class="private"><b>${data.user}:</b> ${data.msg}</p>`);
}

})
