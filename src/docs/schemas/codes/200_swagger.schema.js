const statusCode200 = (response) => {
  let content;
  if(response && response.flat) {
    content = {
      'aplication/json': {
        schema: {
          $ref: response.flat,
        },
      },
    }
    if(response.join) {
      content = {
        'aplication/json': {
          schema: {
            $ref: response.flat,
          },
        },
        'join:aplication/json': {
          schema: {
            $ref: response.join,
          },
        }
      }
    }
  }
  return {
    description: 'Operation finished successfully',
    content,
  };
}

module.exports = {
  statusCode200,
}