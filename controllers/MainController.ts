import IController from "../utils/interfaces/IController";
import view from "../utils/view";

const MainController: IController = {
  get: (request, response) => {
    const context = {count: 20};
    response.send(view("main", context));
  }
}

export default MainController;