const Chat = require('./models/Chat');

module.exports = function (io){
  let users = {};

  io.on('connection', async socket => {

    //Find Chats Old
    let messages = await Chat.find({})
    socket.emit('load old msgs',messages)

    //New User
    socket.on('new user', (data , cb) => {
      if(data in users){
        cb(false);
      }else{
        cb(true);
        socket.nickname = data;
        users[socket.nickname] = socket;
        updateNick();
      }
    });

    //Send Message
    socket.on('send message', async (data, cb) => {
      var msg = data.trim();
      //private message
      if (msg.substr(0,3)=== '/p ' ){
        msg = msg.substr(3);
        const index = msg.indexOf(' ');
        if(index !== -1){
          var name = msg.substring(0,index);
          var mag = msg.substring(index+1);
          if(name in users){
            users[name].emit('private',{
              msg : mag,
              user : socket.nickname
            });
          }else{
            cb('Error! Please enter a active User');
          }
        }else{
          cb('Error!, Please Enter your message or a active User');
        }
      }else{
        //Save Public Message
        var newChat = new Chat({
          msg: data,
          user: socket.nickname
        });
        await newChat.save();
        //Show Public Message
        io.sockets.emit('new message',{
          msg: data,
          nick: socket.nickname
        });
      }
    });

    //User Disconnect
    socket.on('disconnect', data => {
      if(!socket.nickname) return;
      delete users[socket.nickname];
      updateNick();
    });

    //Update Users
    function updateNick(){
      io.sockets.emit('usernames', Object.keys(users));
    }
  });
}
