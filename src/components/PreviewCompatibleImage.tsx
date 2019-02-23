import * as React from "react";
import Img from "gatsby-image";

const PreviewCompatibleImage: React.FC<{
  alt: string;
  childImageSharp: any;
  image: string | any;
  style: any;
}> = props => {
  const imageStyle = { borderRadius: "5px" };

  if (!!props.image && !!props.image.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={props.image.childImageSharp.fluid}
        alt={props.alt}
      />
    );
  }

  if (!!props.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={props.childImageSharp.fluid}
        alt={props.alt}
      />
    );
  }

  if (!!props.image && typeof props.image === "string")
    return <img style={imageStyle} src={props.image} alt={props.alt} />;

  return null;
};

export default PreviewCompatibleImage;
