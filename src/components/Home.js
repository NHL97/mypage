import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1 className="title">Welcome to My Website</h1>
        <p className="paragraph">Discover the latest trends in technology, coding tutorials, and insightful articles to boost your skills.</p>
        <p className="paragraph">Whether you're a beginner or an experienced developer, you'll find valuable resources and inspiration here. Stay tuned for updates and feel free to explore!</p>
        <button className="learn-more-button" aria-label="Learn More">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
