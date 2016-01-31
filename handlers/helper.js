(function() {

exports.version = '0.1.0';

exports.send_failure = function(err, res){
	var code = (err.code) ? err.code : err.name;
  res.writeHead(code, { "Content-Type" : "application/json" });
  res.end(JSON.stringify({ error: code, message: err.message }) + "\n");
}


exports.send_success = function(data, res){
	res.writeHead(200, {"Content-Type": "application/json"});
  var output = { error: null, data: data };
  res.end(JSON.stringify(output) + "\n");
}


exports.error = function (code, message) {
  var e = new Error(message);
  e.code = code;
  return e;
};

})();