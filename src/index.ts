exports.http = (request, response) => {
  // console.log(request);
  response.status(200).send('Hello World!');
};

exports.event = (event, callback) => {
  callback();
};
