const jointUser = {
  properties: {
    User: {
      $ref: "#/components/schemas/requestUserSchema",
    },
    personalInfo : {
      $ref: "#/components/schemas/personalInfoSchema"
    }
  }
}

module.exports = { jointUser };