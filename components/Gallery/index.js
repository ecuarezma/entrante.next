import imageLoader from "../utilities/imageLoader";
import classes from "./Gallery.module.css";

const Gallery = ({ page }) => {
  return <div className={classes.Gallery}>{imageLoader(page)}</div>;
};

export default Gallery;
