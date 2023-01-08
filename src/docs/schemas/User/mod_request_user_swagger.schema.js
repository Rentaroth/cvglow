const modRequestUserSchema = {
  type: "object",
  properties: {
    userName: {
      type: "string",
      example: "Elma-carron"
    },
    password: {
      type: "string",
      example: "anything!#password"
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

module.exports = { modRequestUserSchema };