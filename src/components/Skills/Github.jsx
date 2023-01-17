import GitHubCalendar from 'react-github-calendar';

function Github() {
  return (
    <div className="flex flex-col justify-center items-center p-6 pb-28 pt-4">
      <h1 className="mb-12 text-4xl sm:text-5xl text-center">
        Commit <strong className="text-purpMain-50">Frequency</strong>
      </h1>
      <GitHubCalendar
        username="dezzEP"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
