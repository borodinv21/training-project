import gitHubIcon from "./img/gitHub-black.svg";

export default function GitHubButton(props) {
  return (
    <a href={props.link} target="_blank" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
}
