import Footer from "../components/Footer";
import chef from "../assets/AIgeneratedChef.png"
import fries from "../assets/fries.jpg"

export default function About() {
  return (
    <div className="position-relative">
    <h1 className="about-page">About us</h1>
\    <div style={styles.container}>
    <br />
      <h2 className="fs-1">Welcome to Res-pe!</h2>
      <img src={chef} className="img-fluid rounded-2" alt="road from forest"></img>
      <br /><br /><h4>
      At <strong>res-pe</strong>, we believe that cooking should be fun, easy, and accessible to everyone. Whether you're a beginner or a seasoned chef, our platform is designed to help you explore, create, and share delicious recipes from around the world.
      </h4><br /><br /><br />
      <h1>Our Mission</h1>
      <ul>
    <li className="bg-success-subtle rounded p-3 m-2">
      <h4>✔ Discover new recipes from different cuisines.
</h4>
    </li>  

     <li className="bg-success-subtle rounded p-3 m-2">
      <h4>✔ Share their own unique recipes with the community.
</h4>
     </li> 
     
     <li className="bg-success-subtle rounded p-3 m-2">
      <h4>✔ Learn cooking tips, nutrition facts, and meal-planning ideas.</h4>
     </li>

      </ul>
      
<br /><br /><br />

      <h2>What We Offer</h2>
      <img src={fries} className="img-fluid rounded-4" alt="future_photo"></img>
<br /><br />
<ul>
  <li className="bg-primary-subtle rounded p-3 m-2">
      <h4>🍽 Wide Range of Recipes – From quick meals to gourmet dishes, find recipes that match your taste and preferences.</h4>
  </li>

  <li className="bg-primary-subtle rounded p-3 m-2">
      <h4>📖 Step-by-Step Instructions – Clear and detailed cooking guides for easy preparation.</h4>

  </li>

  <li className="bg-primary-subtle rounded p-3 m-2">
      <h4>🥗 Healthy Eating Options – Find recipes tailored to your dietary needs.</h4>
  </li>

</ul>
     
<br /><br />

<h3>Join Our Food-Loving Community!</h3>

      <h4>Become a part of <strong>res-pe</strong> and explore a world of flavors. Share your favorite recipes, experiment with ingredients, and create mouthwatering dishes that bring joy to your kitchen.

👉 Start your food journey today! Happy Cooking! 🍳✨</h4>
    </div>
    <Footer />

    </div>

  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
};