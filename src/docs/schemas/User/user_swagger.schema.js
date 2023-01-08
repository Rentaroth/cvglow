const responseUserSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      example: 837492318
    },
    user_name: {
      type: "string",
      example: "Elma-carron"
    },
    e_mail: {
      type: "string",
      example: "Elma-carron@mail.com"
    },
    person_id: {
      type: "integer",
      example:837492318
    },
    created_at: {
      type: "datetime",
      example: "2022-12-22T19:29:35.000Z"
    },
    updated_at: {
      type: "datetime",
      example: "2022-12-22T19:29:35.000Z"
    },
    is_admin: {
      type: "boolean",
      example: 0
    }
  }
}

module.exports = { responseUserSchema };