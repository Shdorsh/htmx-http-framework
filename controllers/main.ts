import IController from "../utils/interfaces/IController";
import view from "../utils/view";

const MainController: IController = {
  get: (request, response) => {
    const context = {test: "world"};
    response.send(view("main", context));
  }
}

export default MainController;