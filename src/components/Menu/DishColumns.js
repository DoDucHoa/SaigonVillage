import DishBlock from "./DishBlock";

const DishColumns = ({ dishes }) => (
  <div className="row clearfix">
    {dishes.map((column, index) => (
      <div key={index} className="menu-col col-lg-6 col-md-12 col-sm-12">
        <div className="inner">
          {column.map((dish) => (
            <DishBlock key={dish.title} dish={dish} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default DishColumns;
