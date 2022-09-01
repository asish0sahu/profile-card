const element = (
  <div className="bg-card d-flex flex-column justify-content-center">
    <h1 className="heading1">Congratulation</h1>
    <div className="profile_card d-flex flex-column justify-content-center ">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img1"
      />
      <h1 className="profile-head"> Kiran V</h1>
      <p className="college-name">
        Centurion university of Technology,Bhubaneswar
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img1"
      />
    </div>
  </div>
  // Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
