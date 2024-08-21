let {createTransport} = require('nodemailer')

let transport = createTransport({
    service:"gmail",
    auth:{
        user:"snehatugaon@gmail.com",
        pass:"wqvwknnyrqvqdoir"
    }
})

let subscribemail=async(email)=>{
    let setinfo = await transport.sendMail({
        from:"snehatugaon@gmail.com",
        to:email,
        subject:"offer Ltter",
        html:`<h1>Dear ${email.split("@")[0]}</h1>,you are get selected bro`       
    })
    console.log(setinfo)
}

module.exports = subscribemail
