const Header = ({ handleTitleClick }) => {
  return (
    <div className="header-container">
      <h1
        className="title"
        onClick={handleTitleClick}>
        Aura
      </h1>
      <p className="description">
        拉丁词「Aura」的中文翻译是气息或空气，还可以指代一种氛围的感觉。
        <br />
        这就是这个项目的全部意义。
      </p>
    </div>
  );
};

export default Header;
