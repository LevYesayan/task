interface Items {
  items: Array<any>;
}

const CourseContent = ({ items }: Items) => (
  <div className="courses-container d_grid">
    {items.map((el) => (
      <img style={{ width: "100%", height: "auto" }} src={el.src} alt="img" />
    ))}
  </div>
);

export default CourseContent;
