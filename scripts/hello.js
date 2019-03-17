'use strict';

module.exports=(robot)=>{
    robot.hear(/hello>/i,(msg)=>{
        const username=msg.message.user.name;
        msg.send('hello,'+username);
    });
};