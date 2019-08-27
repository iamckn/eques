function callFunAgain() {
  console.log("Script loaded successfully ");
  Java.perform(function () { 
      
      var XMPPUtil = Java.use("com.kankunit.smartknorns.commonutil.XMPPUtil")
      XMPPUtil.insertTimestampIntoMessage.overload('java.lang.String', 'com.kankunit.smartknorns.database.model.DeviceModel', 'boolean').implementation = function (arg1, arg2, arg3) {
        console.log("[*] insertTimestampIntoMessage() got called!");
        console.log("===========================================================");
        console.log("arg1:" + arg1);
        console.log("arg2:" + arg2);
        console.log("arg3:" + arg3);
        console.log("RESULT:" + this.insertTimestampIntoMessage(arg1, arg2, arg3));
        console.log("===========================================================");
        retval = this.insertTimestampIntoMessage(arg1, arg2, arg3);
        return retval;
      };
  });
}

rpc.exports = {
    callsecretfunction: callFunAgain 
};
