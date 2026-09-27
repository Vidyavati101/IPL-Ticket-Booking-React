function MatchCard({ team1, team2, date, venue }) {
    return (
        <div>
            <h2>{team1} vs {team2}</h2>
            <p>Date: {date}</p>
            <p>Venue: {venue}</p>
        </div>
    );
}

export default MatchCard;
