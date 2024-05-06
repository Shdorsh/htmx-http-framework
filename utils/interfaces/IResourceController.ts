import IController from "./IController";

export default interface IResourceController extends IController {
  get: (request, response) => void;
  post: (request, response) => void;
  put: (request, response) => void;
  delete: (request, response) => void;
}