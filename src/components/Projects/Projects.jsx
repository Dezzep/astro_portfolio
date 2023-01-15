import ProjectCard from './PojectCards.jsx';
import webStoreImage from '../../Assets/Projects/shop-device.png';
import libraryImage from '../../Assets/Projects/library-device.png';
import portfolioImage from '../../Assets/Projects/portfolio-device.png';
import weatherImage from '../../Assets/Projects/weather-device.png';
import TailwindDiv from './icons/Tailwind.jsx';
import Html5Div from './icons/Html5.jsx';
import ReactDiv from './icons/React.jsx';
import MongoDbDiv from './icons/Mongodb.jsx';
import NodeJsDiv from './icons/Nodejs.jsx';
import JavaScriptDiv from './icons/JavaScript.jsx';
import SassDiv from './icons/Sass.jsx';
import WebPackDiv from './icons/Webpack.jsx';

const Projects = () => {
  return (
    <div className="bg-black pt-12 pb-16">
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl mb-4">
            My Recent <strong className="text-purpMain-50 ">Works </strong>
          </h1>
          <p className="pb-32">
            Here are a few projects I've worked on recently.
          </p>
          <div className="container grid  grid-cols-1 xl:grid-cols-2  mx-auto px-8 md:px-16 lg:px-24 w-full gap-12 items-center py-6">
            <ProjectCard
              title="Web Store"
              image={webStoreImage}
              alt="A hero page for a fake e-commerce website"
              description="Browse a fully responsive mock clothing e-store. Add and remove clothes from your shopping cart. View the total price of all your items. All of the clothing that you see on this store are retrieved from a fake store API."
              source="https://github.com/Dezzep/shopping-cart"
              preview="https://dezzep.github.io/shopping-cart/"
              tools1={<ReactDiv />}
              tools2={<TailwindDiv />}
            />

            <ProjectCard
              title="Book Tracker"
              image={libraryImage}
              alt="A library tracker web application to keep track of what books you have or haven't read"
              description="Sign up, login and keep track of your books. All of your books are automatically saved, you can view and edit them on any device. Rate your books out of 5 stars. If you can't decide what to read, click the random book button."
              source="https://github.com/Dezzep/library-rework"
              tools1={<NodeJsDiv />}
              tools2={<MongoDbDiv />}
              tools4={<TailwindDiv />}
              tools3={<ReactDiv />}
            />
            <ProjectCard
              title="Portfolio"
              image={portfolioImage}
              alt="A website of a personal portfolio created by Jacob Handelman and about Jacob Handelman."
              description="This was my first attempt at using React and Tailwind. I decided to use them in unison because Tailwind compliments the use of React components very effectively."
              source="https://github.com/Dezzep/Portfolio"
              preview="https://dezzep.github.io/Portfolio/"
              tools1={<ReactDiv />}
              tools2={<TailwindDiv />}
            />
            <ProjectCard
              title="Weather App"
              image={weatherImage}
              alt="A website of a weather application which is showing montreal's weather"
              description="Uses a weather api to fetch data and displays the information obtained. Converts temperatures and averages out received data to determine the five day forecast."
              source="https://github.com/Dezzep/weather-app"
              preview="https://dezzep.github.io/weather-app/"
              tools1={<JavaScriptDiv />}
              tools2={<SassDiv />}
              tools3={<Html5Div />}
              tools4={<WebPackDiv />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
