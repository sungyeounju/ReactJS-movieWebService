import ProTypes from "prop-types";
function Movies(title,coverImg,summery){
  return(
    <div>
      <h1>{title}</h1>
      <img src={coverImg} alt={title} />
      <p>{summery}</p>
    </div>
  )
}
Movies.ProTypes = {
  title : ProTypes.string.isRequired,
  coverImg : ProTypes.string.isRequired,
  summery : ProTypes.string.isRequired,
}
export default Movies; 