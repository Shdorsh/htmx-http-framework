import getApp from "./express";
import IController from "./interfaces/IController";
import IResourceController from "./interfaces/IResourceController";

const app = getApp();

class Route {
  get = (route: string, mappedControl: [IController, string?]) => {
    const [controller, method = "get"] = mappedControl;
    app.get(route, (request, response) => {
      response.send(controller[method](request, response));
    });
  };
  post = (route: string, mappedControl: [IController, string?]) => {
    const [controller, method = "post"] = mappedControl;
    app.get(route, (request, response) => {
      response.send(controller[method](request, response));
    });
  };
  patch = (route: string, mappedControl: [IController, string?]) => {
    const [controller, method = "patch"] = mappedControl;
    app.get(route, (request, response) => {
      response.send(controller[method](request, response));
    });
  };
  put = (route: string, mappedControl: [IController, string?]) => {
    const [controller, method = "put"] = mappedControl;
    app.get(route, (request, response) => {
      response.send(controller[method](request, response));
    });
  };
  delete = (route: string, mappedControl: [IController, string?]) => {
    const [controller, method = "delete"] = mappedControl;
    app.get(route, (request, response) => {
      response.send(controller[method](request, response));
    });
  };
  options = (route: string, mappedControl: [IController, string?]) => {
    const [controller, method = "options"] = mappedControl;
    app.get(route, (request, response) => {
      response.send(controller[method](request, response));
    });
  };
  resource = (route: string, controller: IResourceController) => {
    this.get(route, [controller]);
    this.post(route, [controller]);
    this.put(route, [controller]);
    this.delete(route, [controller]);
  }
}

const router = new Route();

export default router;