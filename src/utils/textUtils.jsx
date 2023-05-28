import ReactDOMServer from "react-dom/server";

export const linkGen = (path, name) => {
  return ReactDOMServer.renderToStaticMarkup(
    <a
      className="text-jetbrown underline"
      target="_blank"
      href={path}
      rel="noreferrer"
    >
      {name}
    </a>
  );
};
export const strongGen = (text) => {
  return ReactDOMServer.renderToStaticMarkup(<strong>{text}</strong>);
};
