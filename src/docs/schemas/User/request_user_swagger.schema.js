const requestUserSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      example: 837492318
    },
    userName: {
      type: "string",
      example: "Elma-carron"
    },
    eMail: {
      type: "string",
      example: "Elma-carron@mail.com"
    },
    personId: {
      type: "integer",
      example:837492318
    }
  }
}

module.exports = { requestUserSchema };