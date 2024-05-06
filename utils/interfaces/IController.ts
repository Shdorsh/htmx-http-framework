export default interface IController {
  [method: string]: (request, response) => void;
}
