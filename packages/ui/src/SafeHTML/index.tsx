import DOMPurify from "dompurify";
import parse from "html-react-parser";

interface ISafeHTMLPRops {
  html: string;
}

export const SafeHTML = ({ html }: ISafeHTMLPRops) => {
  const cleanHTML = DOMPurify.sanitize(html);
  const reactElement = parse(cleanHTML);

  return <>{reactElement}</>;
};
