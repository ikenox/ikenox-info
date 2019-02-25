import * as React from "react";

class PocketButton extends React.Component {
  componentDidMount(): void {
    let script = document.createElement("script");
    script.id = "pocket-btn-js";
    script.src = "https://widgets.getpocket.com/v1/j/btn.js?v=1";
    script.async = true;
    document.getElementById("pocket-wrapper").appendChild(script);
  }

  render() {
    return (
      <div id="pocket-wrapper">
        <a
          data-pocket-label="pocket"
          data-pocket-count="horizontal"
          className="pocket-btn"
          data-lang="en"
        />
      </div>
    );
  }
}
export default PocketButton;
