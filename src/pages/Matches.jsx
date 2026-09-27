import MatchCard from "../components/MatchCard";

function Matches() {
    const matches = [
        {
            team1: "RCB",
            team2: "CSK",
            date: "10 April 2027",
            venue: "M. Chinnaswamy Stadium, Bangalore"
        },
        {
            team1: "MI",
            team2: "KKR",
            date: "12 April 2027",
            venue: "Wankhede Stadium, Mumbai"
        },
        {
            team1: "CSK",
            team2: "MI",
            date: "15 April 2027",
            venue: "Chepauk Stadium, Chennai"
        }
    ];

    return (
        <div>
            <h2>Match Schedule</h2>

            {matches.map((match, index) => (
                <MatchCard
                    key={index}
                    team1={match.team1}
                    team2={match.team2}
                    date={match.date}
                    venue={match.venue}
                />
            ))}
        </div>
    );
}

export default Matches;