const authService = require("../services/auth.services");
class authController {
  static async authenticate(req, res) {
    const { password, userName } = req.body;
    try {
      const result = await authService.logIn(userName, password);
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send();
    }
  }

  static async signUp(req, res) {
    const { email, password, userName, firstName, lastName, role } = req.body;

    try {
      const result = await userService.signUp(
        email,
        password,
        userName,
        firstName,
        lastName,
        role
      );

      return res.status(201).send(result);
    } catch (error) {
      console.log(error.message);
      switch (error.message) {
        case "User alredy exists":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
          res.sendStatus(409);
          break;
        case "Failed by not input":
          res.sendStatus(500);
          break;

        default:
          return res.sendStatus(500);
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      }
    }
  }
}

module.exports = authController;
