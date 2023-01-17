import Card from './Cards';
import {
  SiLinux,
  SiVisualstudiocode,
  SiWebpack,
  SiOpenai,
  SiOracle,
  SiTailwindcss,
  SiJest,
} from 'react-icons/si';
import {
  DiDocker,
  DiGit,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiSass,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';
import { BsBootstrap } from 'react-icons/bs';
import { AiFillApple, AiFillWindows } from 'react-icons/ai';

const Technology = () => {
  return (
    <div className="bg-black pt-36">
      <h1 className="text-4xl sm:text-5xl font-bold text-center pb-4 mb-6">
        Professional <span className="text-purpMain-50">Skillset</span>
      </h1>
      <div className="flex flex-wrap justify-center p-6 max-w-6xl mx-auto">
        <Card item={<DiJavascript1 />} title="JavaScript" />
        <Card item={<DiReact />} title="React" />
        <Card item={<DiNodejs />} title="Node.js" />
        <Card item={<DiMongodb />} title="MongoDB" />
        <Card item={<DiJava />} title="Java" />
        <Card item={<SiOracle />} title="Oracle" />
        <Card item={<DiHtml5 />} title="HTML" />
        <Card item={<DiCss3 />} title="CSS" />
        <Card item={<DiSass />} title="Sass" />
        <Card item={<SiTailwindcss />} title="Tailwind" />
        <Card item={<BsBootstrap />} title="Bootstrap" />
        <Card item={<SiJest />} title="Jest" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-center pb-4 mb-6 mt-6">
        <span className="text-purpMain-50">Tools</span> I use
      </h1>
      <div className="flex flex-wrap justify-center p-6 max-w-6xl mx-auto mb-6">
        <Card item={<AiFillApple />} title="MacOS" />
        <Card item={<AiFillWindows />} title="Windows" />
        <Card item={<SiLinux />} title="Linux" />

        <Card item={<DiGit />} title="Git"></Card>

        <Card item={<SiVisualstudiocode />} title="VS Code" />
        <Card item={<SiOpenai />} title="OpenAI" />
        <Card item={<SiWebpack />} title="Webpack" />
        <Card item={<DiDocker />} title="Docker" />
      </div>
    </div>
  );
};
export default Technology;
