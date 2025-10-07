import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="overlay">
        <h1>LET US WASH DRY FOLD AND REPEAT</h1>
        <p>
          We are professionals in the laundry and dry cleaning business, which means we always stay up to date
          on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics.
          We maintain the highest standards of business integrity by following local and national regulations
          and environmental safety rules. We are passionate about changing the way you think about laundry!
        </p>

        <div className="buttons">
          <button className="btn-outline" onClick={() => window.location.href = 'http://localhost/backend/signup.php'}>SIGN UP</button>
          <button className="btn-outline" onClick={() => window.location.href = 'http://localhost/backend/signin.php'}>SIGN IN</button>
        </div>
      </div>

      <div className="function-section">
        <h2>HOW WE FUNCTION</h2>
        <div className="function-images">
          <img src="https://via.placeholder.com/150" alt="Step 1" />
          <img src="https://via.placeholder.com/150" alt="Step 2" />
          <img src="https://via.placeholder.com/150" alt="Step 3" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
