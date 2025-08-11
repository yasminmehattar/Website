import PropTypes from 'prop-types';

function Detail(props) {
    console.log("Detail props:", props);
  return (
    <div className="detail">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>IT Department: {props.ITDepartment ? "yes" : "No"}</p>
    </div>
  );
}

Detail.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  ITDepartment: PropTypes.bool,
};

Detail.defaultProps = {
  name: "Guest",
  age: 0,
  ITDepartment: true,
};

export default Detail;
