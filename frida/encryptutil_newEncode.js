function callFunAgain() {
  console.log("Script loaded successfully ");
  Java.perform(function () { 
 
      var EncryptUtil = Java.use("com.kankunit.smartknorns.commonutil.EncryptUtil")
      EncryptUtil.newEncode.overload('java.lang.String', 'com.kankunit.smartknorns.database.model.DeviceModel').implementation = function (arg1, arg2) {
        console.log("[*] newEncode() got called!");
        console.log("===========================================================");
        console.log("arg1:" + arg1);
        console.log("arg2:" + arg2);
        console.log("RESULT:" + this.newEncode(arg1, arg2));
        console.log("===========================================================");
        retval = this.newEncode(arg1, arg2);
        return retval;
      };
  });
}

rpc.exports = {
    callsecretfunction: callFunAgain 
};
